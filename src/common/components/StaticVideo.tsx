import steel from "../../assets/videos/steel-compressed.mp4";
const StaticVideo = () => {
  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        className=""
        style={{
          width: "100vw",
          height: "490px",
          objectFit: "cover",
        }}
      >
        <source src={steel} type="video/mp4" className="w-full" />
      </video>
      <div className="absolute bottom-[71px] left-[69px] text-white">
        <div className="text-[32px] font-bold">
          <p className="mb-2" style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)", WebkitTextStroke: "1px #000000", fontWeight:"bold" }}>Where precision combines with</p>
          <p style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)", WebkitTextStroke: "1px #000000", fontWeight:"bold" }}>durability & Sustainability</p>
        </div>
      </div>
    </div>
  );
};

export default StaticVideo;
