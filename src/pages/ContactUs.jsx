import { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
import Footer from "../Components/Footer";
import PhoneInputWrapper from "../Components/PhoneInputWrapper";
import logo from "/Images/logo-white.png";
import { Link } from "react-router-dom";
import { getSeoMeta } from "../utils/getSeoMeta";
import Seo from "../Seo";

export default function ContactUs() {
  const seo = getSeoMeta("https://books.1xl.com/contact-us");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
    message: "",
    phoneCode: "91",
  });

  const [errors, setErrors] = useState({});
  const [isFocused, setIsFocused] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const validate = () => {
    const newErrors = {};
    console.log("object");
    // Validate Name
    if (!formData.name) {
      newErrors.name = "Full Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Full Name should only contain letters and spaces.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Full Name must be at least 2 characters.";
    } else if (formData.name.trim().length > 50) {
      newErrors.name = "Full Name cannot exceed 50 characters.";
    } else if (/^\s+$/.test(formData.name)) {
      newErrors.name = "Full Name cannot be empty spaces.";
    }
    if (!formData.subject) {
      newErrors.subject = "Subject is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.subject)) {
      newErrors.name = "Subject should only contain letters and spaces.";
    } else if (formData.subject.trim().length > 50) {
      newErrors.subject = "Subject cannot exceed 80 characters.";
    } else if (/^\s+$/.test(formData.name)) {
      newErrors.subject = "Subject cannot be empty spaces.";
    }

    // Validate Email
    if (!formData.email) {
      newErrors.email = "Email ID is required.";
    } else if (
      !/^(?!\.)([a-zA-Z0-9]+[._%+-]?)*[a-zA-Z0-9]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?<!\.)$/.test(
        formData.email
      )
    ) {
      newErrors.email = "Email ID is invalid.";
    }

    // Validate Phone
    console.log(formData);
    if (!formData.mobile) {
      newErrors.phone = "Contact Number is required.";
    } else if (
      formData.phoneCode === "91" &&
      [0, 1, 2, 3, 4, 5].includes(Number(formData.mobile[0]))
    ) {
      newErrors.phone = "Contact Number is invalid.";
    } else if (phoneError) {
      newErrors.phone = phoneError;
    }

    // Validate Address
    if (!formData.address || /^\s+$/.test(formData.address)) {
      newErrors.address = "Address is required.";
    } else if (formData.address.trim().length > 100) {
      newErrors.address = "Address cannot exceed 100 characters.";
    }

    // Validate Message
    if (!formData.message || /^\s+$/.test(formData.message)) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length <= 10) {
      newErrors.message = "Message should be greater than 10 characters.";
    } else if (formData.message.trim().length > 500) {
      newErrors.message = "Message cannot exceed 500 characters.";
    }

    // Additional Validations (Optional)
    // Example: Add a validation for a terms and conditions checkbox
    // if (!formData.agreeToTerms) {
    //   newErrors.agreeToTerms = "You must agree to the terms and conditions";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Replace multiple spaces with a single space
    const cleanedValue = value.replace(/  +/g, " ");

    setFormData({
      ...formData,
      [id]: cleanedValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      // await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enquiry`, {
      await fetch(`https://marscms-api.mini91.com/api/enquiry`, {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          //   mobile: formData.phone,
          // mobile: formData.phoneCode + formData.phone,
          site: "67de9aba770d7aa5b35b4597",
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then(async (response) => {
          if (response?.ok) {
            setSuccess("Message Sent Successfully.");
            setTimeout(() => setSuccess(false), 5000);
            setFormData({
              name: "",
              email: "",
              phone: "",
              phoneCode: "91",
              address: "",
              subject: "",
              message: "",
            });
            setPhoneValues({
              number: "",
              countryCode: "91",
              tempCountryCode: "91",
              editNumber: !phoneValues.editNumber,
            });
          } else {
            let error = await response.json();
            setError(error?.error);
            setTimeout(() => setError(false), 5000);
          }
        })

        .catch((error) => {
          // Handle error
          console.error(error);
        });
    }
  };
  const [phoneValues, setPhoneValues] = useState({
    number: "",
    countryCode: "91",
    tempCountryCode: "91",
    editNumber: false,
  });

  return (
    <>
      {seo && <Seo {...seo} />}
      <nav className="bg-gray-800 p-4">
        <div className="flex items-center sm:justify-between justify-center">
          <div className="w-[233px] h-[41px] bg-gray-500 text-white flex items-center justify-center text-sm font-bold">
            <Link to="/">
              <img
                src={logo}
                className="w-42 h-auto mt-5"
                alt="Dreams To Reality Logo_Horizontal"
              />
            </Link>
          </div>
        </div>
      </nav>
      <section className="w-full p-5">
        <div className="w-full bg-black">
          <section className="container mx-auto md:w-[78%]">
            <div
              className="flex flex-col items-center md:flex-row gap-8 md:gap-12 p-3 sm:p-6 md:px-4 xl:px-8 bg-black shadow-even-lg"
              style={{ justifyContent: "space-between" }}
            >
              <div className="flex flex-col  w-full md:w-[55%] xl:w-[60%]">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold pt-10 sm:pt-0Reform Army Past CampaignsReform Army Past Campaigns  md:text-3xl lg:text-4xl text-blue-950">
                    Contact Us
                  </h1>
                </div>
                <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2 mb-3">
                      <label
                        className="text-lg text-gray-700 font-medium leading-none "
                        htmlFor="name"
                      >
                        Full Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        className="bg-black flex w-full py-2.5 p-2 border-2 border-white focus:border-blue-200 outline-none placeholder:text-muted-foreground focus-visible:outline-none  rounded-xl"
                        id="name"
                        // required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        title="Name is Required"
                        pattern=".*\S.*"
                        maxLength={50}
                        // onInvalid={(event) => {
                        //   event.preventDefault(); // Prevent default browser validation message
                        //   toast.error(
                        //     event?.target?.placeholder + " is required."
                        //   );
                        // }}
                      />
                      {errors.name && (
                        <p className="text-red-500">{errors.name}</p>
                      )}
                    </div>
                    <div className="space-y-2 mb-3">
                      <label
                        className="text-lg text-gray-700 font-medium leading-none"
                        htmlFor="email"
                      >
                        Email ID<span className="text-red-500">*</span>
                      </label>
                      <input
                        className="flex bg-black text-white w-full py-2.5 p-2 border-2 border-[#D0D5DD] focus:border-blue-200 outline-none placeholder:text-muted-foreground focus-visible:outline-none  focus:ring-0 focus:outline-none rounded-xl"
                        id="email"
                        // required
                        placeholder="Email ID"
                        type="email"
                        maxLength={80}
                        // pattern=".*\S.*"
                        // onInvalid={(event) => {
                        //   event.preventDefault(); // Prevent default browser validation message
                        //   toast.error(
                        //     event?.target?.placeholder + " is required."
                        //   );
                        // }}
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <p className="text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2 mb-3">
                      <label
                        className="text-lg text-gray-700 font-medium leading-none"
                        htmlFor="phone"
                      >
                        Contact Number<span className="text-red-500">*</span>
                      </label>
                      {/* <input
                        className="flex w-full py-2.5 p-2 border-2 border-[#D0D5DD] focus:border-blue-200 outline-none placeholder:text-muted-foreground focus-visible:outline-none file:bg-transparent rounded-xl"
                        id="phone"
                        placeholder="Contact Number"
                        value={formData.phone}
                        onChange={handleChange}
                      /> */}
                      <div
                        className={`relative mt-1 rounded-xl ${
                          isFocused ? "border-2 border-blue-200" : ""
                        }`}
                      >
                        <PhoneInputWrapper
                          phoneValues={phoneValues}
                          PreferredCountryCodes={["91", "971"]}
                          handlePhoneChange={(e) => {
                            console.log(e);
                            setPhoneValues(e);
                            formData.mobile = e.number;
                            formData.ccode = e.countryCode;
                          }}
                          error={phoneError}
                          defaultCountryCode="91"
                          setError={setPhoneError}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500">{errors.phone}</p>
                      )}
                    </div>
                    <div className="space-y-2 mb-3">
                      <label
                        className="text-lg text-gray-700 font-medium leading-none"
                        htmlFor="address"
                      >
                        Address<span className="text-red-500">*</span>
                      </label>
                      <input
                        className="bg-black text-white flex w-full py-2.5 p-2 border-2 border-[#D0D5DD] focus:border-blue-200 outline-none placeholder:text-muted-foreground focus-visible:outline-none file:bg-transparent rounded-xl"
                        // required
                        id="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        maxLength={100}
                      />
                      {errors.address && (
                        <p className="text-red-500">{errors.address}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2 mb-3">
                    <label
                      className="text-lg text-gray-700 font-medium leading-none"
                      htmlFor="subject"
                    >
                      Subject<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="flex bg-black text-white w-full py-2.5 p-2 border-2 border-[#D0D5DD] focus:border-blue-200 outline-none placeholder:text-muted-foreground focus-visible:outline-none  focus:ring-0 focus:outline-none rounded-xl"
                      id="subject"
                      // required
                      placeholder="Subject"
                      type="text"
                      maxLength={80}
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    {errors.subject && (
                      <p className="text-red-500">{errors.subject}</p>
                    )}
                  </div>
                  <div className="space-y-2 mb-3">
                    <label
                      className="text-lg text-gray-700 font-medium leading-none"
                      htmlFor="message"
                    >
                      Message<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      className="bg-black flex w-full py-2.5 p-2 border-2 border-[#D0D5DD] focus:border-blue-200 outline-none placeholder:text-muted-foreground focus-visible:outline-none file:bg-transparent focus:ring-0 focus:outline-none rounded-xl"
                      id="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      maxLength={410}
                    />
                    {errors.message && (
                      <p className="text-red-500">{errors.message}</p>
                    )}
                  </div>
                  <div className="pt-5">
                    <button className="relative inline-flex items-center justify-start px-4 py-3 overflow-hidden font-bold rounded-xl group bg-gradient-to-r from-blue-500 to-blue-700">
                      <span className="w-[190px] h-44 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[#1E3A8A] opacity-[3%]"></span>
                      <span className="absolute top-0 left-0 w-[181px] h-[225px] -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#1E3A8A] opacity-100 group-hover:-translate-x-8"></span>
                      <span className="relative w-full font-normal text-left text-sm sm:text-base whitespace-nowrap text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        {" "}
                        Send Message{" "}
                      </span>
                      <span className="absolute inset-0 rounded-xl"></span>
                    </button>
                  </div>
                  {success && <p className="text-green-500">{success}</p>}
                  {error && <p className="text-red-500">{error}</p>}
                </form>
              </div>
              <div className="border rounded-xl w-full flex flex-col justify-center h-fit md:w-[40%] xl:w-[35%] bg-gradient-to-b from-blue-500 via-blue-700 to-blue-950 text-white py-10 px-4 md:px-3 xl:px-6 2xl:px-8">
                <h4 className="text-left text-4xl font-bold text-white mb-7 tracking-wide">
                  Don&apos;t Hesitate To Contact Us
                </h4>

                <div className="flex flex-col sm:flex-row gap-4 mb-7">
                  <div className="w-[44px] h-[44px] rounded-full flex justify-center items-center bg-transparent ring-2 ring-light-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="28px"
                      viewBox="0 -960 960 960"
                      width="28px"
                      fill="white"
                    >
                      <path d="M795-120q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19 13-32t32-13h140q14 0 24 10t14 25l27 126q2 14-.5 25.5T359-634L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23-15t26-2l119 26q15 4 25 16t10 27v135q0 19-13 32t-32 13Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl text-white font-semibold tracking-wide">
                      Call Us
                    </span>
                    <span className="text-lg text-gray-300 font-medium tracking-wide">
                      <a
                        className=" hover:underline"
                        href="tel:+919525232523"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +91 95 2523 2523
                      </a>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-7">
                  <div className="w-[44px] h-[44px] rounded-full flex justify-center items-center bg-transparent ring-2 ring-light-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="38px"
                      viewBox="0 -960 960 960"
                      width="28px"
                      fill="white"
                    >
                      <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302 340-223v-55L480-522 140-740v55l340 223Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl text-white font-semibold tracking-wide">
                      Email ID
                    </span>
                    <span className="text-lg text-gray-300 font-medium tracking-wide">
                      <a
                        className=" hover:underline"
                        href="mailto:Books@1xl.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Books@1xl.com
                      </a>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-7">
                  <div className="min-w-[44px] min-h-[44px] max-w-[44px] max-h-[44px] rounded-full flex justify-center items-center bg-transparent ring-2 ring-light-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="28px"
                      viewBox="0 -960 960 960"
                      width="28px"
                      fill="white"
                    >
                      <path d="M480.09-490q28.91 0 49.41-20.59 20.5-20.59 20.5-49.5t-20.59-49.41q-20.59-20.5-49.5-20.5t-49.41 20.59q-20.5 20.59-20.5 49.5t20.59 49.41q20.59 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl text-white font-semibold tracking-wide">
                      Office Address
                    </span>
                    <span className="text-lg text-gray-300 font-medium tracking-wide">
                      <a
                        className=" hover:underline"
                        href="https://maps.app.goo.gl/FjPzuQdEFipKoLSL8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        3, Jainam Tower, 3, Sai Park, Belthika Nagar, Thergaon
                        (Chinchwad), Pune - 411033, Maharashtra, India.
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}
