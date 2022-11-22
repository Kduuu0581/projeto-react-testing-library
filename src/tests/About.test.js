import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('2 Teste o componente <About.js />', () => {
  test('2.1 A página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const pokedex = screen.getByRole('heading', { name: /About Pokédex/i,
      level: 2 });
    const img = screen.getByRole('img', { name: /Pokédex/i });
    expect(pokedex).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
