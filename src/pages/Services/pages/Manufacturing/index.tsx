import ShripalTeam2 from "../../../../assets/images/workers3.jpg";
import images from "./images";
import ContactFooter from "../../../../common/components/ContactFooter";
import ManufacturingBanner from "../../../../assets/images/manufacturing-banner-img.png";
import ManufacturingPage1 from "../../../../assets/images/pipe001.png";
import ManufacturingPage2 from "../../../../assets/images/pipe-fittings-mnf-page.png";
import { Link } from "react-router-dom";

const ManuFacturingPage = () => {
  return (
    <>
      <div className="relative">
        <div>
          <img src={ManufacturingBanner} alt="" className="w-full h-auto max-h-[50vh]" />
        </div>
        <div className="absolute bottom-12 left-6 text-white">
          <div className="text-3xl font-bold">Manufacturing</div>
          <div className="text-xl mt-2 font-semibold text-left">
            Quality products for various industries
          </div>
        </div>
      </div>

      <div>
        <div className="py-[55px] px-[20px] lg:px-[77px]">
          <h3 className="text-[30px] lg:text-[40px] font-bold mb-[39px]">Manufacturing</h3>
          <div className="px-8 leading-relaxed tracking-wide">
            <p className="mb-6 text-[16px] lg:text-[20px]">
              At Shripal Metal Ltd., our core competencies lie in the production
              of a wide range of metal products including longitudinally welded
              fittings, as well as specialized components in Stainless Steel,
              Carbon Steel, and other high-performance alloys. Our rigorous
              quality assurance processes and advanced manufacturing
              technologies ensure that every product meets the highest standards
              of quality and safety.
            </p>
            <p className="text-[16px] lg:text-[20px]">
              We are proud to be an approved supplier to leading global companies
              and organizations, known for our ability to meet stringent
              requirements for corrosion resistance, heat resistance, and
              overall durability. Our client portfolio includes industry giants
              such as SABIC, Larsen & Toubro, HPCL, BPCL, Petrojet, Sonatrach,
              Aditya Birla Group of Companies, Indorama, and many more who trust
              us for their critical applications.
            </p>
          </div>

          {/* First image-text block */}
          <div className="flex flex-col lg:flex-row gap-[40px] items-center mt-[84px] px-8">
            <div className="flex justify-center lg:w-[45%]">
              <img
                className="w-auto h-auto max-w-[504px] max-h-[349px] rounded-md"
                src={ManufacturingPage1}
                alt="Manufacturing Image 1"
              />
            </div>
            <div className="lg:w-[45%]">
              <p className="text-[16px] lg:text-[20px] leading-relaxed tracking-wide">
                We manufacture welded CRA Pipes in Single & Double Random
                Lengths starting with (NPS Ø) 3” to 60” and wall thickness from
                2 mm up to 80 mm from Plates as well as Pipes from Coils ranging
                from 3” to 20” and wall thickness from 2 mm to 13 mm in desired
                lengths. All other dimensions can be manufactured in accordance
                with our customers' specific requirements. We manufacture our
                Pipes in all Stainless Grades, Duplex, High Nickel, and Special Alloys.
              </p>
            </div>
          </div>

          {/* Second image-text block */}
          <div className="flex flex-col lg:flex-row-reverse gap-[40px] items-center mt-[84px] px-8">
            <div className="flex justify-center lg:w-[45%]">
              <img
                className="w-auto h-auto max-w-[504px] max-h-[349px] rounded-md"
                src={ManufacturingPage2}
                alt="Manufacturing Image 2"
              />
            </div>
            <div className="lg:w-[45%]">
              <p className="text-[16px] lg:text-[20px] leading-relaxed tracking-wide">
                We manufacture welded and seamless CRA Fittings such as Elbows,
                Tees, Caps, and Reducers in dimensions from 1” to 60” and wall
                thickness up to 2”. Special dimensions can be produced in
                accordance with customer specifications. We manufacture our
                Fittings in all Stainless Grades, Duplex, High Nickel, and
                Special Alloys.
              </p>
            </div>
          </div>

          {/* Manufacturing Facilities section */}
          <div className="mt-[124px]">
            <div className="flex items-center pb-[50px] flex-col lg:flex-row">
              <div className="w-full text-center lg:text-left">
                <h3 className="text-[30px] lg:text-[40px] font-bold">
                  Manufacturing Facilities
                </h3>
              </div>
              <div className="mt-4 lg:mt-0 w-[180px] flex justify-center lg:justify-end">
                <Link
                  className="py-[12px] px-6 bg-[#be5b23] rounded-md text-white hover:bg-opacity-90"
                  to="/services/manufacturing/gallery"
                >
                  View more
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-between gap-[62px]">
              {images.facilities.map((i: any) => (
                <img
                  key={i.d}
                  src={i.img}
                  className="w-auto h-auto max-w-[399px] max-h-[317px] rounded-md"
                />
              ))}
            </div>
          </div>

          {/* Products Manufactured section */}
          <div className="my-[100px]">
            <h3 className="text-[30px] lg:text-[40px] font-bold pb-[60px] text-center">
              Products Manufactured
            </h3>
            <div className="">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-[60px]">
                {images.productsManufactured.map((i: any) => (
                  <div key={i.id} className="flex flex-col items-center">
                    <Link to={`/products/${i.name.toLowerCase().replace(/ /g, '-')}`}>
                      <img
                        alt={i.name}
                        src={i.img}
                        className="w-auto h-auto max-w-[376px] max-h-[365px] rounded-md"
                      />
                    </Link>
                    <p className="text-center text-[18px] lg:text-[24px] mt-3">{i.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ContactFooter />
      </div>
    </>
  );
};

export default ManuFacturingPage;
