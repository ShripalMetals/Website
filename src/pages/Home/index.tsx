import ContactFooter from "../../common/components/ContactFooter";
import StaticVideo from "../../common/components/StaticVideo";
import AboutUs from "./AboutUs";
import ClientTestimonials from "./ClientTestimonials";
import Industries from "./Industries";
import OurProducts from "./OurProducts";
import OurServices from "./OurServices";
import RenownedDistributorship from "./RenowedDistributorship";

const Home = () => {
  return (
    <>
      <StaticVideo />
      <AboutUs />
      <OurServices />
      <OurProducts />
      <RenownedDistributorship />
      <Industries />
      <ClientTestimonials />
      <ContactFooter />
    </>
  );
};

export default Home;
