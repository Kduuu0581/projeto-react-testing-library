import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('7 Teste o componente <PokemonDetails.js />', () => {
  test('7.1 As as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    renderWithRouter(<App />);
    const pokemonLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(pokemonLink);
    const pokemonName = screen.getByRole('heading', { name: /Pikachu Details/i, level: 2 });
    const pokemonSummary = screen.getByRole('heading', { name: /Summary/i, level: 2 });
    const pokemonSummaryText = screen.getByText(/This intelligent Pokémon roasts hard berries/i);
    const pokemonPageDetailsLink = screen.queryByRole('link', { name: /More Details/i });

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonSummary).toBeInTheDocument();
    expect(pokemonSummaryText).toBeInTheDocument();
    expect(pokemonPageDetailsLink).not.toBeInTheDocument();
  });
  test('7.2 Existe na página uma seção com os mapas contendo as localizações do Pokémon', () => {
    renderWithRouter(<App />);
    const pokemonLinkDetail = screen.getByRole('link', { name: /More details/i });
    userEvent.click(pokemonLinkDetail);
    const pokemonLocation = screen.getByRole('heading', { name: /Game Locations of Pikachu/i, level: 2 });
    const pokemonimageLocation = screen.getAllByRole('img', { name: /Pikachu location/i });
    const label = screen.getByLabelText('Pokémon favoritado?');

    expect(pokemonLocation).toBeInTheDocument();
    expect(pokemonimageLocation.length).toBe(2);
    expect(pokemonimageLocation[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(pokemonimageLocation[1].src).toBe('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(label).toBeInTheDocument();
  });
});
