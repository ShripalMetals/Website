import { WorldMap } from "react-svg-worldmap";

const GlobalFootprint = () => {
  const mapData = [
    { country: "in", value: "" }, // India
    { country: "fr", value: "" }, // France
    { country: "it", value: "" }, // Italy
    { country: "iq", value: "" }, // Iraq
    { country: "ir", value: "" }, // Iran
    { country: "eg", value: "" }, // Egypt
    { country: "dz", value: "" }, // Algeria
    { country: "ma", value: "" }, // Morocco
    { country: "ke", value: "" }, // Kenya
    { country: "id", value: "" }, // Indonesia
    { country: "ca", value: "" }, // Canada
    { country: "us", value: "" }, // USA
    { country: "br", value: "" }, // Brazil
    { country: "lk", value: "" }, // Sri Lanka
    { country: "th", value: "" }, // Thailand
    { country: "sa", value: "" }, // Saudi Arabia
    { country: "ng", value: "" }, // Nigeria
    { country: "tr", value: "" }, // Turkey
  ];

  return (
    <div className="py-[40px] px-[80px]">
      <h3 className="text-[24px] font-bold mb-10 text-center">
        Global Footprint
      </h3>
      <div className="flex justify-center">
        <WorldMap
          color="#FF6600"
          title=""
          value-suffix=""
          size="xxl"
          data={mapData}
        />
      </div>
    </div>
  );
};

export default GlobalFootprint;
