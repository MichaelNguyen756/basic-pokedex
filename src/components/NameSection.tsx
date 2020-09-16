import React, { ReactElement } from 'react';
import PokemonName from './PokemonName';

import StyledNameSection from './styled/NameSection';

interface NameSectionProps {
    name: string;
}

function NameSection({ name }: NameSectionProps): ReactElement {
    return (
        <StyledNameSection>
            <PokemonName name={name} />
        </StyledNameSection>
    );
}

export default NameSection;
