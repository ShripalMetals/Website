import { useState } from "react";
import Alloys from "./Alloys";
import ProductsList from "./ProductsList";
import ContactFooter from "../../common/components/ContactFooter";
import Header from "../../assets/images/products/header.png"
import RequestQuoteTesting from "../../common/RequestQuoteTesting";

const Products = () => {
  const [tab, setTab] = useState("products");

  return (
    <div>
      <div className="text-center py-6 px-6 sm:px-12 md:px-[100px] lg:px-[300px] bg-gray-400 text-white"  
      style={{
        backgroundImage: `url(${Header})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
        <h3 className="mb-6 font-bold text-3xl sm:text-2xl md:text-3xl lg:text-4xl" style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)", WebkitTextStroke: "1px #000000" }}>
          Welcome to Our Product Offerings
        </h3>
        <p className="text-[16px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] mb-6" style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)", WebkitTextStroke: "1px #000000", fontWeight:"bold" }}>
          Explore our range of high-quality construction products and materials
          designed to meet your project needs.
        </p>
        <div className="mb-3">
          <button className="bg-black text-white font-semibold px-8 py-2 rounded hover:opacity-90">
            Browse Products
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="my-6">
        <nav className="flex justify-center gap-[20px] sm:gap-[40px] md:gap-[80px] space-x-6 font-semibold">
          <button
            onClick={() => setTab("products")}
            type="button"
            className={`py-2 px-5 inline-flex items-center gap-2 text-xl sm:text-lg md:text-2xl whitespace-nowrap hover:font-semibold hover:text-gray-900 ${tab === "products" ? "text-gray-900" : "text-gray-400"
              } ${tab === "products"
                ? "border-[#ce8359] border-b-[3px] mb-[-1px]"
                : "border-b-[2px] border-transparent"
              }`}
          >
            Products
          </button>
          <button
            onClick={() => setTab("alloys")}
            type="button"
            className={`py-2 px-5 inline-flex items-center gap-2 text-xl sm:text-lg md:text-2xl whitespace-nowrap hover:font-semibold hover:text-gray-900 ${tab === "alloys" ? "text-gray-900" : "text-gray-400"
              } ${tab === "alloys"
                ? "border-[#ce8359] border-b-[3px] mb-[-1px] "
                : "border-b-[2px] border-transparent"
              }`}
          >
            Alloys
          </button>
        </nav>
      </div>

      {/* Products and Alloys Content */}
      <div className="py-[25px] px-6 sm:px-8 md:px-12 lg:px-16">
        {tab === "products" && <ProductsList />}
        {tab === "alloys" && <Alloys />}
      </div>

      {/* Request Quote Form */}
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
      {/* <RequestQuoteForm
          h1={"Request a Quote"}
          h2={"To make an inquiry, please contact us using the form below and our technical team will respond promptly."}
          btnTxt={"Request a Quote"}
          googleFormUrl="https://forms.gle/jEiJdsdAWtMPc8Pa9" 
        /> */}

      {/* Form Section */}
      {/* <div className="py-[50px] px-6 sm:px-8 md:px-12 lg:px-[100px]">
        <h3 className="text-3xl font-bold text-center mb-6">Request a Quote</h3>
        <p className="text-center mb-10 text-lg sm:text-base md:text-lg">
          Fill in the form below to get a custom quote for your construction material needs.
        </p>
        <form className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">First Name</label>
            <input
              type="text"
              className="border-b-2 border-black py-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Last Name</label>
            <input
              type="text"
              className="border-b-2 border-black py-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Email</label>
            <input
              type="email"
              className="border-b-2 border-black py-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Phone Number</label>
            <input
              type="text"
              className="border-b-2 border-black py-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Business Name</label>
            <input
              type="text"
              className="border-b-2 border-black py-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Message</label>
            <textarea
              className="border-b-2 border-black py-2 outline-none h-[100px] resize-none"
            />
          </div>
          <div className="flex flex-col md:col-span-1">
            <label className="mb-2 font-semibold">Select Subject</label>
            <div className="flex flex-col space-y-4">
              <label className="inline-flex items-center">
                <input type="radio" name="subject" value="general" />
                <span className="ml-2">General Inquiry</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="subject" value="general2" />
                <span className="ml-2">General Inquiry 2</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="subject" value="general3" />
                <span className="ml-2">General Inquiry 3</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="subject" value="general4" />
                <span className="ml-2">General Inquiry 4</span>
              </label>
            </div>
          </div>
          <div className="col-span-full flex justify-center mt-8">
            <button
              type="submit"
              className="bg-black text-white font-semibold px-10 py-3 rounded hover:opacity-90"
            >
              Send Message
            </button>
          </div>
        </form>
      </div> */}

      {/* Customer Reviews */}
      <div className="pt-16 pb-10">
        <h3 className="text-[40px] sm:text-[32px] font-bold text-center mb-6">Customer Reviews</h3>
        <p className="text-center text-xl sm:text-lg mb-12">See what our customers have to say</p>
        <div className="flex flex-wrap justify-center gap-8 px-6 sm:px-12 md:px-[50px]">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full sm:w-[45%] md:w-[30%] min-h-[200px]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-gray-300 rounded-full h-10 w-10 mr-4"></div>
                <div>
                  <h4 className="font-bold">John</h4>
                </div>
              </div>
              <div className="text-yellow-500">★★★★★</div>
            </div>
            <p className="text-gray-600">High-quality products and excellent service</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full sm:w-[45%] md:w-[30%] min-h-[200px]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-gray-300 rounded-full h-10 w-10 mr-4"></div>
                <div>
                  <h4 className="font-bold">Sarah</h4>
                </div>
              </div>
              <div className="text-yellow-500">★★★★★</div>
            </div>
            <p className="text-gray-600">Impressed by the durability of the materials</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full sm:w-[45%] md:w-[30%] min-h-[200px]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-gray-300 rounded-full h-10 w-10 mr-4"></div>
                <div>
                  <h4 className="font-bold">David</h4>
                </div>
              </div>
              <div className="text-yellow-500">★★★★★</div>
            </div>
            <p className="text-gray-600">Fast delivery and great variety of products</p>
          </div>
        </div>
      </div>

      <div className="mb-20"></div>
      <ContactFooter />
    </div>
  );
};

export default Products;
