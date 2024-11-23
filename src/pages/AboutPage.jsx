import SectionContainer from "@/components/SectionContainer"
import LayoutClient from "@/Layouts/LayoutClient"
import Dager from "@/assets/img/DagerDark.webp"
import Game from "@/components/Game";

function AboutPage() {
  return (
    <LayoutClient>
      <Game/>
      <SectionContainer className="h-screen flex flex-row gap-5 items-center pt-10 sm:pt-0 ">
        <div className="flex flex-col w-[900px] text-pretty gap-3 z-10">
          <h1 className="text-3xl sm:text-6xl pb-4">About me 👋</h1>
          <p className="text-sm">
            Hi! I'm Dot Dager, a content creator passionate about a unique mix of interests: programming, cats, guitars, pickles, and philosophy.
          </p>
          <p className="text-sm">
            I love exploring the digital world while enjoying the company of my cats and finding inspiration in every chord of my guitar. I'm also a fan of pickles, because who can resist their unique charm? Plus, philosophy is my compass, helping me reflect and connect ideas in everything I do, from code to life itself.
          </p>
        </div>
        <div className="self-end fixed bottom-0 right-0 w-full sm:w-auto sm:bottom-auto sm:right-auto sm:static">
          <img src={Dager} alt="" />
        </div>
      </SectionContainer>
    </LayoutClient>

  );
}

export default AboutPage;