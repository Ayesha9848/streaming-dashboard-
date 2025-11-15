"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full top-0 left-0 bg-black/50 backdrop-blur-md px-6 py-4 z-50">
      <Link href="/" className="text-xl font-bold">
        StreamBit
      </Link>
    </header>
  );
}
