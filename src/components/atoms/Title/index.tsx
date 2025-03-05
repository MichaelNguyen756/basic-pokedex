import React, { ReactNode } from 'react';

export default function Title({ children }: { children: ReactNode }) {
  return <h2 className="mt-5 text-3xl font-bold">{children}</h2>;
}
