import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { Async } from '.';

test('renders correctly', async () => {
  render(<Async />);

  expect(screen.getByText('Hello World')).toBeInTheDocument();

  // findByText espera algo aparecer em tela para validar
  // expect(await screen.findByText('Button')).toBeInTheDocument();

  // waitFor checa ate validar o expect
  // await waitFor(() => {
  //   return expect(screen.getByText('Button')).toBeInTheDocument();
  // })

  // Aguarda elemento ser removido da tela e valida se nao esta na tela
  // await waitFor(() => {
  //   return expect(screen.queryByText('Button')).not.toBeInTheDocument();
  // })

  // Aguarda elemento ser removido da tela
  // await waitForElementToBeRemoved(screen.queryByText('Button'));
});