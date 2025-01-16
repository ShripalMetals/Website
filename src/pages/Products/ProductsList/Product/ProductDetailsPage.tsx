import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../../productsData";
import CoverImg from "../../../../assets/images/products/pipes-banner.png";
import RequestQuoteTesting from "../../../../common/RequestQuoteTesting";

const ProductDetailsPage = () => {
  const { category, id, name, grade } = useParams<{ category: string; id: string; name: string; grade: string | undefined }>();
  const [data, setData] = useState<any>();
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);

  // List of possible grade names
  const gradeNames = [
    "Stainless Steel 304 Pipe",
    "Stainless Steel 304L Pipe",
    "Stainless Steel 316 Pipe",
    "Stainless Steel 316L Pipe",
    "316h Stainless Steel Pipe",
    "Stainless Steel 3105 Pipe",
    "Stainless Steel 317L Pipe",
    "Stainless Steel 321 Pipe",
    "Stainless Steel 347H Pipe",
    "Stainless Steel 410 Pipe",
    "Stainless Steel 445 Pipe",
    "Stainless Steel 904L Pipe",
    "JIS G3459 Stainless Steel Pipes",
    "Alloy 31 Pipe",
    "Stainless Steel Square Pipe",
    "Am 350 Stainless Steel",
    "ASTM A335 P1",
    "ASTM A335 P5",
    "ASTM A335 P9",
    "ASTM A335 P11",
    "ASTM A335 P12",
    "ASTM A335 P22",
    "ASTM A335 P91",
    "ASTM A691 Pipe",
    "16Mo3 Pipe",
    "ASTM A334 GR 6",
    "Chromoly Pipe",
    "12Cr1MoV Pipe",
    "ASTM A53 Grade B Pipe",
    "ASTM A106 Grade B",
    "ASTM A106 Grade C",
    "ASTM A333 Grade 6",
    "ASTM A333 Grade 1",
    "ASTM A671 CC60",
    "ASTM A671 CC85",
    "ASTM A672 Pipe",
    "ASTM A672 Gr B60",
    "ASTM A672 C65",
    "ASTM A672 C70",
    "Q195 Steel Pipe",
    "S275JR Pipe",
    "ASTM A519 Grade 4130",
    "ASTM A519 Grade 4140",
    "ASTM A519 Grade 1026",
    "ASTM A519 Grade 1018",
    "ASTM A210 Grade A1",
    "ASTM A120 Black Steel Pipe",
    "ASTM A334 GR.1",
    "Nickel 200 Pipe",
    "Nickel 201 Pipe",
    "Inconel Pipe",
    "Inconel 600 Pipe",
    "Inconel 625 Pipe",
    "Inconel 800 Pipe",
    "Inconel 825 Pipe",
    "Hastelloy Pipe",
    "Hastelloy C276 Pipe",
    "Hastelloy C22 Pipe",
    "Monel Pipe",
    "Monel 400 Pipe",
    "Monel K500 Pipe",
    "Duplex 2205 Pipe",
    "Super Duplex Pipe",
    "ASTM A790 UNS S31803",
    "ASTM A790 UNS S32205",
    "ASTM A790 UNS S32750",
    "ASTM A790 UNS S32760",
    "UNS S32950 Pipe",
    "250 SMO Pipe", 
    "API 5L Grade B Pipe",
    "API 5L X42 Pipe",
    "API 5L X46 Pipe",
    "API 5L X52 Pipe",
    "API 5L X56 Pipe",
    "API 5L X60 Pipe",
    "API 5L X65 Pipe",
    "API 5L X70 Pipe",
    "API 5L X80 Pipe",
    "Epoxy Coated Steel Pipe",
    "3LPE Coated Pipe",
    "Powder Coated Carbon Steel Pipe",
    "Cement Lined Steel Pipe",
    "PE Coated Steel Pipe",
    "PTFE Lined Pipe",
    "Bare Steel",
    "Black Pipe",
    "Galvanized Pipe",
    "3LPP Coating",
    "S275JR Pipe",
    "EN 10210 S355J2H",
    "Corten Steel Pipe",
    "Titanium Pipe",
    "Titanium Grade 2 Pipe",
    "Grade 5 Titanium Pipe",
    "Copper Nickel Pipe",
    "Copper Nickel 90/10 Pipe",
    "Copper Nickel 70/30 Pipe",
    "Copper Pipe",
    "Brass Pipe",
    "Aluminum Pipe",
    "6061 Aluminum Pipe",
    "5086 Aluminum Pipe",
    "5052 Aluminum Pipe",
    "6063 Aluminum Pipe",
    "5083 Aluminum Pipe",
    "7075 Aluminum Pipe",
    "Alloy 20 Pipe",
    "Nickel Alloy",
    "Incolenel 600",
    "Incolenel 625",
    "Incolenel 800",
    "Incolenel 825",
    "Hastealloy C22",
    "Hastealloy C276",
    "Monel 400",
    "Stainless Steel 304",
    "Stainless Steel 304L",
    "Stainless Steel 316",
    "Stainless Steel 316L",
    "Stainless Steel 310",
    "Stainless Steel 317L",
    "Stainless Steel 321",
    "Stainless Steel 347",
    "Stainless Steel 904L",
    "Stainless Steel Forged",
    "ASTM A234 Gr WPB",
    "ASTM A420 Grade WPL6",
    "Carbon Steel Forged",
    "ASTM A105 Forged",
    "Alloy Steel",
    "Nickel Alloy",
    "Copper Nickel",
    "Duplex Steel",
    "Super Duplex",
    "Titanium",
    "Brass",
    "Alloy 20",
    "NO",
    "DIN 2609 Carbon Steel Elbow",
    "Pipe Outlet",
    "Stainless Steel 304 Fasteners",
    "Stainless Steel 304L Fasteners",
    "Stainless Steel 316 Bolts",
    "Stainless Steel 316L Fasteners",
    "Stainless Steel 321 Fasteners",
    "310 Stainless Steel Fasteners",
    "Duplex Bolts",
    "Super Duplex Bolts",
    "Stud Bolts",
    "Nickel Alloy fasteners",
    "Inconel 625 fasteners",
    "Incoloy 800 fasteners",
    "Incoloy 825 fasteners",
    "Inconel 718 Bolts",
    "Hastelloy C22 fasteners",
    "Hastelloy C276 fasteners",
    "Monel 400 fasteners",
    "Copper Nickel Fasteners",
    "Titanium Fasteners",
    "Grade 2 Titanium Fasteners",
    "Titanium Grade 5 Fasteners",
    "ASTM A193 Grade B7 Bolts",
    "ASTM A194 Grade 2H",
    "ASTM A193 Grade B16 Bolts",
    "Alloy 20 Fasteners",
    "ASTM A453 grade 660 Bolts",
    "ASTM A182 F304",
    "ASTM A182 F304L",
    "ASTM A182 F310",
    "Stainless steel 310 flanges",
    "ASTM A182 F316L",
    "ASTM A182 Gr F321",
    "ASTM A182 F347/347H",
    "ASTM A105 Forged Steel Flanges",
    "ASTM A350 Lf2 Flanges",
    "ASTM A694 Flanges",
    "ASTM A181 Flanges",
    "ASTM A182 Gr F1",
    "ASTM A182 Gr F5",
    "ASTM A182 Gr F9",
    "ASTM A182 Gr F11",
    "ASTM A182 Gr F22",
    "ASTM A182 Gr F91",
    "Copper Nickel Flanges",
    "Duplex Flanges",
    "Super Duplex Flanges",
    "Titanium Flanges",
    "Inconel 600 Flanges",
    "Inconel 625 Flanges",
    "Incoloy 800 Flanges",
    "Incoloy 825 Flanges",
    "Hastelloy C22 Flanges",
    "Money 400 Flanges",
    "Alloy 20 Flanges",
    "Hastelloy C276 Flanges",
    "304 Stainless Steel Sheet",
    "304L Stainless Steel Sheet",
    "ASTM A240 304H",
    "310 Stainless Steel Plate",
    "316 Stainless Steel Sheet",
    "316L Stainless Steel Sheet",
    "316h Stainless Steel Plate",
    "317L Stainless Steel Sheet", 
    "321 Stainless Steel Plate", 
    "347 Stainless Steel Sheet",
    "409 Stainless Steel Sheet",
    "410 Stainless Steel Plate",
    "446 Stainless Steel Sheet",
    "Stainless Steel 904L Plate",
    "Stainless Steel Perforated Sheet",
    "Stainless Steel Circles",
    "ASTM A515 Gr 70",
    "ASTM A515 Gr 60",
    "ASTM A516 Grade 60",
    "ASTM A516 Grade 65",
    "ASTM A516 Grade 70",
    "ASTM A572 Grade 50",
    "15MO3 Alloy Steel Plate",
    "JIS G3101 SS400 Mild Steel Plate",
    "ASTM A709 Grade 36",
    "ASTM A283 Grade C",
    "ASTM A285 Grade C",
    "ASTM A537 Class 2",
    "C45 Plate",
    "ASTM A387 Grade 5",
    "ASTM A387 Grade 9",
    "ASTM A387 Grade 11",
    "ASTM A387 Grade 12",
    "ASTM A387 Grade 22",
    "Hastelloy C276 Plate",
    "Hastelloy C22 Plate",
    "Hastelloy B2 Sheet",
    "Inconel 600 Plate",
    "Inconel 601 Plate",
    "Inconel 625 Plate",
    "Incoloy 800 Plate",
    "Incoloy 825 Plate",
    "Monel 400 Plate",
    "Monel K500 Plate",
    "Inconel 718 Plate",
    "2207 Duplex Stainless Steel Plate",
    "ASTM A240 UNS S31803",
    "UNS S32750 Plate",
    "Super Duplex Plate",
    "90/10 Copper Nickel Sheet",
    "70/10 Copper Nickel Sheet",
    "Copper Sheet",
    "Titanium Grade 2 Sheet",
    "Titanium Grade 5 Sheet",
    "Maraging Steel 300 Alloy Steel Plate",
    "Maraging Steel 350 Plate",
    "BS 1501 161 430A",
    "Brass Sheet",
    "Alloy 20 Plate",
    "254 SMO Plate",
    "High Strength Steel Plate",
    "Shipbuilding Steel Plate",
    "Boiler Steel Plates",
    "Manganese Plate",
    "Aluminium Sheet",
    "1S 2062 Grade 8 Plate",
    "P355nh steel plate",
    "P355gh steel plate",
    "P205gh plate",
    "P275nh steel plate",
    "S1100QL steel plate",
    "S960ql steel plate",
    "S890ql steel plate",
    "S890QL steel plate",
    "S355 steel plate",
    "S355J203 plate",
    "S275JR plate",
    "S235JR steel plate",
    "Heat resistant steel plate",
    "Weather resistant steel plate",
    "16m03 plate",
    "13CrMo4-5 steel plate",
    "10CrMo9-10 steel plate",
    "EN 10028-3 Grade P460NH steel plates",
    "DIN 17155 Steel Plate",
    "ASTM A387 grade 91 plate",
    "Stuctural steel plate",
    "Chromoly Steel Plate",
    "HIC Resistant Steel Plate",
    "Quenched and Tempered Steel Plate",
    "Alloy N-155",
    "Corten Steel Plate",
    "EN 10149-2 S550mc",
    "Abrasion Resistant Steel Plate",
    "SABS 1431 Grade 300wa Steel Plate",
    "Hot rolled coll",
    "BS-3059 Gr 360",
    "ASTM A179 Heat Exchanger Tubes",
    "ASTM A334 GR.1",
    "ASTM A182 Boiler Tubes",
    "SA 17B Gr A Boiler Tubes",
    "13CrMo44 Alloy Steel Boiler Tubes",
    "SA209 T1",
    "SA213 T2",
    "ASTM A213 T5",
    "ASTM A213 T9",
    "ASTM A213 T11",
    "SA 213 Gr 112",
    "ASTM A213 T22",
    "ASTM A213 T91",
    "ASTM A423 Grade 1",
    "Electropolished Stainless Steel Tubing",
    "Stainless Steel Capillary Tube",
    "Stainless Steel Heat Exchanger Tube",
    "Stainless Steel Boiler Tube",
    "Stainless Steel Coil Tubing",
    "Stainless Steel Condenser Tubes",
    "Stainless steel precision tube",
    "Stainless steel mechanical tubing",
    "Stainless steel instrumentation tubing",
    "Stainless steel hydraulic tubing",
    "High-temperature steel tubing",
    "Boiler superheater tubes",
    "EN 10216-5",
    "DIN EN 10296-2",
    "Inconel 600 Tube",
    "Inconel 625 Tube",
    "Inconel 718 Tube",
    "Hastelloy C276 Tube",
    "Money 400 Seamless Tube",
    "Duplex 2205 Tube",
    "Titanium Tube",
    "ASTM A513 Dom Tubing",
    "EN 10297-2 seamless tube",
    "ASTM A269 tubing",
    "Nickel Alloy Round Bars",
    "Inconel 600 round bar",
    "Inconel 625 round bar",
    "Inconel 718 round bar",
    "Incoloy 825 round bar",
    "Incoloy 800 round bar",
    "Hastelloy C276 round bar",
    "Hastelloy C22 round bar",
    "Hastelloy B2 round bar",
    "Monel 400 round bar",
    "Monel k500 round bar",
    "ASTM A105 Round Bar",
    "ASTM A350 LF2 Round Bar",
    "Alloy Steel Round Bar",
    "Stainless Steel 304 Round Bar",
    "Stainless Steel 304L Round Bar",
    "Stainless Steel 316 Round Bar",
    "316L Stainless Steel Round Bar",
    "Stainless Steel 310 Round Bar",
    "Stainless Steel 317l Round Bar",
    "Stainless Steel 321 Round Bar",
    "Stainless Steel 347 Round Bar",
    "Stainless Steel 904l Round Bar",
    "15-5 PH Stainless Steel Round Bar",
    "Copper Nickel Round Bar",
    "Copper Round Bar",
    "Duplex 2205 Round Bar",
    "Super Duplex Round Bar",
    "Titanium Round Bar",
    "Titanium Grade 2 Round Bar",
    "Titanium Grade 5 Round Bar",
    "Aluminium Round Bar",
    "Cobalt Alloy Rod",
    "Nitronic 60",
    "Pump Shaft Quality Stainless Steel",
    "Bar",
    "Alloy 20-round bar",
    "Threaded bar",
    "Square bar",
    "Hex bar",
    "Cold-drawn steel bar",
    "Stainless Steel Stranded Wire",      
  ];

  // Fetch product or material data based on the category name
  useEffect(() => {
    const selectedProduct = productsData.products.find((i: any) => i.param === name);
    const selectedMaterial = productsData.materials?.find((i: any) => i.param === name);

    if (selectedProduct) {
      setData(selectedProduct);
    } else if (selectedMaterial) {
      setData(selectedMaterial);
    }
  }, [name]); // Depend on the 'name' URL parameter to refetch data

  useEffect(() => {
    if (data && grade) {
      // Find the grade from the `gradeNames` array
      const matchedGrade = gradeNames.find((g) => g.toLowerCase().replace(/\s+/g, "-") === grade.toLowerCase().replace(/\s+/g, "-"));

      // Set the selected grade if found
      if (matchedGrade) {
        setSelectedGrade(matchedGrade);
      }
    }
  }, [data, grade]); // Depend on 'data' and 'grade' to refetch when they change

  return (
    <div>
      {/* Cover Image Section */}
      <div className="relative">
        <div>
          <img src={CoverImg} alt="Cover" className="w-full h-[60vh] object-cover" />
        </div>
        <div className="absolute bottom-12 left-6 text-white">
          <div className="text-3xl font-bold">
            {selectedGrade || "No Grade Selected"}
          </div>
          <div className="text-xl mt-2 font-semibold text-left">
            Quality products for various industries
          </div>
        </div>
      </div>

      {/* Intro Text Section */}
      <div className="px-8 mt-8">
        <p className="text-[20px]">
          Shripal Metals Limited, a leading name in the metal industry with over 50 years of experience, takes pride in producing top-quality metal products for diverse industrial needs. Known for our superior strength, corrosion resistance, and precision, our products are ideal for a wide range of applications, from construction to engineering projects. Every item is manufactured to the highest standards of durability and performance, undergoing rigorous quality checks to ensure reliability and longevity.
        </p>
      </div>

      {/* Product Description Section */}
      <div className="px-8 mt-8">
        <h3 className="text-[32px] font-semibold mb-4">{selectedGrade || "No Grade Selected"}</h3>
        <p className="text-[20px]">
          Experience the unmatched quality and innovation of Shripal Metals' {selectedGrade || "selected grade"}. Whether you need seamless, welded, or customized options, our extensive range is designed to meet your specific requirements.
        </p>
      </div>

      {/* Standard Section */}
      <div className="mt-8 px-8">
        <h3 className="text-[32px] font-semibold mb-4">Standard</h3>
        <p className="text-[20px]">
          National and International Standards and Codes such as ASTM/ AISI/ SS/ W.-Nr. / ASME / BS / BIS / ANST / DIN / AFNOR / GHOST / JIS are adhered to by us.
        </p>
      </div>

      <div className="mt-2 px-12 py-8 bg-white-100 rounded-lg shadow-lg">
        {/* <h2 className="text-3xl font-bold text-center mb-4">Request a Quote</h2>
        <p className="text-xl text-center mb-6">Fill in the form below and we'll get back to you soon!</p> */}

        {/* RequestQuoteForm component */}
        <RequestQuoteTesting 
          h1="Request a Quote"
          h2="Fill in the form below and we'll get back to you soon!"
          btnTxt="Submit"
        />
      </div>
     </div>
  );
};

export default ProductDetailsPage;
