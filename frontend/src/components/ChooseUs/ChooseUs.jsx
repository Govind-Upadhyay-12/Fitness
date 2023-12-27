import VideoImg from "../../images/choose-us/main-img.png";
import TitleRed from "../../images/who-we-are/title-bg.svg";
import TrainingIcon from "../../images/choose-us/training.png";
import EquipmentsIcon from "../../images/choose-us/bench-press.png";
import BagIcon from "../../images/choose-us/gym-bag.png";
import BottleIcon from "../../images/choose-us/bottle-of-water.png";
import PlayImg from "../../images/choose-us/play.png";
import MainButton from "../MainButton";

function ChooseUs() {
  return (
    <>
      <section className="choose-section py-[12rem] ">
        <div className="container page-padding flex flex-row md1000:flex-col md1000:items-center gap-[7rem]">
          <div className="video-div relative w-[50%] md1000:w-[85%] md1000:flex md1000:justify-center">
            <img
              src={VideoImg}
              alt="video_img"
              className="relative w-[94%] h-auto"
            />
            <img
              src={PlayImg}
              alt="play_img"
              className="absolute w-[2.4rem] top-[42%] left-[44%] z-10 cursor-pointer min450:left-[47%] min450:top-[44%] "
            />
            <span className="bg-white cursor-pointer p-14 absolute rounded-full top-[38.7%] left-[39.9%]"></span>
          </div>

          <div className="relative w-[50%] md1000:flex md1000:flex-col md1000:items-center md1000:text-center md1000:w-[85%]">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-14">
              why choose us
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[22rem] absolute -top-[6px] -left-14 md1000:hidden "
            />
            <h2 className=" text-[3.6rem] text-white font-bold leading-[1.2] max-w-3xl md1000:max-w-[80%]">
              We Can Give A Shape Of Your Body Here!
            </h2>
            <p className="text-[16.5px] text-[#b4b4b4] mt-7 max-w-3xl md1000:max-w-[80%]">
              At <b>Gymate</b>, we are dedicated to helping you achieve the body
              of your dreams. Our expert trainers and nutritionists will work
              with you to create a personalized fitness and nutrition plan that
              helps you reach your specific goals.
            </p>

            <div className="grid grid-cols-2 grid-rows-2 gap-14 max-w-[44rem] mt-14 min450:flex min450:flex-col">
              <div className="flex items-center gap-6">
                <img
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                  src={TrainingIcon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                  Free Fitness Training
                </p>
              </div>

              <div className="flex items-center gap-6">
                <img
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                  src={EquipmentsIcon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                  Modern Gym Equipments
                </p>
              </div>

              <div className="flex items-center gap-6">
                <img
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                  src={BagIcon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                  Gym Bag Equipments
                </p>
              </div>

              <div className="flex items-center gap-6">
                <img
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                  src={BottleIcon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                  Fresh Bottle Watter
                </p>
              </div>
              <MainButton
                color={`!text-white`}
                bg={`bg-[#595959]`}
                text="our classes"
                arrowColor={`!text-white`}
                cN="choose-cta"
                hover={`hover:bg-[#ff0336] rounded-full`}
                goTo="/classes"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
