import Link from 'next/link';

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex items-center">
      <Link href="/" className="text-2xl font-bold">
        ENSET
      </Link>
      <nav className="ml-auto">
        <ul className="flex items-center">
          <li className="ml-6">
            <Link href="/team" className="hover:text-gray-300">
              Notre équipe
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;