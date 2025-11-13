const BASE = "https://api.themoviedb.org/3";
const KEY = process.env.TMDB_API_KEY;

if (!KEY) {
  console.warn("⚠️ TMDB_API_KEY missing in .env.local");
}

async function request(path: string) {
  const url = `${BASE}${path}?api_key=${KEY}`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  return res.json();
}

export const fetchPopular = (page = 1) => request(`/movie/popular&page=${page}`);
export const fetchNowPlaying = (page = 1) => request(`/movie/now_playing&page=${page}`);
export const fetchTopRated = (page = 1) => request(`/movie/top_rated&page=${page}`);
export const fetchMovieById = (id: string) => request(`/movie/${id}`);
