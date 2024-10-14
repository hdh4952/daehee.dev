import React from 'react';

export default function Li({ children }: { children?: React.ReactNode }) {
  return <li className="my-2 text-base font-normal text-black3 dark:text-white">- {children}</li>;
}
