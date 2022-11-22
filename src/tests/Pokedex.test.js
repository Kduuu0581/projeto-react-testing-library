import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('5 Teste o componente <Pokedex.js />', () => {
  test('5.1 A página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);
    const headingH2 = screen.getByRole('heading', { level: 2, name: /Encountered Pokémon/i });
    expect(headingH2).toBeInTheDocument();
  });
  test('5.2 É exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    renderWithRouter(<App />);
    const nextPokemon = screen.getByRole('button', { name: /Próximo Pokémon/i });
    userEvent.click(nextPokemon);
    const pokemonName = screen.getByText(/Charmander/i);
    expect(pokemonName).toBeInTheDocument();
  });
  test('5.3 É  mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);
    const onePokemon = screen.getAllByTestId('pokemon-name');
    expect(onePokemon.length).toBe(1);
  });
  test('5.4 A Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const buttons = screen.getAllByTestId('pokemon-type-button');
    const buttonSize = 7;
    const buttonAll = screen.getByRole('button', { name: /All/i });

    expect(buttons.length).toBe(buttonSize);
    expect(buttonAll).toBeInTheDocument();
    expect(buttons[0]).toHaveTextContent('Electric');
    expect(buttons[1]).toHaveTextContent('Fire');
    expect(buttons[2]).toHaveTextContent('Bug');
    expect(buttons[3]).toHaveTextContent('Poison');
    expect(buttons[4]).toHaveTextContent('Psychic');
    expect(buttons[5]).toHaveTextContent('Normal');
    expect(buttons[6]).toHaveTextContent('Dragon');
    userEvent.click(buttons[1]);
    const pokemonName = screen.getByText(/Charmander/i);
    expect(pokemonName).toBeInTheDocument();
  });
  test('5.5 A Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByRole('button', { name: /All/i });
    expect(buttonAll).toBeInTheDocument('All');
    userEvent.click(buttonAll);
    const pokemonName = screen.getByText(/Pikachu/i);
    expect(pokemonName).toBeInTheDocument();
  });
});
