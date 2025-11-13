import HeroBanner from "@/components/HeroBanner";
import MovieRow from "@/components/MovieRow";
import { fetchPopular, fetchNowPlaying, fetchTopRated } from "@/lib/tmdb";

export default async function Home() {
  const [popular, now, top] = await Promise.all([
    fetchPopular(1),
    fetchNowPlaying(1),
    fetchTopRated(1)
  ]);

  const hero = popular.results[0];

  return (
    <div>
      <HeroBanner movie={hero} />
      <div className="max-w-6xl mx-auto mt-6">
        <MovieRow categoryTitle="Popular" movies={popular.results} />
        <MovieRow categoryTitle="Now Playing" movies={now.results} />
        <MovieRow categoryTitle="Top Rated" movies={top.results} />
      </div>
    </div>
  );
}
