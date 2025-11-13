"use client";

export default function Skeleton({ className = "" }) {
  return <div className={`bg-neutral-800 animate-pulse rounded ${className}`} />;
}
