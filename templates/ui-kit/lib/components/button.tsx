import type { ReactNode } from 'react';

export const Button = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="flex justify-center items-center px-3 py-2 outline-0 border border-zinc-400 rounded-sm bg-transparent cursor-pointer hover:bg-zinc-200 active:bg-zinc-300 transition-colors duration-200 ease-in-out"
  >
    {children}
  </button>
);

export default Button;
