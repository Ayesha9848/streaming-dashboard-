import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "StreamBit",
  description: "Streaming Dashboard Clone"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0b0b0e]">
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
