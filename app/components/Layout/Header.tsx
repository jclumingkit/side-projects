"use client";

const Header = () => {
  return (
    <header className="fixed w-full h-fit bottom-0 lg:top-0 bg-white">
      <nav
        className="w-full flex justify-center items-center h-[60px] gap-16 lg:gap-20 border"
        aria-label="Global"
      >
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Projects
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Portfolio
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
