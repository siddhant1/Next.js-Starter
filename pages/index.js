import Link from "next/link";
export default () => (
  <div>
    Hellomy
    <Link prefetch href="/about">
      <a>About Page</a>
    </Link>
  </div>
);
