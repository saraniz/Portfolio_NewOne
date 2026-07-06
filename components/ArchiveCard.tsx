import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props {
  title: string;
  des: string;
  listItem: string[];
  link: string;
}

const ArchiveCard = ({ title, des, listItem, link }: Props) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
      <div className="w-full h-full min-h-[340px] rounded-xl bg-[#112240]/45 p-7 flex flex-col justify-between border border-textDark/10 hover:border-textGreen/30 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(100,255,218,0.12)] transition-all duration-300 group">
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-textGreen group-hover:scale-105 transition-transform duration-300" />
          <RxOpenInNewWindow className="text-2xl text-textLight hover:text-textGreen transition-colors duration-300" />
        </div>
        <div>
          <h2 className="text-xl font-titleFont font-semibold tracking-wide text-textLight group-hover:text-textGreen transition-colors duration-300">
            {title}
          </h2>
          <p className="text-sm mt-3 text-textDark leading-relaxed">{des}</p>
        </div>
        <ul className="text-xs font-mono text-textDark flex flex-wrap gap-2">
          {listItem.map((item, i) => (
            <li
              key={i}
              className="px-2.5 py-0.5 bg-bodyColor/40 rounded-full border border-textDark/10 text-[11px] text-textGreen font-semibold hover:border-textGreen/20 transition-all cursor-default"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ArchiveCard;
