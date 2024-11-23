import SectionContainer from "@/components/SectionContainer"
import LayoutClient from "@/Layouts/LayoutClient"
import Dager from "@/assets/img/DagerDark.webp"

function HomePage() {
  return (
    <LayoutClient>
      <SectionContainer className="h-screen flex flex-row gap-5 items-center">
        <div className="flex flex-col gap-5 z-10">
          <h1 className="text-8xl font-bold"> <span className="text-neutral-800 block">I'm</span> Dager</h1>
          <p>| Full-stack/lead dev with a passion for SOLID code and amazing products. |</p>
        </div>
        <div className="self-end fixed bottom-0 right-0 w-full sm:w-auto sm:bottom-auto sm:right-auto sm:static">
          <img src={Dager} alt="" />
        </div>
      </SectionContainer>
    </LayoutClient>
  );
}

export default HomePage;

