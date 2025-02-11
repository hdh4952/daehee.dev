import React from 'react';

export default function Ol({ children }: { children?: React.ReactNode }) {
  return <ol className="my-2 ml-4 list-decimal">{children}</ol>;
}
