import React, { ReactNode, ReactElement } from 'react';

interface TitleProps {
  children: ReactNode;
}

function Title({ children }: TitleProps): ReactElement {
  return <h2>{children}</h2>;
}

export default Title;
