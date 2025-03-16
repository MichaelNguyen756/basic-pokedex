import React from 'react';
import type { ReactNode } from 'react';

export default function SelectionItem({
  isSelected,
  children,
}: {
  isSelected?: boolean;
  children?: ReactNode;
}) {
  return (
    <li className={`hover:bg-sky-300 ${isSelected ? 'bg-amber-400' : 'bg-transparent'}`}>
      {children}
    </li>
  );
}
