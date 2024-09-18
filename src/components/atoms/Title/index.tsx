import React, { ReactNode } from 'react';

function Title({ children }: { children: ReactNode }) {
  return <h2>{children}</h2>;
}

export default Title;
