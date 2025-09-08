import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link
      className={`flex items-center outline-none`}
      href="/"
    >
      <Image
        src="/SolidHeader.svg"
        width={140}
        height={30}
        className="w-[170px] md:w-[250px]"
        alt="Digital Devils logo"
        priority={true}
      />
    </Link>
  );
};

export default HeaderLogo;
