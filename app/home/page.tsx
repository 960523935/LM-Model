import Image from "next/image";
import { getDictionary } from "@/app/i18n/get-dictionary";
import Nav from "@/app/components/Nav";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Mail } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import "./index.css";
import Footer from "@/app/components/Footer";
const lang = "en";
async function Home() {
  const t = getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Nav lang={lang} />
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div
          id="introduction"
          className="scroll-mt-16 w-full flex flex-col items-center justify-center py-10 px-6 bg-block-introduction text-white"
        >
          <div className="introduction-us text-4xl w-[80%] flex flex-col items-center justify-center">
            {t.team_introduction}
          </div>
          <div className="w-[80%] mt-6 text-xl">
            {t.team_introduction_content}
          </div>
        </div>
        <div
          id="contact"
          className="scroll-mt-16 w-[80%] color-cell-container rounded-[16px]  my-10 mx-10 flex flex-col items-center justify-center py-10 px-6"
        >
          <div className="team-text text-4xl flex items-center justify-center">
            {t.contact_us}
          </div>
          <div className="mt-6 text-xl text-white">{t.contact_us_content}</div>
          <a
            href="mailto:pp2mall@outlook.com"
            className="shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ease-in-out flex items-center justify-center mt-6 px-4 gap-1 rounded-[20px] h-10 bg-[#f7c600] text-black cursor-pointer"
          >
            <Mail />
            pp2mall@outlook.com
          </a>
        </div>
        <div
          id="service"
          className="scroll-mt-16 w-full flex flex-col items-center justify-center"
        >
          <div className="w-full flex justify-center items-center text-4xl font-bold mb-8">
            {t.our_service}
          </div>
          <Carousel className="w-[80%] relative rounded-[16px] text-black">
            <CarouselContent>
              <CarouselItem>
                <div className="flex justify-between flex-row items-stretch flex-none overflow-hidden">
                  <div className="w-[50%] overflow-hidden z-10">
                    <AspectRatio ratio={16 / 9}>
                      <Image src="/images/slide1.jpg" alt="Image" fill />
                    </AspectRatio>
                  </div>
                  <div className="w-[50%] flex flex-col items-center justify-center px-6 bg-slate-300">
                    <div className="text-2xl text-[green] font-bold mb-6">
                      {t.technology_1}
                    </div>
                    <div className="text-xl">{t.technology_description_1}</div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex justify-between flex-row items-stretch flex-none overflow-hidden">
                  <div className="w-[50%] overflow-hidden z-10">
                    <AspectRatio ratio={16 / 9}>
                      <Image src="/images/slide2.jpeg" alt="Image" fill />
                    </AspectRatio>
                  </div>
                  <div className="w-[50%] flex flex-col items-center justify-center px-6 bg-slate-300">
                    <div className="text-2xl text-[green] font-bold mb-6">
                      {t.technology_2}
                    </div>
                    <div className="text-xl">{t.technology_description_2}</div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex justify-between flex-row items-stretch flex-none overflow-hidden">
                  <div className="w-[50%] overflow-hidden z-10">
                    <AspectRatio ratio={16 / 9}>
                      <Image src="/images/slide3.jpeg" alt="Image" fill />
                    </AspectRatio>
                  </div>
                  <div className="w-[50%] flex flex-col items-center justify-center px-6 bg-slate-300">
                    <div className="text-2xl text-[green] font-bold mb-6">
                      {t.technology_3}
                    </div>
                    <div className="text-xl">{t.technology_description_3}</div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex justify-between flex-row items-stretch flex-none overflow-hidden">
                  <div className="w-[50%] overflow-hidden z-10">
                    <AspectRatio ratio={16 / 9}>
                      <Image src="/images/slide4.jpg" alt="Image" fill />
                    </AspectRatio>
                  </div>
                  <div className="w-[50%] flex flex-col items-center justify-center px-6 bg-slate-300">
                    <div className="text-2xl text-[green] font-bold mb-6">
                      {t.technology_4}
                    </div>
                    <div className="text-xl">{t.technology_description_4}</div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex justify-between flex-row items-stretch flex-none overflow-hidden">
                  <div className="w-[50%] overflow-hidden z-10">
                    <AspectRatio ratio={16 / 9}>
                      <Image src="/images/slide5.jpg" alt="Image" fill />
                    </AspectRatio>
                  </div>
                  <div className="w-[50%] flex flex-col items-center justify-center px-6 bg-slate-300">
                    <div className="text-2xl text-[green] font-bold mb-6">
                      {t.technology_5}
                    </div>
                    <div className="text-xl">{t.technology_description_5}</div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-left-12 top-1/2 -translate-y-1/2" />
            <CarouselNext className="-right-12 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
        <div
          id="aboutUs"
          className="scroll-mt-16 w-full my-10 mx-10 flex flex-col items-center justify-center py-10 px-6 bg-block-cell"
        >
          <div className="about-us text-4xl w-[80%] flex flex-col items-center justify-center">
            {t.about_us}
          </div>
          <div className="w-[80%] mt-6 text-xl">{t.about_us_content}</div>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default Home;
