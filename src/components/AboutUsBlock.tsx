import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import React from "react";
import SmallMainBlockCard from "./SmallMainBlockCard";

const AboutUsBlock = () => {
  return (
    <StandardMarginsLayout styles="py-[40px] bg-black text-white">
      <div id="about">
        <h2 className="mb-[32px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
          О нас
        </h2>
        <div className="flex lg:flex-row flex-col justify-between gap-4">
          <div className="lg:max-w-[486px] w-full flex flex-col gap-4">
            <p className="sm:text-[24px] text-[20px] font-bold">
              Мы — надежная IT-компания, специализирующаяся на полном цикле
              разработки программного обеспечения
            </p>
            <span className="text-[16px] font-medium">
              Предлагаем комплексные решения, которые полностью соответствуют
              вашим бизнес-задачам и требованиям, обеспечивая эффективную
              реализацию проектов любой сложности
            </span>
          </div>
          <div className="lg:max-w-[588px]">
            <p className="sm:text-[24px] text-[20px] font-medium mb-6">Немного цифр</p>
            <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-4 grid-cols-2 gap-2">
              <SmallMainBlockCard
                title="10 из 10"
                description="наших проектов выполняются в оговорённый срок"
                needAnimation={false}
                textTitleSize="xl:text-[60px] md:text-[40px] text-[36px]"
                textDescSize="md:text-[16px] text-[14px]"
                maxW="xl:max-w-[282px] max-w-full w-full"
                />
              <SmallMainBlockCard
                title="10 из 10"
                description="наших проектов выполняются в оговорённый срок"
                needAnimation={false}
                textTitleSize="xl:text-[60px] md:text-[40px] text-[36px]"
                textDescSize="md:text-[16px] text-[14px]"
                maxW="xl:max-w-[282px] max-w-full w-full"
                />
              <SmallMainBlockCard
                title="10 из 10"
                description="наших проектов выполняются в оговорённый срок"
                needAnimation={false}
                textTitleSize="xl:text-[60px] md:text-[40px] text-[36px]"
                textDescSize="md:text-[16px] text-[14px]"
                maxW="xl:max-w-[282px] max-w-full w-full"
                />
              <SmallMainBlockCard
                title="10 из 10"
                description="наших проектов выполняются в оговорённый срок"
                needAnimation={false}
                textTitleSize="xl:text-[60px] md:text-[40px] text-[36px]"
                textDescSize="md:text-[16px] text-[14px]"
                maxW="xl:max-w-[282px] max-w-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </StandardMarginsLayout>
  );
};

export default AboutUsBlock;
