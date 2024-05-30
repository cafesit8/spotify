export interface Song {
  id: number;
  url: string;
}

export interface User {
  created_at: Date;
  email: string;
  id: number;
  name: string;
  surname: string;
  username: string;
}
export interface Music {
  album: string;
  artist: string;
  duration: string;
  id: number;
  name: string;
  realease_date: Date;
  song_cover: Song;
  song_mp3: Song;
  user: User;
}

 export interface Link {
  active: boolean;
  label: string;
  url: null | string;
 }
 export interface Data {
  current_page: number;
  data: Music[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: null;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

export interface Response {
  data: Data;
  message: string;
  status: number;
}
