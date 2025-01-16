import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const FormInitValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  businessName: "",
  message: "",
  subject: "",
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

const RequestQuoteForm: React.FC<any> = ({ h1, h2, btnTxt }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const SubmitForm = (values: any, actions: any) => {
    setIsSubmitting(true);

    // EmailJS integration
    emailjs
      .send(
        "service_4mbf5qo", // Replace with your EmailJS service ID
        "template_9tnsvmf", // Replace with your EmailJS template ID
        {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          businessName: values.businessName,
          message: values.message,
          subject: values.subject,
        },
        "eVD3eDFTNd1FD2scH" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmissionStatus("success");
          actions.resetForm();
        },
        (err) => {
          console.error("FAILED...", err);
          setSubmissionStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <div className="mt-[75px] text-center flex flex-col items-center">
        <h3 className="text-[32px] font-semibold mb-4">{h1}</h3>
        <p className="text-[20px] max-w-[600px]">{h2}</p>
      </div>
      <div className="mt-12">
        <Formik
          initialValues={FormInitValues}
          validationSchema={FormSchema}
          onSubmit={SubmitForm}
        >
          {({
            handleSubmit,
            values,
            handleChange,
            errors,
            touched,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex">
                <div className="w-[70%]">
                  <div className="flex gap-[8%] mb-8">
                    <div className="w-[46%]">
                      <div className="mb-4">
                        <label className="text-[18px] font-semibold">
                          First Name
                        </label>
                      </div>
                      <div>
                        <input
                          value={values.firstName}
                          id="firstName"
                          onChange={handleChange}
                          maxLength={30}
                          className="border-b-2 border-black w-full py-1 px-2 text-[18px] focus:outline-none focus:ring-0"
                        />
                      </div>
                      {errors.firstName && touched.firstName && (
                        <div className="text-red-500 text-[14px] font-semibold absolute">
                          {errors.firstName}
                        </div>
                      )}
                    </div>
                    <div className="w-[46%]">
                      <div className="mb-4">
                        <label className="text-[18px] font-semibold">
                          Last Name
                        </label>
                      </div>
                      <div>
                        <input
                          value={values.lastName}
                          id="lastName"
                          onChange={handleChange}
                          maxLength={30}
                          className="border-b-2 border-black w-full py-1 px-2 text-[18px] focus:outline-none focus:ring-0"
                        />
                      </div>
                      {errors.lastName && touched.lastName && (
                        <div className="text-red-500 text-[14px] font-semibold absolute">
                          {errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-[8%] mb-8">
                    <div className="w-[46%]">
                      <div className="mb-4">
                        <label className="text-[18px] font-semibold">
                          Email
                        </label>
                      </div>
                      <div>
                        <input
                          value={values.email}
                          id="email"
                          onChange={handleChange}
                          maxLength={30}
                          className="border-b-2 border-black w-full py-1 px-2 text-[18px] focus:outline-none focus:ring-0"
                        />
                      </div>
                      {errors.email && touched.email && (
                        <div className="text-red-500 text-[14px] font-semibold absolute">
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div className="w-[46%]">
                      <div className="mb-4">
                        <label className="text-[18px] font-semibold">
                          Phone Number
                        </label>
                      </div>
                      <div>
                        <input
                          value={values.phone}
                          id="phone"
                          onKeyPress={(event) => {
                            if (/[^0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          onChange={handleChange}
                          maxLength={10}
                          className="border-b-2 border-black w-full py-1 px-2 text-[18px] focus:outline-none focus:ring-0"
                        />
                      </div>
                      {errors.phone && touched.phone && (
                        <div className="text-red-500 text-[14px] font-semibold absolute">
                          {errors.phone}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mb-8">
                    <div className="w-[46%]">
                      <div className="mb-4">
                        <label className="text-[18px] font-semibold">
                          Business Name
                        </label>
                      </div>
                      <div>
                        <input
                          value={values.businessName}
                          id="businessName"
                          onChange={handleChange}
                          maxLength={30}
                          className="border-b-2 border-black w-full py-1 px-2 text-[18px] focus:outline-none focus:ring-0"
                        />
                      </div>
                      {errors.businessName && touched.businessName && (
                        <div className="text-red-500 text-[14px] font-semibold absolute">
                          {errors.businessName}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mb-8">
                    <div className="w-full">
                      <div className="mb-4">
                        <label className="text-[18px] font-semibold">
                          Request for Quotation
                        </label>
                      </div>
                      <div>
                        <textarea
                          value={values.message}
                          id="message"
                          onChange={handleChange}
                          rows={4}
                          className="border-b-2 border-black w-full py-1 px-2 text-[18px] focus:outline-none focus:ring-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[30%] pl-10 flex flex-col justify-between">
                  <div>
                    <div className="mb-6">
                      <label className="font-semibold text-[18px]">
                        Select a Subject
                      </label>
                    </div>
                    <div className="flex mb-9 gap-2 text-[18px] items-center">
                      <div>
                        <input
                          type="radio"
                          id="subject"
                          value="Budgetary-Requirement"
                          onChange={handleChange}
                          checked={values.subject === "Budgetary-Requirement"}
                        />{" "}
                      </div>
                      <div>
                        <label htmlFor="Budgetary-Requirement">Budgetary Requirement</label>
                      </div>
                    </div>
                    <div className="flex mb-9 gap-2 text-[18px] items-center">
                      <div>
                        <input
                          type="radio"
                          id="subject"
                          value="Firm-Requirement"
                          onChange={handleChange}
                          checked={values.subject === "Firm-Requirement"}
                        />{" "}
                      </div>
                      <div>
                        <label htmlFor="Firm-Requirement">Firm Requirement</label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="text-white text-[18px] font-semibold bg-black hover:opacity-90 px-4 pt-[10px] pb-[14px] rounded-lg text-center w-full"
                    >
                      {isSubmitting ? "Submitting..." : btnTxt}
                    </button>
                  </div>
                </div>
              </div>
              {submissionStatus === "success" && (
                <p className="text-green-500 text-[14px] text-center">
                  Your request has been submitted successfully!
                </p>
              )}
              {submissionStatus === "error" && (
                <p className="text-red-500 text-[14px] text-center">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RequestQuoteForm;