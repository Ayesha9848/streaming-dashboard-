import Image from "next/image";
import { fetchMovieById } from "@/lib/tmdb";

export default async function MoviePage({ params }: { params: { id: string } }) {
  const movie = await fetchMovieById(params.id);

  if (!movie || movie.success === false) {
    return (
      <div className="p-10 text-white">
        <h1 className="text-3xl font-bold">Movie Not Found</h1>
        <p>ID: {params.id}</p>
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
      {backdrop && (
        <div className="relative h-72 w-full">
          <Image src={backdrop} alt={movie.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
      )}

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6 py-10">
        <Image
          src={poster}
          alt={movie.title}
          width={400}
          height={600}
          className="rounded"
        />

        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="mt-4 text-white/80">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
