"use client";

import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types/movie";

export default function MovieCard({ movie }: { movie: Movie }) {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "/placeholder.png";

  return (
    <Link href={`/movie/${movie.id}`} className="block min-w-[140px]">
      <Image
        src={poster}
        alt={movie.title}
        width={150}
        height={220}
        className="rounded-md object-cover hover:scale-105 transition"
      />
      <p className="mt-2 text-sm text-white/80">{movie.title}</p>
    </Link>
  );
}
