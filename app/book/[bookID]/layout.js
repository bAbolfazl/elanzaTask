import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <>
      <Link href="/" className="font-bold text-lg text-blue inline-block mb-9">
        Home
      </Link>
      {children}
    </>
  );
}
