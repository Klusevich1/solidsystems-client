import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import Image from "next/image";
import React from "react";
import SmoothScrollLink from "./SmoothScollLink";

const ImagesBlock = () => {
  return (
    <StandardMarginsLayout styles="py-[40px]">
      <div className="flex lg:flex-row flex-col gap-6">
        <div className="sm:block hidden w-full">
          <Image
            src={"/imgblock1.png"}
            width={792}
            height={422}
            alt="Image Block 1"
            className="h-full w-full object-cover rounded-[40px]"
          />
        </div>
        <div className="block sm:hidden w-full">
          <Image
            src={"/imgblock1_small.png"}
            width={340}
            height={340}
            alt="Image Block 1"
            className="h-full w-full object-cover rounded-[40px]"
          />
        </div>
        <div className="lg:max-w-[384px] min-w-[300px] lg:w-fit w-full flex lg:flex-col md:flex-row flex-col gap-5">
          <div className="w-full rounded-[40px] bg-[#F3F3F3] p-6">
            <p className="flex items-center w-fit px-4 h-[35px] rounded-full border border-black mb-3">
              Креативная команда
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-medium h-[38px]">
                Web-сайты для частных лиц и крупных компаний. Создаем уникальные
                решения
              </p>
              <h3 className="text-[32px] font-bold leading-[36px]">
                Уникальный дизайн
              </h3>
            </div>
          </div>
          <SmoothScrollLink href="#quiz">
            <Image
              src={"/imgblock2.png"}
              width={384}
              height={224}
              alt="Image Block 2"
              className="w-full"
            />
          </SmoothScrollLink>
        </div>
      </div>
    </StandardMarginsLayout>
  );
};

export default ImagesBlock;
