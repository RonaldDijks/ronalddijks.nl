export interface LastListenedProps {
  artist: string;
  song: string;
  link: string;
}

export interface HeaderProps {
  lastListened: LastListenedProps;
}

const Header: React.FC<HeaderProps> = (props) => {
  const {
    lastListened: song
  } = props;

  return <header className="flex items-center justify-between p-4">
    <section className="uppercase font-medium text-xs">
      <span>
        <time className="mr-2">Last listened to</time>
        <a href={song.link} className="underline">{song.artist} - {song.song}</a>
      </span>
    </section>
    <nav>
      <button>☀️</button>
    </nav>
  </header>
}

export default Header;