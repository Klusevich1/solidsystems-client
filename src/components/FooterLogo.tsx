import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterLogo: React.FC = () => {
  return (
    <Link className="text-xl flex items-center text-white h-fit" href="/">
      <Image
        src="/SolidHeader.svg"
        width={140}
        height={30}
        className="w-[170px] md:w-[250px]"
        alt="Digital Devils logo"
      />
    </Link>
  );
};

export default FooterLogo;
