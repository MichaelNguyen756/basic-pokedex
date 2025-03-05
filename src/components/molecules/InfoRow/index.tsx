import React, { ReactNode } from 'react';

export default function InfoRow({ rowTitle, children }: { rowTitle: string; children: ReactNode }) {
  return (
    <tr>
      <th>{rowTitle}</th>
      <td>{children}</td>
    </tr>
  );
}
