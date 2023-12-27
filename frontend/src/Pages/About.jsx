import Footer from "../components/Footer/Footer";
import GirlRunning from "../images/who-we-are/girl-run.png";
import GirlRedBg from "../images/who-we-are/girl-redbg.svg";
import GirlText from "../images/who-we-are/girl-side-text.png";
import GirlWind from "../images/who-we-are/wind.png";
import TitleRed from "../images/who-we-are/title-bg.svg";
import MainButton from "../components/MainButton";
import Img3 from "../images/AboutPage/3.jpg";
import Img4 from "../images/AboutPage/4.jpg";
import Target from "../images/AboutPage/target.png";
import Mountain from "../images/AboutPage/mountain.png";

function About() {
  return (
    <>
      <section className="login-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            About Us
          </h1>
        </div>
        <div className="container page-padding py-[5rem]">
          <div className="grid grid-cols-[1fr_1fr] h-[60rem] md1000:grid-cols-1">
            {/* title div -- */}
            <div className="flex flex-col !text-left relative items-right justify-center md1000:items-center md1000:!text-center">
              <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8 ml-20 md1000:ml-3 ">
                who we are
              </p>
              <img
                src={TitleRed}
                alt="text_bg"
                className="w-[21rem] absolute top-[120px] min450:top-[84px] min375:top-[68px]"
              />

              <h2 className="text-[3.6rem] max-w-[53rem] font-bold mb-4">
                We Will Give You Strength and Health
              </h2>
              <p className="text-[#646464] font-medium text-[15px] max-w-[50rem] ">
                At Gymate, we are dedicated to helping you achieve the body of
                your dreams. Our expert trainers and nutritionists will work
                with you to create a personalized fitness and nutrition plan
                that helps you reach your specific goals.
              </p>
              <MainButton
                color={`!text-white`}
                bg={`bg-[#ff0336]`}
                goTo="/contact"
                text="contact us"
                arrowColor={`!text-white`}
                cN="pricing-cta blog-cta"
              />
            </div>
            {/*  */}
            <div className="relative w-[80%] -top-[90px] left-[40px] md1000:hidden">
              <img
                src={GirlRunning}
                alt="girl_running"
                className="girl-running"
              />
              <img src={GirlRedBg} alt="bg-red" className="girl-bg" />
              <img src={GirlText} alt="bg-text" className="girl-text" />
              <img src={GirlWind} alt="bg-wind" className="girl-wind" />
            </div>
          </div>
          {/*  */}
          <div className="mt-[10rem]">
            <div className="grid grid-cols-2 grid-rows-2 w-full min620:grid-cols-1">
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                <img src={Target} alt="target_img" className="w-[9rem]" />
                <h2 className="text-[36px] font-bold mt-3">Our History</h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit
                  Exercitation veniam consequat.
                </p>
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem]">
                <img
                  src={Img3}
                  alt="about_img"
                  className="w-full h-full object-cover bg-center"
                />
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem]">
                <img
                  src={Img4}
                  alt="about_img"
                  className="w-full h-full object-cover bg-center"
                />
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                <img src={Mountain} alt="target_img" className="w-[9rem]" />
                <h2 className="text-[36px] font-bold mt-3">Our History</h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit
                  Exercitation veniam consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default About;
