import SectionContainer from "@/components/SectionContainer"
import LayoutClient from "@/Layouts/LayoutClient"
import Dager from "@/assets/img/DagerDark.webp"
import YoutubeLinks from "@/components/YoutubeLinks";

function WorkPage() {
  return (
    <LayoutClient>
      <SectionContainer className="relative h-screen flex items-center justify-center pt-20 sm:pt-0">
        <img
          src={Dager}
          alt="Fondo detrás del texto"
          className="absolute inset-0 sm:h-full self-end opacity-50 place-self-center"
        />
        <div className="z-10">
          <h1 className="text-4xl sm:text-6xl font-bold mb-12">Latest Works</h1>
          <YoutubeLinks />
        </div>
      </SectionContainer>
    </LayoutClient>
  );
}

export default WorkPage;

