import EconomicForum from "../../assets/images/economic-forum.png"
import UpdatesCover from "../../assets/images/updates-banner.png"

const Updates = () => {
  return (
    <div>
        {/* Cover Image Section */}
        <div className="relative">
            <img className="w-full h-[70vh] object-cover" alt="" src={UpdatesCover} />
              <div className="absolute bottom-12 left-8" style={{ marginBottom: "80px" }}>
                  <h3 className="text-2xl font-bold">Updates</h3>
                  <p className="w-[42%] mt-6 mb-12">
                  Moving forward together on our path of accompolishments, let's take
                  a closer look at our journey
                  </p>
              </div>
        </div>
      {/* <div className="bg-gray-100 relative h-[300px]">
        <div className="absolute bottom-8 left-8">
          <h3 className="text-2xl font-bold">Updates</h3>
          <p className="w-[42%] mt-6">
            {" "}
            Moving forward together on our path of accompolishments, let's take
            a closer look at our journey
          </p>
        </div>
      </div> */}
      <div className="text-center flex justify-center">
        <div className="p-6">
          <h3 className="text-[24px] font-semibold pb-3"><span className="border-b-2 pb-3 pr-4 border-[#ce8359]">World Economic Forum</span></h3>
          <div className="py-8"><img src={EconomicForum} className="w-[500px] h-[300px]" alt=""/></div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
