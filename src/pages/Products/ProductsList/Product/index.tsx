import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { productsData } from "../../productsData";
import CoverImg from "../../../../assets/images/products/pipes-banner.png";
import RequestQuoteTesting from "../../../../common/RequestQuoteTesting";

const ProductDetailsPage = () => {
  const params = useParams();
  const [data, setData] = useState<any>();
  const [isProductCategory, setIsProductCategory] = useState<boolean>(false);
  const [selectedGrade, setSelectedGrade] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // Define lists for Product categories and Material categories
  const productCategories = [
    "Pipes", "Pipe Fittings", "Fasteners", "Flanges", "Sheets/Plates", 
    "Tubes", "Round Bars", "Wire"
  ];
  
  const materialCategories = [
    "Stainless Steel", "Duplex Steel", "Super Duplex", "Nickel", 
    "Inconel", "Monel", "Hastelloy", "Titanium", "Copper/Brass", 
    "Copper Nickel", "Aluminium", "Carbon Steel", "Alloy Steel"
  ];

  // These are the categories that should NOT display the "Types" section
  const hideTypesForCategories = [
    "Sheets/Plates", "Tubes", "Round Bars", "Wire",     
    "Stainless Steel", "Duplex Steel", "Super Duplex", "Nickel", 
    "Inconel", "Monel", "Hastelloy", "Titanium", "Copper/Brass", 
    "Copper Nickel", "Aluminium", "Carbon Steel", "Alloy Steel"
  ];

  useEffect(() => {
    // Find the selected category based on the param from the URL
    const selectedProduct = productsData.products.find((i: any) => i.param === params.name);
    const selectedMaterial = productsData.materials.find((i: any) => i.param === params.name);

    if (selectedProduct) {
      setData(selectedProduct);
      setIsProductCategory(true); // It's a product category
    } else if (selectedMaterial) {
      setData(selectedMaterial);
      setIsProductCategory(false); // It's a material category
    }
  }, [params.name]);

  return (
    <div>
      {/* Cover Image Section */}
      <div className="relative">
        <div>
          <img src={CoverImg} alt="" className="w-full h-[60vh] object-cover" />
        </div>
        <div className="absolute bottom-12 left-6 text-white">
          <div className="text-3xl font-bold">{data?.name}</div>
          <div className="text-xl mt-2 font-semibold text-left">
            Quality products for various industries
          </div>
        </div>
      </div>

      {/* Navigation for Products or Materials */}
      <div className="my-6">
        <nav className="flex flex-wrap px-8 gap-6 font-semibold">
          {/* Conditionally render product or material tabs */}
          {isProductCategory ? (
            // Show product categories (Pipes, Fittings, etc.)
            productsData.products.map((i: any) => (
              <Link
                to={`/products/${i.param}`}
                key={i.id}
                className={`py-2 px-5 inline-flex items-center gap-2 text-2xl whitespace-nowrap hover:font-semibold hover:text-gray-900 ${
                  params.name === i.param ? "text-gray-900" : "text-gray-400"
                } ${
                  params.name === i.param
                    ? "border-[#ce8359] border-b-[3px] mb-[-1px]"
                    : "border-b-[2px] border-transparent"
                }`}
              >
                {i.name}
              </Link>
            ))
          ) : (
            // Show material categories (Stainless Steel, Nickel, etc.)
            productsData.materials.map((material: any) => (
              <Link
                to={`/products/${material.param}`}
                key={material.id}
                className={`py-2 px-5 inline-flex items-center gap-2 text-2xl whitespace-nowrap hover:font-semibold hover:text-gray-900 ${
                  params.name === material.param ? "text-gray-900" : "text-gray-400"
                } ${
                  params.name === material.param
                    ? "border-[#ce8359] border-b-[3px] mb-[-1px]"
                    : "border-b-[2px] border-transparent"
                }`}
              >
                {material.name}
              </Link>
            ))
          )}
        </nav>
      </div>

      {/* Product/Material Details Section */}
      <div className="px-8">
        <div>
          <h3 className="text-[32px] font-semibold mb-4">{data?.name}</h3>
          <p className="text-[20px]">{data?.description}</p>
        </div>

        {/* Conditionally render Types section */}
        {!hideTypesForCategories.includes(data?.name) && (
          <div className="mt-8">
            <h3 className="text-[32px] font-semibold mb-4">Types</h3>
            <div className="flex flex-wrap gap-[5%] mt-8">
              {data?.types?.map((i: any) => (
                <div key={i.id} className="mb-10 w-full sm:w-[48%] md:w-[30%] flex flex-col items-center">
                  <img src={i.image} alt="" className="rounded-md" />
                  <p className="text-center font-semibold mt-4 text-[20px]">{i.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Grades Section */}
        <div className="mt-8">
          <h3 className="text-[32px] font-semibold mb-4">Grades</h3>
          <div className="flex flex-wrap justify-evenly gap-6 mt-8">
            {data?.grades?.map((i: any) => (
              <div
                key={i.id}
                className="w-full sm:w-[48%] md:w-[30%] mb-6 relative cursor-pointer"
                onClick={() => {
                  setSelectedGrade(i.id);
                  setIsDropdownOpen((prevState) => !prevState); // Toggle dropdown
                }}
              >
                <div
                  className={`flex pb-5 pt-[22px] rounded-lg text-white px-6 w-full justify-between items-center gap-5 cursor-pointer hover:bg-[#324664] ${
                    i.id === selectedGrade ? "bg-[#324664]" : "bg-[#9d9d9d]"
                  }`}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                      />
                    </svg>
                  </div>
                  <div className="text-[20px]">{i.name}</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>
                {isDropdownOpen && i.id === selectedGrade && (
                  <div className="bg-[#324664] mt-[-8px] border-t-2 pt-[16px] pb-[8px] rounded-b-lg text-center text-white text-[20px]">
                    {i.grades.map((grade: any, idx: any) => (
                      <Link 
                        key={idx} 
                        to={`/products/${params.name}/${i.id}/${grade}`} // Example: /products/pipe-fittings/grade-1
                        className="mb-4 block"
                      >
                        {grade}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Standard Section */}
        <div className="mt-8">
          <h3 className="text-[32px] font-semibold mb-4">Standard</h3>
          <p className="text-[20px]">
            National and International Standards and Codes such as ASTM/ AISI/
            SS/ W.-Nr. / ASME / BS / BIS / ANST / DIN / AFNOR / GHOST / JIS are
            adhered by us.
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
    </div>
  );
};

export default ProductDetailsPage;
