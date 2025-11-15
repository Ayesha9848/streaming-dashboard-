const BASE = "https://api.themoviedb.org/3";
const KEY = process.env.TMDB_API_KEY;

if (!KEY) {
  console.error("❌ TMDB_API_KEY missing in Vercel or .env.local");
}

async function request(path: string, params: Record<string, any> = {}) {
  const url = new URL(`${BASE}${path}`);
  url.searchParams.set("api_key", KEY!);

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) url.searchParams.set(key, String(value));
  }

  const res = await fetch(url.toString(), { next: { revalidate: 60 } });
  if (!res.ok) return null;
  return res.json();
}

export const fetchPopular = () => request("/movie/popular");
export const fetchNowPlaying = () => request("/movie/now_playing");
export const fetchTopRated = () => request("/movie/top_rated");
export const fetchMovieById = (id: string) => request(`/movie/${id}`);

