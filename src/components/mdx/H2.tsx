import React from 'react';

export default function H2({ children }: { children?: React.ReactNode }) {
  return <h2 className="my-2 text-2xl font-bold text-black3 dark:text-white">{children}</h2>;
}
