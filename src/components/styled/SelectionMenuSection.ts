import styled from 'styled-components';

import { borderSetting } from './commonValues';

const SelectionMenuSection = styled.div`
    height: 100%;
    padding-inline-start: 0px;
    flex: 0 0 auto;
    overflow-y: scroll;
    border-top: ${borderSetting};
    border-bottom: ${borderSetting};
`;

export default SelectionMenuSection;
