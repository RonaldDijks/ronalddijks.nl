import useDarkmode from "../lib/hooks/useDarkmode";

const DarkModeSwitch = () => {
  const [isDarkMode, setDarkmode] = useDarkmode();
  const icon = isDarkMode ? "🌒" : "☀️";

  const onClick = () => {
    setDarkmode(!isDarkMode);
  };

  return <button onClick={onClick}>{icon}</button>;
};

export default DarkModeSwitch;
