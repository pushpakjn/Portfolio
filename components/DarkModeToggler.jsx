"use client";

import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

const DarkModeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-0 md:top-0 right-0 p-4 z-50">
      <button
        type="button"
        className="flex justify-center align-center rounded-lg p-2 transition-all"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? (
          <MoonIcon className="w-6 h-6 text-slate-800" />
        ) : (
          <SunIcon className="w-6 h-6 text-orange-300" />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggler;
