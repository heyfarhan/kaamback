import logo from "../assets/logo.jpg";

const JobOpening = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/career", label: "Career" },
    { path: "/hire", label: "Hire" },
    { path: "/ourteam", label: "Our team" },
  ];

  return (
    <div className="py-0  ">
      <nav className="bg-[#041893] text-white p-2">
        <div className="container mx-auto px-8 flex justify-between items-center">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="KaamBack Logo" className="h-14 mr-4" />
            {/* Yellow line below the logo */}
            <div className="h-[2px] w-full bg-[#F8D328] mt-2 mb-2"></div>
            {/* Tagline */}
            <p className="text-sm font-light">
              "Where Experience meets Opportunity"
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-12 text-lg">
            {navLinks.map((link) => (
              <li key={link.path}>
                <a href={link.path} className="hover:text-[#5DC2EA]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* User Greeting */}
          <div className="bg-white text-[#041893] py-2 px-6 rounded-full hidden md:block">
            <span className="font-bold">Hi, User</span>{" "}
            {/* Dynamically displaying user name */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default JobOpening;
