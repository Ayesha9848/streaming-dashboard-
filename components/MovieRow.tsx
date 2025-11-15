"use client";
import MovieCard from "./MovieCard";
import { Movie } from "@/types/movie";

export default function MovieRow({ categoryTitle, movies }: { categoryTitle: string; movies: Movie[] }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-3">{categoryTitle}</h2>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </section>
  );
}
