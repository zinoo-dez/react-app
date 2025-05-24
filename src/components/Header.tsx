export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-emerald-600">
          BlogFolio
        </a>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="font-medium text-gray-900 hover:text-emerald-600 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="font-medium text-gray-500 hover:text-emerald-600 transition"
          >
            Blog
          </a>
          <a
            href="#"
            className="font-medium text-gray-500 hover:text-emerald-600 transition"
          >
            Categories
          </a>
          <a
            href="#"
            className="font-medium text-gray-500 hover:text-emerald-600 transition"
          >
            About
          </a>
          <a
            href="#"
            className="font-medium text-gray-500 hover:text-emerald-600 transition"
          >
            Contact
          </a>
          <a
            href="#"
            className="font-medium text-gray-500 hover:text-emerald-600 transition"
          >
            Login
          </a>
        </nav>
        <button className="md:hidden text-gray-500 hover:text-gray-900 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};
