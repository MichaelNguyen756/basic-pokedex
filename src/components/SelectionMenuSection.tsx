import React, { ReactNode, ReactElement } from 'react';
import StyledMenuSection from './styled/SelectionMenuSection';
import SelectionMenu from './SelectionMenu';

interface SelectionMenuSectionProps {
    children: ReactNode;
}

function SelectionMenuSection({ children }: SelectionMenuSectionProps): ReactElement {
    return (
        <StyledMenuSection>
            <SelectionMenu>{children}</SelectionMenu>
        </StyledMenuSection>
    );
}

export default SelectionMenuSection;
