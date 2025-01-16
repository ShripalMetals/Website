import { useEffect, useState } from "react";
import { productsData } from "../productsData";
// import { materialsData } from "../materialsData";
import { useParams } from "react-router";
import CoverImg from "../../../../assets/images/worker-cover-img.jpg";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import RequestQuoteForm from "../../../common/RequestQuoteForm";

const FormInitValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  businessName: "",
  message: "",
  subject: "general-enquiry",
};

const FormSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  businessName: Yup.string().required("Business Name is required"),
  phone: Yup.string().required("Phone Number is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
}).required();

const ProductDetailsPage = () => {
  const params = useParams();
  const [data, setData] = useState<any>();
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null); // Allow null for no selection
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Manage dropdown visibility

  const SubmitForm = (values: any) => {
    console.log(values);
  };

  useEffect(() => {
    setData(
      productsData.materials.filter((i: any) => i.param === params.name)[0]
    );
  }, [params.name]);

  // Close dropdown when clicking outside
  const handleOutsideClick = (event: MouseEvent) => {
    if (event.target instanceof HTMLElement) {
      if (!event.target.closest(".grade-dropdown")) {
        setIsDropdownOpen(false); // Close dropdown when clicking outside
      }
    }
  };

  // Add event listener to close dropdown when clicking outside
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div>
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
      <div className="my-6">
        <nav className="flex flex-wrap px-8 gap-6 font-semibold">
          {productsData.materials.map((i: any) => (
            <Link
              to={`/materials/${i.param}`}
              type="button"
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
          ))}
        </nav>
      </div>
      <div className="px-8">
        <div>
          <h3 className="text-[32px] font-semibold mb-4">{data?.name}</h3>
          <p className="text-[20px]">{data?.description}</p>
        </div>
        <div className="mt-8">
          <h3 className="text-[32px] font-semibold mb-4">Types</h3>
          <div className="flex flex-wrap gap-[5%] mt-8">
            {data?.types.map((i: any) => (
              <div className="mb-10 w-full sm:w-[48%] md:w-[30%] flex flex-col items-center">
                <img src={i.image} alt="" className="rounded-md" />
                <p className="text-center font-semibold mt-4 text-[20px]">
                  {i.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-[32px] font-semibold mb-4">Grades</h3>
          <div className="flex flex-wrap justify-evenly gap-6 mt-8">
            {data?.grades.map((i: any) => (
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
                      <div key={idx} className="mb-4">{grade}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-[32px] font-semibold mb-4">Standard</h3>
          <p className="text-[20px]">
            National and International Standards and Codes such as ASTM/ AISI/
            SS/ W.-Nr. / ASME / BS / BIS / ANST / DIN / AFNOR / GHOST / JIS are
            adhered by us.
          </p>
        </div>
        <RequestQuoteForm
          h1={"Request a Quote"}
          h2={"To make an inquiry, please contact us using the form below and our technical team will respond promptly.."}
          btnTxt={"Request a Quote"}
          googleFormUrl="https://forms.gle/jEiJdsdAWtMPc8Pa9"
        />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
