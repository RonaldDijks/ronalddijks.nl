import DarkModeSwitch from "./DarkModeSwitch";
import LastListened, { LastListenedProps } from "./LastListened";

export interface HeaderProps {
  lastListened: LastListenedProps;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { lastListened } = props;

  return (
    <header className="flex items-center justify-between p-4">
      <LastListened track={lastListened.track} />
      <nav>
        <DarkModeSwitch />
      </nav>
    </header>
  );
};

export default Header;
