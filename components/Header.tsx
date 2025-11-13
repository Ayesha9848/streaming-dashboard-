"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-md px-6 py-4 border-b border-white/10">
      <Link href="/" className="text-xl font-bold text-white">
        StreamBit
      </Link>
    </header>
  );
}
