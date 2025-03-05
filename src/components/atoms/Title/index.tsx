import React, { ReactNode } from 'react';

export default function Title({ children }: { children: ReactNode }) {
  return <h2>{children}</h2>;
}
