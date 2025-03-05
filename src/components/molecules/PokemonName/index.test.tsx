import React from 'react';
import { test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import PokemonName from '.';

/**
 * This unit test has very specific cases
 */

test('render Nidoran male when given the nidoran male string', () => {
  render(<PokemonName name="nidoran-m" />);

  expect(screen.getByText(/nidoran/i)).toBeInTheDocument();
  expect(screen.getByTitle(/gender icon male/i)).toBeInTheDocument();
});

test('render Nidoran female when given a string with a nidoran word but no additional identifier', () => {
  render(<PokemonName name="nidoran-tt" />);

  expect(screen.getByText(/nidoran/i)).toBeInTheDocument();
  expect(screen.getByTitle(/gender icon female/i)).toBeInTheDocument();
});

test('render Nidoran female when given the nidoran female string', () => {
  render(<PokemonName name="nidoran-f" />);

  expect(screen.getByText(/nidoran/i)).toBeInTheDocument();
  expect(screen.getByTitle(/gender icon female/i)).toBeInTheDocument();
});

test('render the Mr. Mime text when given the right string', () => {
  render(<PokemonName name="mr-mime" />);
  expect(screen.getByText(/mr. mime/i)).toBeInTheDocument();
});
