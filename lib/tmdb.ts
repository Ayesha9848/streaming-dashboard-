const BASE = "https://api.themoviedb.org/3";
const KEY = process.env.TMDB_API_KEY;

if (!KEY) {
  console.warn("⚠️ TMDB_API_KEY missing in .env.local or Vercel");
}

async function request(path: string, params: Record<string, any> = {}) {
  const url = new URL(`${BASE}${path}`);
  url.searchParams.set("api_key", KEY!);

  // Append additional query params (like page)
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, String(value));
    }
  }

  const res = await fetch(url.toString(), { next: { revalidate: 60 } });

  if (!res.ok) {
    console.error("❌ TMDB API ERROR:", res.status, res.statusText);
    return { results: [] };
  }

  return res.json();
}

export const fetchPopular = (page = 1) =>
  request("/movie/popular", { page });

export const fetchNowPlaying = (page = 1) =>
  request("/movie/now_playing", { page });

export const fetchTopRated = (page = 1) =>
  request("/movie/top_rated", { page });

export const fetchMovieById = (id: string) =>
  request(`/movie/${id}`, { append_to_response: "credits,recommendations" });

