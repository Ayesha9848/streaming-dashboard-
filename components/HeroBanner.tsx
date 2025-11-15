import Image from "next/image";
import { Movie } from "@/types/movie";

export default function HeroBanner({ movie }: { movie: Movie | null }) {
  if (!movie) return null;

  return (
    <section className="relative h-[60vh] w-full">
      {movie.backdrop_path && (
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          priority
          className="object-cover"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

      <div className="absolute bottom-10 left-10 max-w-xl">
        <h1 className="text-4xl font-extrabold">{movie.title}</h1>
        <p className="mt-4 line-clamp-3 text-white/80">{movie.overview}</p>
      </div>
    </section>
  );
}

