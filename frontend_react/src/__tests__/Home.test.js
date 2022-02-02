import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import Home from '../components/Home';

const Component = (props) => {
  return (
    <MockedProvider mocks={[]} addTypename={true}>
      <Home {...props} />
    </MockedProvider>
  );
};

describe('<Home />', () => {
  it('Should render Homepage', () => {
    render(<Component />);
    expect(screen.getByText('V2 React')).toBeInTheDocument();
  });

  it('Should render reviews and products', () => {
    render(<Component {...fixtures} />);
    expect(screen.getByText('Atomic habits')).toBeInTheDocument();
    expect(screen.getByText('Good book')).toBeInTheDocument();
    expect(screen.getByText('Must read')).toBeInTheDocument();
    expect(screen.getByText('Not recommended')).toBeInTheDocument();
  });
});

const fixtures = {
  products: [{ id: 1, title: 'Atomic habits' }],
  reviews: [
    { id: 1, productId: 1, review: 'Good book', rating: 5 },
    { id: 2, productId: 1, review: 'Must read', rating: 4 },
    { id: 3, productId: 1, review: 'Not recommended', rating: 1 },
  ],
};
