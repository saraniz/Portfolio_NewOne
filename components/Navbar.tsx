"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [show, setShow] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShow(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    // Update active class
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      setShow(false);
    }
  }

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
            <h1 className="text-2xl font-serif ml-6 text-textGreen">Amie.</h1>
          </motion.div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden mdl:inline-flex items-center gap-10">
          <ul className="flex text-md font-serif gap-6">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#experience", label: "Experience" },
              { href: "#project", label: "Project" },
              { href: "https://codecoffeee.hashnode.dev/", label: "Blog", external: true },
              { href: "https://sunny881.my.canva.site/amiez", label: "Achievements",external: true },
              { href: "#contact", label: "Contact" },
            ].map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={!item.external ? handleScroll : undefined}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
                className="nav-link text-textDark hover:text-textGreen cursor-pointer duration-300"
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: i * 0.1 }}
                >
                  {item.label}
                </motion.li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setShow(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300" />
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300" />
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300" />
        </div>

        {/* Mobile Menu */}
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7 mt-12">
                <ul className="flex flex-col text-xl font-semibold gap-7">
                  {[
                    { href: "#home", label: "Home" },
                    { href: "#about", label: "About" },
                    { href: "#experience", label: "Experience" },
                    { href: "#project", label: "Project" },
                    { href: "https://codecoffeee.hashnode.dev/", label: "Blog", external: true },
                    { href: "https://sunny881.my.canva.site/amiez", label: "Achievements",external: true },
                    { href: "#contact", label: "Contact" },
                  ].map((item, i) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={!item.external ? handleScroll : undefined}
                      target={item.external ? "_blank" : "_self"}
                      rel={item.external ? "noopener noreferrer" : ""}
                      className="text-textLight hover:text-textGreen duration-300 nav-link"
                    >
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: i * 0.1 }}
                      >
                        {item.label}
                      </motion.li>
                    </Link>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
