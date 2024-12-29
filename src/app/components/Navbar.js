import Link from 'next/link';
import ThemeToggle from '../ThemeToggle'; // Import the theme toggle client component
export default function Navbar() {
  return (
    <nav className="navbar">
      <div>My Portfolio</div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/web-development">Web Development</Link>
        <Link href="/copywriting">Copywriting</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
