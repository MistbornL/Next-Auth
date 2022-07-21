import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="header">
      <h1 className="logo">
        <Link href="#">NextAuth</Link>
      </h1>
      <ul className="main-nav">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>

        {!session ? (
          <li>
            <Link
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
              href="/api/auth/signin"
            >
              Sign In
            </Link>
          </li>
        ) : (
          <li>
            <Link
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
              href="/api/auth/signout"
            >
              Sign Out
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
