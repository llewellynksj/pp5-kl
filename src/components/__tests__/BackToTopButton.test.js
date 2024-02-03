import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BackToTopButton from '../BackToTopButton';

describe('BackToTopButton component test', () => {
  const renderComponent = () =>
    render(
      <Router>
        <BackToTopButton />
      </Router>,
    );

  it('renders the component', () => {
    renderComponent();
  });
});