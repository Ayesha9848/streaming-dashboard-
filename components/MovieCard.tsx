"use client";
import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/types/movie";

export default function MovieCard({ movie }: { movie: Movie }) {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "/placeholder.png";

  return (
    <Link href={`/movie/${movie.id}`} className="block min-w-[150px]">
      <Image
        src={poster}
        alt={movie.title}
        width={150}
        height={220}
        className="rounded hover:scale-105 transition"
      />
    </Link>
  );
}

