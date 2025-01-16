import { Link } from "react-router-dom";
import Linkedin from "../../assets/images/icons/linkedinnew.svg";
import Youtube from "../../assets/images/icons/youtube.svg";
import Instagram from "../../assets/images/icons/instagram.svg";
import Twitter from "../../assets/images/icons/twitter.svg";
import WhatsApp from "../../assets/images/icons/whatsapp.svg";

const ContactFooter = () => {
  return (
    <div className="bg-gray-100 text-gray-500 py-[40px] flex justify-evenly gap-4 mt-[10vh]">
      <div>
        <h3 className="text-[18px] font-bold text-gray-600 mb-5">
          Working Hours
        </h3>
        <p>Mon - Sat:</p>
        <p>
          <b>9:30 AM - 7:00 PM</b>
        </p>
        <br />
        <p>
          Sunday: <b>closed</b>
        </p>
      </div>
      <div>
        <h3 className="text-[18px] font-bold text-gray-600 mb-5">Office</h3>
        <p>SHRIPAL METAL LTD.</p>
        <p>Cawasji Patel Tank Rd,</p>
        <p>Marine Lines East, Gulal Wadi,</p>
        <p>Bhuleshwar, Mumbai,</p>
        <p>Maharashtra 400004</p>
        <a
          href="https://www.google.com/maps?q=SHRIPAL METAL LTD., Cawasji Patel Tank Rd, Marine Lines East, Gulal Wadi, Bhuleshwar, Mumbai, Maharashtra 400004"
          target="_blank"
          rel="noopener noreferrer"
        >
          Locate in Map
        </a>
      </div>
      <div>
        <h3 className="text-[18px] font-bold text-gray-600 mb-5">Links</h3>
        <Link to="/home">
          <p className="mb-[10px]">Home</p>
        </Link>
        <Link to="/services">
          <p className="mb-[10px]">Services</p>
        </Link>
        <Link to="/products">
          <p className="mb-[10px]">Products</p>
        </Link>
        <Link to="/projects">
          <p className="mb-[10px]">Projects</p>
        </Link>
        <Link to="/about-us">
          <p>About Us</p>
        </Link>
      </div>
      <div>
        <h3 className="text-[18px] font-bold text-gray-600 mb-5">
          Get in touch
        </h3>
        <div>
          <p>Tel: +91-22-22428537</p>
          <p>Fax: +91-22-22428765</p>
        </div>
        <div className="mt-3">
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
        <div className="ml-[-24px] mt-3 flex gap-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/shripal-metal-ltd/?originalSubdomain=in"
          >
            <img alt="LinkedIn Icon" src={Linkedin} className="w-13 h-12 ml-4" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/@ShripalMetal"
          >
            <img alt="Youtube Icon" src={Youtube} className="w-10 h-12" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/+919820457323"  // Replace with your WhatsApp number
          >
            <img alt="WhatsApp Icon" src={WhatsApp} className="w-12 h-12" />
          </a>
          {/* Uncomment and add Instagram/Twitter if you need */}
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com"
          >
            <img alt="Instagram Icon" src={Instagram} className="w-10 h-12" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.twitter.com"
          >
            <img alt="Twitter Icon" src={Twitter} className="w-10 h-12" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
