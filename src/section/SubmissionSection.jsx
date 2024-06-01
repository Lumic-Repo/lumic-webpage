import { useState } from "react";
import InputFieldComponent from "../components/InputFieldComponent";
import TextAreaComponent from "../components/TextAreaComponent";
import ButtonComponent from "../components/ButtonComponent";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ScaleLoader } from "react-spinners";

const MySwal = withReactContent(Swal);

const SubmissionSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltips, setShowTooltips] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const isFormValid =
    formData.fullname && formData.email && formData.company && formData.message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setShowTooltips(true);
    } else {
      setIsLoading(true);
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          MySwal.fire({
            icon: "success",
            title: "Sukses",
            text: "Email berhasil dikirim",
          });
          setFormData({
            fullname: "",
            email: "",
            phone: "",
            company: "",
            message: "",
          });
          window.scrollTo(0, 0);
        } else {
          MySwal.fire({
            icon: "error",
            title: "Gagal",
            text: "Gagal mengirim email",
          });
        }
      } catch (error) {
        MySwal.fire({
          icon: "error",
          title: "Gagal",
          text: "Gagal mengirim email",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-md bg-gradient-to-r from-secondary-light to-secondary-dark p-5">
      <div className="text-2xl md:text-3xl font-semibold mb-3 max-w-screen-md text-center text-white">
        Contact Us
      </div>
      <div className="text-sm md:text-lg font-normal text-white mb-3">
        Please fill in the form below, and we will be in touch as soon as
        possible
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-4 rounded-md shadow-md mt-5"
      >
        <InputFieldComponent
          id="fullname"
          label="Full Name"
          name="fullname"
          placeholder="Insert your name"
          value={formData.fullname}
          onChange={handleChange}
          required
          showTooltip={showTooltips}
        />
        <InputFieldComponent
          id="email"
          label="Email Address"
          name="email"
          type="email"
          placeholder="name@mail.com"
          value={formData.email}
          onChange={handleChange}
          required
          showTooltip={showTooltips}
        />
        <InputFieldComponent
          id="phone"
          label="Phone Number"
          name="phone"
          type="number"
          placeholder="08xxx"
          value={formData.phone}
          onChange={handleChange}
          showTooltip={showTooltips}
        />
        <InputFieldComponent
          id="company"
          label="Company Name"
          name="company"
          placeholder="Your company name"
          value={formData.company}
          onChange={handleChange}
          required
          showTooltip={showTooltips}
        />
        <TextAreaComponent
          id="message"
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div className="flex justify-center mt-4">
          <ButtonComponent
            type="submit"
            className={`bg-gradient-to-r from-secondary-light to-secondary-dark mt-4 text-white ${
              !isFormValid && "opacity-50 cursor-not-allowed"
            }`}
            onClick={handleSubmit}
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? <ScaleLoader color="#FFFFFF" size={24} /> : "Submit"}
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default SubmissionSection;
