import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import * as services from './services/getData';
import App from './App';

jest.spyOn(services, 'getData')
describe('<App />', () => {
  it('deve renderizar o formulário com o botão desabilitado', () => {
    render(<App />);
    const botao = screen.getByText('Pesquisar');
    const input = screen.getByTestId('input');

    expect(botao).toHaveAttribute('disabled');
    expect(botao).toBeInTheDocument();

    userEvent.type(input, '12');
    expect(input).toHaveValue('12');
    expect(botao).toHaveAttribute('disabled');
  });

  it('deve habilitar o botão quando o input tiver mais que 3 caracters', () => {
    render(<App />);
    const input = screen.getByTestId('input');
    const botao = screen.getByText('Pesquisar');

    userEvent.type(input, '123');
    expect(input).toHaveValue('123');
    expect(botao).not.toHaveAttribute('disabled');
  });

  it('deve buscar os dados', () => {
    render(<App />);
    const input = screen.getByTestId('input');
    const botao = screen.getByText('Pesquisar');

    userEvent.type(input, '123');
    userEvent.click(botao);

    expect(services.getData).toHaveBeenCalled();
  });
});
