export interface Track {
  artist: string;
  track: string;
  url: string;
  isPlaying: boolean;
}

export interface LastListenedProps {
  track?: Track;
}

const LastListened: React.FC<LastListenedProps> = (props) => {
  if (!props.track) {
    return <div></div>;
  }

  const time = props.track.isPlaying ? "Now listening to" : "Last listened to";

  const { artist, track, url } = props.track;

  return (
    <section className="uppercase font-medium text-xs">
      <span>
        <time className="mr-2">{time}</time>
        <a href={url} className="underline">
          {artist} - {track}
        </a>
      </span>
    </section>
  );
};

export default LastListened;
