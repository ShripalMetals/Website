import RequestQuoteForm from "../../common/RequestQuoteForm";
import ContactFooter from "../../common/components/ContactFooter";
import RequestQuoteTesting from "../../common/RequestQuoteTesting";

const ContactUs = () => {
  return (
    <div className="pt-6">
      <div className="flex flex-col lg:flex-row px-[20px] lg:px-[100px] justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-black text-[32px] sm:text-[40px] font-bold mb-4">Contact Us</h1>
          <h2 className="text-[16px] sm:text-[18px] mb-8">Get in touch with us</h2>
          <div className="py-8 pl-4 flex flex-col gap-[40px] sm:gap-[50px]">
            <div className="flex gap-6 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#BE5B23"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
              <p>
            <a href="mailto:hm@shripalmetals.com?subject=Inquiry">
              hm@shripalmetals.com
            </a>
          </p>
          <p>
            <a href="mailto:sales@shripalmetals.com?subject=Inquiry">
              sales@shripalmetals.com
            </a>
          </p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#BE5B23"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              <div>
                <p>+91-9820457323</p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#BE5B23"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
              </div>
              <div>
                <p>SHRIPAL METAL LTD.</p>
                <p>Cawasji Patel Tank Rd, Marine Lines East, Gulal Wadi,</p>
                <p>Bhuleshwar, Mumbai, Maharashtra 400004</p>
              </div>
            </div>
          </div>
        </div>

        {/* Replaced Image with Google Map Embed */}
        <div className="py-4">
          <iframe
            title="Shripal Metals Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.440826201952!2d72.82538137520237!3d18.956129282223948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce113fffffff%3A0x34116120f9d9d74c!2sShripal%20Metal%20Limited!5e0!3m2!1sen!2sin!4v1735366057695!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>


      <div className="mt-2 px-12 py-8 bg-white-100 rounded-lg shadow-lg">
        {/* <h2 className="text-3xl font-bold text-center mb-4">Request a Quote</h2>
        <p className="text-xl text-center mb-6">Fill in the form below and we'll get back to you soon!</p> */}

        {/* RequestQuoteForm component */}
        <RequestQuoteTesting 
          h1="Make an Enquiry now!"
          h2="To make an inquiry, please contact us using the form below, and our technical team will respond promptly."
          btnTxt="Submit"
        />
      </div>

      {/* <div className="px-[20px] lg:px-[100px] mb-5">
        <RequestQuoteForm
          h1={"Make an Enquiry now!"}
          h2={
            "To make an inquiry, please contact us using the form below, and our technical team will respond promptly."
          }
          btnTxt={"Send Message"}
          googleFormUrl="https://forms.gle/jEiJdsdAWtMPc8Pa9"
        />
      </div> */}

      <ContactFooter />
    </div>
  );
};

export default ContactUs;
