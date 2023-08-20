"use client";

import { ThemeProvider } from "next-themes";

const DarkModeContext = ({ children }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default DarkModeContext;
