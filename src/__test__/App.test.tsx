import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the initial message to select an option', () => {
    const { getByText } = render(<App />);
    expect(getByText(/select a Pokemon from the left-hand list/i)).toBeInTheDocument();
});
