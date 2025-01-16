import Certificate from "../../assets/images/certficate.jpg";
import CertificateCover from "../../assets/images/certificates-banner.png"

const Certifications = () => {
  return (
    <div>
        {/* Cover Image Section */}
        <div className="relative">
          <img className="w-full h-[70vh] object-cover" alt="" src={CertificateCover} />
           <div className="absolute bottom-12 left-8" style={{ marginBottom: "100px" }}>
                <h3 className="text-2xl font-bold" style={{color:"white"}}>Certifications</h3>
                  <p className="w-[42%] mt-6 mb-12" style={{color:"white"}}>
                  Shripal Metals Private Limited proudly holds a prestigious
                  certificate in recognition of our high quality and standards.
                  </p>
            </div>
          </div>
      {/* <div className="bg-gray-100 relative h-[300px]">
        <div className="absolute bottom-8 left-8">
          <h3 className="text-2xl font-bold">Certifications</h3>
          <p className="w-[42%] mt-6">
            {" "}
            Shripal Metals Private Limited proudly holds a prestigious
            certificate in recognition of our high quality and standards.
          </p>
        </div>
      </div> */}
      <div className="flex justify-center p-12">
        <img style={{height:"650px"}}className="" alt="" src={Certificate} />
      </div>
      <div className="text-center mb-12">
        <p className="text-[24px]">ISO 9001: 2015 Certified</p>
      </div>
    </div>
  );
};

export default Certifications;
