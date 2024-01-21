import Logo from "../assets/logo/save-money.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full !bg-[#191D26] py-6 md:py-8">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <a href="/" className="flex gap-x-2 lg:gap-x-4">
          <img className="h-[50px]" src={Logo} alt="Finance Tracker" />
          <p className="text-sm font-medium lg:text-xl lg:font-semibold">
            Finance <br /> Tracker
          </p>
        </a>
        <div className="flex gap-x-3">
          <p>login</p> /<p>signup</p>
        </div>
        <div>
          <p>Avatar</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
