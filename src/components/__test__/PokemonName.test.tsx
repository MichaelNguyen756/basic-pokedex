import React from 'react';
import { render } from '@testing-library/react';

import PokemonName from '../PokemonName';

/**
 * This unit test has very specific cases
 */

test('render Nidoran male when given the nidoran male string', () => {
    const { getByText, getByTitle } = render(<PokemonName name="nidoran-m" />);

    expect(getByText(/nidoran/i)).toBeInTheDocument();
    expect(getByTitle(/gender icon male/i)).toBeInTheDocument();
});

test('render Nidoran female when given a string with a nidoran word but no additional identifier', () => {
    const { getByText, getByTitle } = render(<PokemonName name="nidoran-tt" />);

    expect(getByText(/nidoran/i)).toBeInTheDocument();
    expect(getByTitle(/gender icon female/i)).toBeInTheDocument();
});

test('render Nidoran female when given the nidoran female string', () => {
    const { getByText, getByTitle } = render(<PokemonName name="nidoran-f" />);

    expect(getByText(/nidoran/i)).toBeInTheDocument();
    expect(getByTitle(/gender icon female/i)).toBeInTheDocument();
});

test('render the Mr. Mime text when given the right string', () => {
    const { getByText } = render(<PokemonName name="mr-mime" />);
    expect(getByText(/mr. mime/i)).toBeInTheDocument();
});
