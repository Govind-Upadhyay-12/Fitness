import MainButton from "../MainButton";

function ClassesBox({ bgImg, title, trainer, date }) {
  return (
    <>
      <div
        className={`${bgImg} rounded-3xl shadow-2xl flex flex-col h-[46rem] relative p-[40px]`}
      >
        <span className="bg-[#0000004a] rounded-3xl w-full h-full absolute top-0 left-0"></span>

        <div className="flex flex-col align-text-bottom h-full w-full z-[2] justify-end">
          <p className="text-white font-bold text-[2.7rem] mb-3">{title}</p>

          <span className="bg-[#ff0336] w-[50px] h-[4px]"></span>

          <div className="flex gap-6 mb-14 mt-6 text-[#ffffffe1] text-[1.6rem] font-medium">
            <p>
              <i className="fa-regular fa-user"></i> {trainer}
            </p>
            <p>
              <i className="fa-regular fa-clock"></i> {date}
            </p>
          </div>

          <MainButton
            color={`text-black`}
            bg={`bg-white`}
            text="join now"
            goTo="/contact"
          />
        </div>
      </div>
    </>
  );
}

export default ClassesBox;
