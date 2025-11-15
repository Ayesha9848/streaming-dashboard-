import HeroBanner from "@/components/HeroBanner";
import MovieRow from "@/components/MovieRow";
import { fetchPopular, fetchNowPlaying, fetchTopRated } from "@/lib/tmdb";

export default async function Home() {
  const [popular, nowPlaying, topRated] = await Promise.all([
    fetchPopular(),
    fetchNowPlaying(),
    fetchTopRated()
  ]);

  const hero = popular?.results?.[0] ?? null;

  return (
    <div>
      <HeroBanner movie={hero} />

      <div className="max-w-6xl mx-auto mt-6">
        <MovieRow categoryTitle="Popular" movies={popular?.results ?? []} />
        <MovieRow categoryTitle="Now Playing" movies={nowPlaying?.results ?? []} />
        <MovieRow categoryTitle="Top Rated" movies={topRated?.results ?? []} />
      </div>
    </div>
  );
}

