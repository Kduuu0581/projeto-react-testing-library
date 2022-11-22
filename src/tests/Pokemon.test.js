import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('6. Teste o componente <Pokemon.js />', () => {
  test('6.1 É renderizado um card com as informações de determinado Pokémon', () => {
    const { history } = renderWithRouter(<App />);
    const pokemonName = screen.getByText(/Pikachu/i);
    const pokemonType = screen.getAllByText(/Electric/i);
    const pokemonWeight = screen.getByText(/Average weight: 6.0 kg/i);
    const pokemonImage = screen.getByRole('img', { name: /Pikachu sprite/i });
    const pokemonLink = screen.getByRole('link', { name: /More details/i });

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonType.length).toBe(2);
    expect(pokemonWeight).toBeInTheDocument();
    expect(pokemonImage.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pokemonImage.alt).toBe('Pikachu sprite');
    expect(pokemonLink.href).toBe('http://localhost/pokemon/25');
    expect(pokemonLink).toBeInTheDocument();

    userEvent.click(pokemonLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemon/25');
  });
  test('6.2 Existe um ícone de estrela nos Pokémon favoritados', () => {
    renderWithRouter(<App />);
    const pokemonLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(pokemonLink);
    const checkedStar = screen.getByRole('checkbox');
    userEvent.click(checkedStar);
    const star = screen.getByRole('img', { name: /Pikachu is marked as favorite/i });
    expect(star.src).toBe('http://localhost/star-icon.svg');
    expect(star.alt).toBe('Pikachu is marked as favorite');
  });
});
