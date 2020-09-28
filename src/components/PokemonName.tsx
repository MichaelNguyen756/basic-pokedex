import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';

import { toUpperFirst } from '../helpers';

export interface PokemonNameProps {
    name: string;
}

function isGenderSymbolMale(symbol: string) {
    return symbol === 'm';
}

function PokemonName({ name }: PokemonNameProps): ReactElement {
    if (name.match(/nidoran/)) {
        const [initialName, genderSymbol] = name.split('-');
        return (
            <>
                {toUpperFirst(initialName)}
                &nbsp;
                <FontAwesomeIcon
                    title={`gender icon ${isGenderSymbolMale(genderSymbol) ? 'male' : 'female'}`}
                    icon={isGenderSymbolMale(genderSymbol) ? faMars : faVenus}
                />
            </>
        );
    } else if (name.match(/mr/) && name.match(/mime/)) {
        return <>Mr. Mime</>;
    } else {
        return <>{toUpperFirst(name)}</>;
    }
}

export default PokemonName;
