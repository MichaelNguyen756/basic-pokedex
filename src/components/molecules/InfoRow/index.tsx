import React, { ReactNode, ReactElement } from 'react';

interface InfoRowProps {
  rowTitle: string;
  children: ReactNode;
}

function InfoRow({ rowTitle, children }: InfoRowProps): ReactElement {
  return (
    <tr>
      <th>{rowTitle}:</th>
      <td>{children}</td>
    </tr>
  );
}

export default InfoRow;
