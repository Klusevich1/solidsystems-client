import React from "react";
import SEO from "@/components/SEO";
import BasicLayout from "@/layouts/BasicLayout";
import MainBlockFirst from "@/components/MainBlockFirst";
import QuizBlock from "@/components/QuizBlock";
import TicketSeoBlock from "@/components/TicketSeoBlock";
import AboutBlockSecond from "@/components/AboutBlockSecond";
import WideBlockWithImage from "@/components/WideBlockWithImage";
import SmallMainBlockCard from "@/components/SmallMainBlockCard";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import OurWorksBlock from "@/components/OurWorksBlock";
import { FaCircleChevronRight } from "react-icons/fa6";
import SmoothScrollLink from "@/components/SmoothScollLink";
import { GoArrowUpRight } from "react-icons/go";
import ImagesBlock from "@/components/ImagesBlock";
import AboutUsBlock from "@/components/AboutUsBlock";
import HalfImageBlock from "@/components/HalfImageBlock";

export interface QuizQuestion {
  title: string;
  options: string[];
  textField?: string;
  type?: "radio" | "checkbox";
}

const quizQuestions: QuizQuestion[] = [
  {
    title: "На каком этапе сейчас ваш проект?",
    options: [
      "Только появилась идея, хочу протестировать нишу",
      "Уже есть офлайн-бизнес, хочу онлайн-магазин",
      "Есть интернет-магазин, нужен редизайн или доработка",
      "Хочу новый масштабный проект",
    ],
  },
  {
    title: "Сколько товаров будет в магазине?",
    options: [
      "До 50 (тестовый запуск, небольшой ассортимент)",
      "50–500 (средний интернет-магазин)",
      "500–5000 (крупный магазин)",
      "5000+ (очень большой ассортимент)",
    ],
  },
  {
    title: "Какие функции важны для вашего магазина?",
    options: [
      "Онлайн-оплата (карты, Apple Pay, Google Pay)",
      "Интеграция с CRM / 1С / складом",
      "Личный кабинет покупателя",
      "Система скидок и бонусов",
      "Фильтры, подборки и поиск по товарам",
      "Доставка (курьеры, СДЭК, почта и т.п.)",
    ],
    type: "checkbox",
  },
  {
    title: "Какой подход вам ближе?",
    options: [
      "Минимальный сайт для теста идей (простая витрина)",
      "Магазин «среднего уровня» с современным дизайном и базовыми интеграциями",
      "Полноценный eCommerce с автоматизацией, CRM, аналитикой и маркетингом",
      "Индивидуальная разработка под ключ с уникальным дизайном и функционалом",
    ],
  },
  {
    title: "Как вам будет удобнее обсудить проект?",
    options: [
      "Позвоните мне",
      "Видеоконференция (Zoom/Google Meet)",
      "Написать в мессенджере (Telegram / WhatsApp / Email)",
    ],
  },
];

const Home = () => {
  return (
    <>
      <SEO
        title="Разработка сайтов в Минске | Создание сайтов под ключ"
        description="Создаем профессиональные сайты, которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши клиенты оценят каждый клик. Доверяйте разработку экспертам и получите сайт, который работает на ваш успех!"
        canonical="https://digitaldevils.by"
        productSchema={true}
        faqSchema={true}
      />
      <BasicLayout>
        <MainBlockFirst />
        <QuizBlock
          quizQuestions={quizQuestions}
          page="SolidSystems"
          title="Забронируйте скидку 10% на разработку сайта – ответьте на 5 вопросов и получите ключ к онлайн-успеху!"
          description="Успейте забронировать эксклюзивную скидку 10% на разработку сайта вашей мечты! Ответить на 5 простых вопросов, которые помогут нам лучше понять ваши цели и ожидания."
          padding="py-[40px]"
        />
        <StandardMarginsLayout styles="bg-black py-[40px] text-white">
          <div className="flex lg:flex-row flex-col gap-4" id="services">
            <div className="min-w-[45%]">
              <h2 className="xl:text-[60px] text-[40px] font-bold">
                Разработка вашего инетрнет-магазина
              </h2>
            </div>
            <div className="lg:max-w-[486px] w-full flex flex-col gap-5">
              <p className="text-[16px] font-medium">
                Забудьте о сложных интеграциях, неудобной архитектуре,
                нестабильной работе и проблемах с загрузкой страниц. Предлагаем
                полный спектр услуг по созданию, настройке и продвижению вашего
                интернет-магазина, чтобы вы могли сосредоточиться на самом
                главном — развитии своего бизнеса.
              </p>
              <div className="flex flex-col gap-[10px]">
                <div className="flex">
                  <div className="flex min-w-[24px] min-h-[24px] me-[8px] mt-1">
                    <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                  </div>
                  <p className="text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                    Разработаем магазин с уникальным дизайном, который будет
                    отражать стиль вашего бренда и привлекать внимание
                    покупателей.
                  </p>
                </div>
                <div className="flex">
                  <div className="flex min-w-[24px] min-h-[24px] me-[8px] mt-1">
                    <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                  </div>
                  <p className="text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                    Простая навигация и интуитивно понятный интерфейс обеспечат
                    удобство покупок и рост конверсии.
                  </p>
                </div>
                <div className="flex">
                  <div className="flex min-w-[24px] min-h-[24px] me-[8px] mt-1">
                    <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                  </div>
                  <p className="text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                    Мобильная адаптация станет залогом безупречного отображения
                    сайта на любом устройстве.
                  </p>
                </div>
                <div className="flex">
                  <div className="flex min-w-[24px] min-h-[24px] me-[8px] mt-1">
                    <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                  </div>
                  <p className="text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                    Безопасность и надежная защита пользовательских данных. 
                  </p>
                </div>
              </div>
              <SmoothScrollLink
                className="order-2 lg:order-1 flex transition-all lg:w-fit w-full mt-0"
                href="#quiz"
              >
                <div
                  className={`lg:w-[275px] w-full text-[16px] lg:py-[15px] py-[12px] leading-normal text-center rounded-full text-black bg-white`}
                >
                  Бесплатная консультация
                </div>
                <div
                  className={`ms-[-10px] lg:text-[28px] text-[16px] md:text-[24px] lg:size-[54px] size-[50px] lg:min-w-[54px] min-w-[50px] flex justify-center items-center rounded-full text-black bg-white`}
                >
                  <GoArrowUpRight />
                </div>
              </SmoothScrollLink>
            </div>
          </div>
        </StandardMarginsLayout>
        <ImagesBlock />
        <HalfImageBlock
          title="Интеграция с OZON, Wildberries, Яндекс.Маркет"
          smallTitle=""
          description={
            <>
              <p className="font-medium text-[16px] mb-[20px]">
                Модули интеграции с популярными маркетплейсами и
                онлайн-сервисами: OZON Seller, WB Partners, Яндекс.Маркет,
                Avito, системами складского и бухгалтерского учета, CRM,
                обеспечивают быструю выгрузку товаров из интернет-магазина,
                автоматическое обновление цен и остатков, простую обработку
                заказов. 
              </p>
            </>
          }
          buttonText="Бесплатная консультация"
          image={"/ozon.png"}
          smallImage={"/ozon_small.png"}
          widthImage={586}
          heightImage={300}
        />
        <WideBlockWithImage
          title="О нас"
          text_1="“Solid Systems” – сильная команда для разработки интернет-магазинов любого масштаба. Вот уже 5 лет создаем продуманные до мелочей сайты: смыслы и дизайны, структура, юзабилити, SEO."
          text_2="Предоставляем поддержку и отчеты на всех этапах работы. Даем рекомендации по дальнейшему развитию, оказываем услуги по техническому сопровождению."
          bg="bg-black"
        />
        <OurWorksBlock
          title="Наши работы"
          cases={[
            {
              imagePath: "/case1.png",
              imageSmallPath: "/case1_small.png",
              achievements: [
                "Сделали функциональный магазин шин с онлайн-подбором по параметрам автомобиля. ",
                "Интегрировали систему доставки и оплаты, обеспечили высокую скорость работы сайта.  Это для лендинга Интернет магазины",
              ],
              name: "AutoMerc",
              title: "Разработка интернет-магазина автозапчастей",
            },
            {
              imagePath: "/case2.png",
              imageSmallPath: "/case2_small.png",
              achievements: [
                "Разработали стильный e-commerce сайт для fashion-бренда.",
                "Добавили фильтры по коллекциям и размерам, личный кабинет и адаптивный дизайн для мобильных устройств.",
              ],
              name: "HockArt",
              title: "Разработка интернет-магазина одежды",
            },
            {
              imagePath: "/case3.png",
              imageSmallPath: "/case3_small.png",
              achievements: [
                "Сделали функциональный магазин шин с онлайн-подбором по параметрам автомобиля.",
                "Интегрировали систему доставки и оплаты, обеспечили высокую скорость работы сайта. Это для лендинга Интернет магазины.",
              ],
              name: "TopTyre",
              title: "Разработка интернет-магазина шин",
            },
          ]}
        />
      </BasicLayout>
    </>
  );
};

export default Home;
