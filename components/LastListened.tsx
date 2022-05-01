type TrackState = "playing" | "paused" | "stopped";

export interface Track {
  artist: string;
  track: string;
  url: string;
  state: TrackState;
}

export interface LastListenedProps {
  track?: Track;
}

function trackStateText(state: TrackState) {
  switch (state) {
    case "playing":
      return "Now listening to";
    case "paused":
      return "Now paused";
    case "stopped":
      return "Last listened to";
  }
}

const LastListened: React.FC<LastListenedProps> = (props) => {
  if (!props.track) {
    return <div></div>;
  }

  const track = props.track;
  const time = trackStateText(track.state);

  return (
    <section className="uppercase font-medium text-xs">
      <span>
        <time className="mr-2">{time}</time>
        <a href={track.url} className="underline">
          {track.artist} - {track.track}
        </a>
      </span>
    </section>
  );
};

export default LastListened;
