import React from 'react';
import StyledMenuSection from './styled/SelectionMenuSection';
import SelectionMenu from './SelectionMenu';

function SelectionMenuSection({ children }) {
    return (
        <StyledMenuSection>
            <SelectionMenu>{children}</SelectionMenu>
        </StyledMenuSection>
    );
}

export default SelectionMenuSection;
