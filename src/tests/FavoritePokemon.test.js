import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemon from '../pages/FavoritePokemon';

describe('3 Teste o componente <FavoritePokemon.js />', () => {
  test('3.1 É exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos;', () => {
    renderWithRouter(<FavoritePokemon />);
    const notFoundPokemon = screen.getByText(/No favorite pokémon found/i);
    expect(notFoundPokemon).toBeInTheDocument();
  });
});
