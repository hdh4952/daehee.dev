import React from 'react';

export default function H1({ children }: { children?: React.ReactNode }) {
  return <h1 className="my-3 text-3xl font-bold text-black3 dark:text-white">{children}</h1>;
}
