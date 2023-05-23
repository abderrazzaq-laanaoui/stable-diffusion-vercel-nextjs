import Link from 'next/link';

function Header() {
  return (
    <header className=" text-black py-4 px-6 flex items-center bg-white border-b-8 border-[#004c83]-500">
      <Link href="/" className="text-2xl font-bold">
        {/* image as logo */}
        <img src="/enset.svg" alt="logo" className="w-52" />
      </Link>
      <nav className="ml-auto">
        <ul className="flex items-center">
        <li className="ml-6">
            <Link href="/" className="hover:text-gray-300">
              Générer une image
            </Link>
          </li>
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