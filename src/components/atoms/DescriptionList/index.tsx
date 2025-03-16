import React from 'react';
import type { ReactNode } from 'react';

export default function DescriptionList({
  children,
  title,
}: {
  children?: ReactNode;
  title?: string;
}) {
  return (
    <dl
      className="grid grid-cols-2 items-center rounded-xl border border-gray-400 bg-cyan-400"
      title={title}
    >
      {children}
    </dl>
  );
}
