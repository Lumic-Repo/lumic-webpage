import eslImg from "../assets/ESL.png";
import cloudImg from "../assets/zkong-cloud.png";
import ButtonComponent from "../components/ButtonComponent";
import introVideo from "../assets/zkong-esl-video.mp4";
import VideoComponent from "../components/VideoComponent";

const IntroSection = () => {
  return (
    <div className="mt-6 mb-8">
      <div className="m-4 py-6 flex justify-center items-center">
        <VideoComponent src={introVideo} />
      </div>
      <div className="flex flex-col md:flex-row px-2 my-6">
        <div className="basis-1/3 flex justify-center md:justify-start">
          <img
            src={eslImg}
            alt="ESL Image 1"
            className="w-xs md:w-lg lg:w-3xl object-contain"
          />
        </div>
        <div className="basis-1/2 ml-0 md:ml-6 mt-4 md:mt-0">
          <h2 className="text-xl md:text-2xl font-semibold">
            Discover Electronic Shelf Labels (ESLs): Modernizing Price Tags
          </h2>
          <p className="text-sm md:text-sm lg:text-base mt-2">
            Say farewell to old paper price labels. ESLs are innovative
            electronic displays placed on shelves. They&#39;re linked wirelessly
            to the store&#39;s computer system, showing accurate prices in
            real-time. No more manual updates – just effortless, precise pricing
            management. In collaboration with ZKong, an experienced ESL
            manufacturer, we&#39;re introducing advanced Cloud ESL solutions to
            Indonesia.
          </p>
        </div>
      </div>
      <div className="flex mt-4 py-4 w-full px-4 md:px-0 md:w-auto justify-center">
        <ButtonComponent
          href="/products"
          className="bg-gradient-to-r from-purple-400 to-purple-600"
        >
          Show More Products
        </ButtonComponent>
      </div>
      <div className="px-2 md:mt-20">
        <h2 className="text-xl md:text-2xl font-semibold text-center py-2">
          How it works ?
        </h2>
        <div className="flex justify-center bg-white">
          <img
            src={cloudImg}
            alt="ESL Image 2"
            className="w-xs md:w-lg lg:w-3xl object-contain mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
