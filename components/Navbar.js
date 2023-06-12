import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="flex space-x-4">
          <li className="px-3">
            <Link href="/" className="text-gray-500">
              home
            </Link>{" "}
          </li>
          <li className="px-3">
            <Link href="/posts">posts</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
