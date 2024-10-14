import React from 'react';

export default function P({ children }: { children?: React.ReactNode }) {
  return <p className="my-2 text-base font-normal">{children}</p>;
}
