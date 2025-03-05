import React, { ReactNode } from 'react';

export default function StyledTable({ children }: { children: ReactNode }) {
  return <table className="border border-gray-400 w-full table-fixed">{children}</table>;
}
