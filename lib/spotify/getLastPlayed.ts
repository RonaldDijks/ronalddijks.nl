import { getCurrentlyPlayingTrack } from "./getCurrentlyPlayingTrack";
import { getRecentlyPlayed } from "./getRecentlyPlayed";

export const getLastPlayed = async () => {
  const currentlyPlaying = await getCurrentlyPlayingTrack();
  if (currentlyPlaying) return currentlyPlaying;
  return await getRecentlyPlayed();
};

export default getLastPlayed;
