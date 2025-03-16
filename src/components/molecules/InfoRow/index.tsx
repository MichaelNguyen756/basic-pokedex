import React from 'react';
import type { ReactNode } from 'react';

export default function InfoRow({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <dt className="p-2 text-center font-bold">{title}</dt>
      <dd className="p-2 text-center">{children}</dd>
    </>
  );
}
