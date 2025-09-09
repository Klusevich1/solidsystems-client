import React, { useEffect, useRef } from "react";
import SmallMainBlockCard from "@/components/SmallMainBlockCard";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import Image from "next/image";

const MainBlockFirst: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <StandardMarginsLayout
        styles="xlg:mt-[52px] mt-[50px] bg-black"
      >
        <div className="flex flex-row gap-[120px] py-[40px] xlg:bg-none bg-[url(/mainblockimg.png)] bg-contain bg-no-repeat bg-center bg-black/60 bg-blend-darken">
          <div className="xlg:block hidden max-w-[390px] min-w-[33%]">
            <Image
              src={"/mainblockimg.png"}
              width={390}
              height={364}
              alt="MainBlock"
            />
          </div>
          <div className="flex flex-col text-white">
            <h1 className="font-bold text-[32px] md:text-[46px] mb-[60px]">
              Не теряйте клиентов: закажите разработку интернет-магазина уже
              сегодня
            </h1>
            <div className="flex flex-row xlg:justify-end justify-start gap-6">
              <SmallMainBlockCard
                title="150+"
                description="успешных рекламных кампаний в Яндекс.Директ и Google Ads"
                needAnimation={false}
                textTitleSize="text-[32px]"
                textDescSize="text-[12px]"
                maxW="max-w-[180px]"
              />
              <SmallMainBlockCard
                title="60+"
                description="реализованных проектов за 5 лет работы"
                needAnimation={false}
                textTitleSize="text-[32px]"
                textDescSize="text-[12px]"
                maxW="max-w-[180px]"
              />
              <SmallMainBlockCard
                title="100%"
                description="уровень удовлетворенности наших клиентов"
                needAnimation={false}
                textTitleSize="text-[32px]"
                textDescSize="text-[12px]"
                maxW="max-w-[180px]"
              />
            </div>
          </div>
        </div>
      </StandardMarginsLayout>
      {/* <div className="w-full mx-auto max-w-[1440px] sm:px-[45px] px-[0px]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-[0px] sm:rounded-[40px] mt-[60px] w-full shadow-lg"
          preload="none"
        >
          <source src="/resources/main.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div> */}
    </>
  );
};

export default MainBlockFirst;
