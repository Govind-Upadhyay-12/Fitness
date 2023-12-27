import TitleRed from "../../images/who-we-are/title-bg.svg";
import BlogBox from "./BlogBox";

function Blog() {
  return (
    <>
      <section id="blog" className="bg-white ">
        <div className="container page-padding py-[10rem]">
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
              latest blog
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px]"
            />

            <h2 className="text-[3.4rem] font-bold mb-4">Our Recent News</h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Gymat an unknown printer took a galley of type and scrambled
              <br /> make a type specimen book.
            </p>
          </div>

          {/* blog boxes */}
          <div className="flex gap-6 w-full mt-[5rem] md1200:justify-center flex-wrap">
            <BlogBox
              bgClass="box1Bg"
              date="22.03.2022"
              title="Yoga For Everyone in 2023"
              description="This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds. "
            />
            <BlogBox
              bgClass="box2Bg"
              date="13.09.2022"
              title="Getting Back Into CrossFit After Vacation"
              description="Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success."
            />
            <BlogBox
              bgClass="box3Bg"
              date="28.06.2022"
              title="Meet Fitness Ambassador Grace"
              description="Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
