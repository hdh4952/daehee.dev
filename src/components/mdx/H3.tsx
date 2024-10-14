import React from 'react';

export default function H3({ children }: { children?: React.ReactNode }) {
  return <h2 className="my-1 text-xl font-bold">{children}</h2>;
}
