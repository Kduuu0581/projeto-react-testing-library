import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('4 Teste o componente <NotFound.js />', () => {
  test('4.1 A página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const heading = screen.getByRole('heading', { level: 2, name: /Page requested not found/i });
    expect(heading).toBeInTheDocument();
  });
  test('4.2 A página mostra uma imagem ', () => {
    renderWithRouter(<NotFound />);
    const img = screen.getByRole('img');
    expect(img.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
