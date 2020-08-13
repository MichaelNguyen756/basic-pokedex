import React, { ReactNode } from 'react';
import StyledMenuSection from './styled/SelectionMenuSection';
import SelectionMenu from './SelectionMenu';

function SelectionMenuSection({ children }: { children: ReactNode }) {
    return (
        <StyledMenuSection>
            <SelectionMenu>{children}</SelectionMenu>
        </StyledMenuSection>
    );
}

export default SelectionMenuSection;
