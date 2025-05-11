import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashnode } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/saraniz" target="_blank" rel="noopener noreferrer">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>

        <a
          href="https://codecoffeee.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center text-white hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FontAwesomeIcon icon={faHashnode} />
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/amandithathsarani-athukorala-517aa12b6/?trk=opento_sprofile_topcard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>

        <a
          href="https://web.facebook.com/profile.php?id=61567719413134"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialFacebook />
          </span>
        </a>

        <a href="https://www.instagram.com/__amiez/#" target="_blank" rel="noopener noreferrer">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialInstagram />
          </span>
        </a>

        <a href="https://linktr.ee/amiez_" target="_blank" rel="noopener noreferrer">
          <span className="w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <Image
              src="https://cdn.jsdelivr.net/npm/simple-icons/icons/linktree.svg"
              alt="Linktree"
              width={24}
              height={24}
              style={{ filter: "invert(1)" }}
            />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
