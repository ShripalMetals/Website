import Pipes from "../../assets/images/pipeline.png"
const Pipeline = () => {

  return (
    <div className="py-[40px] px-[80px]">
      <h3 className="text-[24px] font-bold mb-10 text-center">
       Timeline
      </h3>
      <div className="flex justify-center">
      <img
              src={Pipes}
              alt=""
              className="w-[100%] h-[15%] rounded-md"
            />
      </div>
    </div>
  );
};

export default Pipeline;
