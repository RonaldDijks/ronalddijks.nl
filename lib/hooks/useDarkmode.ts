import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

const useDarkmode = (): [boolean, (_: boolean) => void] => {
  const [isDarkmode, _set] = useState(false);

  const setDarkmode = (darkmode: boolean, save = true) => {
    if (save) {
      localStorage.setItem(STORAGE_KEY, darkmode ? "dark" : "light");
    }

    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    _set(darkmode);
  };

  useEffect(() => {
    const osDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = localStorage.getItem(STORAGE_KEY);

    if ((initialTheme === null && osDark) || initialTheme === "dark") {
      setDarkmode(true, false);
    } else {
      setDarkmode(false, false);
    }
  }, []);

  return [isDarkmode, setDarkmode];
};

export default useDarkmode;
