import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

// Define the type for Form values
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  message: string;
  subject: string;
}

// Initial values for the form
const FormInitValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  businessName: "",
  message: "",
  subject: "general-enquiry",
};

// Validation Schema using Yup
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

interface RequestQuoteFormProps {
  h1: string;
  h2: string;
  btnTxt: string;
  googleFormUrl: string; // Google Form URL passed as prop
}

const RequestQuoteForm: React.FC<RequestQuoteFormProps> = ({
  h1,
  h2,
  btnTxt,
  googleFormUrl,
}) => {
  // Function to handle the redirection to the Google Form
  const handleRedirect = () => {
    window.open(googleFormUrl, "_blank"); // Open Google Form URL in a new tab
  };

  return (
    <>
      {/* Title and Subheading */}
      <div className="mt-[75px] text-center flex flex-col items-center">
        <h3 className="text-[32px] font-semibold mb-4">{h1}</h3>
        <p className="text-[20px] max-w-[600px]">{h2}</p>
      </div>

      {/* Form Section */}
      <div className="mt-12">
        <Formik
          initialValues={FormInitValues}
          validationSchema={FormSchema}
          onSubmit={(values) => {
            console.log("Form values:", values); // You can log form values or send them elsewhere if needed
            handleRedirect(); // Redirect when form is submitted (or even if it isn't)
          }}
        >
          {({
            handleSubmit,
            values,
            handleChange,
            errors,
            touched,
          }) => (
            <Form onSubmit={handleSubmit}>
              {/* Add form fields here */}
              {/* ... */}

              {/* Request a Quote Button */}
              <div className="mb-8 flex justify-center">
                <button
                  type="button" // Prevent the default form submission here
                  onClick={handleRedirect} // Directly call the redirection function
                  className="text-white text-[18px] font-semibold bg-black hover:opacity-90 px-6 py-3 rounded-lg text-center"
                >
                  {btnTxt}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RequestQuoteForm;
