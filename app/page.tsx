import Image from "next/image";
import { fetchMovieById } from "@/lib/tmdb";

export default async function MoviePage({ params }: { params: { id: string } }) {
  const id = params.id;

  // Fetch details
  const movie = await fetchMovieById(id);

  if (!movie || movie.success === false) {
    return (
      <div className="p-10 text-white">
        <h1 className="text-2xl font-bold">Movie Not Found</h1>
      </div>
    );
  }

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder.png";

  const backdrop = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

  return (
    <div className="text-white">
      {/* BACKDROP */}
      {backdrop && (
        <div className="relative h-72 md:h-96 w-full">
          <Image
            src={backdrop}
            alt={movie.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
        {/* POSTER */}
        <div>
          <Image
            src={poster}
            alt={movie.title}
            width={400}
            height={600}
            className="rounded-md object-cover"
          />
        </div>

        {/* INFO */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>

          <p className="text-white/80 leading-relaxed">{movie.overview}</p>

          <div className="mt-6 space-y-2 text-sm">
            {movie.release_date && (
              <p>
                <span className="font-bold">Release date:</span>{" "}
                {movie.release_date}
              </p>
            )}

            {movie.runtime && (
              <p>
                <span className="font-bold">Runtime:</span> {movie.runtime} min
              </p>
            )}

            {movie.vote_average && (
              <p>
                <span className="font-bold">Rating:</span>{" "}
                {movie.vote_average.toFixed(1)} / 10
              </p>
            )}
          </div>

          {/* GENRES */}
          <div className="flex gap-2 flex-wrap mt-4">
            {movie.genres?.map((g: any) => (
              <span
                key={g.id}
                className="px-3 py-1 bg-white/10 rounded-full text-xs"
              >
                {g.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
