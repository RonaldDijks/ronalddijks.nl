import { Track } from "../../components/LastListened";

export interface ExternalUrls {
  spotify: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalUrls2 {
  spotify: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls2;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface ExternalUrls3 {
  spotify: string;
}

export interface Artist2 {
  external_urls: ExternalUrls3;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalIds {
  isrc: string;
}

export interface ExternalUrls4 {
  spotify: string;
}

export interface RecentTrack {
  album: Album;
  artists: Artist2[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls4;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface Item {
  track: RecentTrack;
  played_at: Date;
  // context?: any;
}

export interface Cursors {
  after: string;
  before: string;
}

export interface RootObject {
  items: Item[];
  next: string;
  cursors: Cursors;
  limit: number;
  href: string;
}

const API_KEY = process.env.SPOTIFY_API_KEY;

export const getRecentlyPlayed = async (): Promise<Track | null> => {
  if (!API_KEY) return null;
  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played",
      {
        headers: [
          ["Accept", "application/json"],
          ["Content-Type", "application/json"],
          ["Authorization", `Bearer ${API_KEY}`],
        ],
      }
    );
    if (!response.ok) return null;
    const json: RootObject = await response.json();
    const recentTrack = json.items[0];
    if (!recentTrack) {
      return null;
    }
    const track: Track = {
      artist: recentTrack.track.artists.map((artist) => artist.name).join(", "),
      track: recentTrack.track.name,
      url: recentTrack.track.external_urls.spotify,
      state: "stopped",
    };
    return track;
  } catch (error) {
    console.error(error);
    return null;
  }
};
