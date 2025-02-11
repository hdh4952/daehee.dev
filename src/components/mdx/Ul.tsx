import React from 'react';

export default function Ul({ children }: { children?: React.ReactNode }) {
  return <ul className="my-2 ml-4 list-disc">{children}</ul>;
}
