import Link from "next/link";
import { signIn, singOut } from "next-auth/client";
import { signOut } from "next-auth/react";

function Navbar() {
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
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

        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
            href="/api/auth/signin"
          >
            Sign In
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
            href="/api/auth/signout"
          >
            Sign Out
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
