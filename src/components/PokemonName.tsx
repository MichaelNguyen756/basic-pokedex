import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';

import { toUpperFirst } from '../helpers/stringFormat';

export interface PokemonNameProps {
    name: string;
}

function PokemonName({ name }: PokemonNameProps): ReactElement {
    if (name.match(/nidoran/)) {
        const [initialName, genderSymbol] = name.split('-');
        return (
            <>
                {toUpperFirst(initialName)}
                &nbsp;
                <FontAwesomeIcon icon={genderSymbol === 'm' ? faMars : faVenus} />
            </>
        );
    } else if (name.match(/mr/) && name.match(/mime/)) {
        return <>Mr. Mime</>;
    } else {
        return <>{toUpperFirst(name)}</>;
    }
}

export default PokemonName;
