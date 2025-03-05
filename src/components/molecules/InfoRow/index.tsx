import React, { ReactNode } from 'react';

export default function InfoRow({
  className,
  rowTitle,
  children,
}: {
  className?: string;
  rowTitle: string;
  children: ReactNode;
}) {
  return (
    <tr className={className}>
      <th className="p-2">{rowTitle}</th>
      <td className="p-2">{children}</td>
    </tr>
  );
}
