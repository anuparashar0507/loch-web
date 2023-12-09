import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail(email)) {
      window.location.href = "https://app.loch.one/welcome";
    } else {
      alert("Please enter a valid email.");
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="max-w-[365px] h-max py-16 px-16 md:px-2 md:max-h-[347px] flex flex-col gap-8 align-middle items-center justify-between rounded-lg mx-auto my-auto">
      <h3 className="md:text-[39px] text-[28px] text-center md:text-left leading-[34px] md:leading-[46.8px] text-gray-300">
        Sign up for exclusive access.
      </h3>
      <form
        className="flex flex-col md:gap-6 gap-4 w-full"
        onSubmit={handleFormSubmit}
      >
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="block md:mx-[15px] mx-1 rounded-lg border-[1px] md:py-5 md:px-6 py-3 px-4"
          placeholder="Your email address"
        />
        <button
          type="submit"
          className="block mx-[15px] rounded-lg border-[1px] border-1 md:py-5 md:px-6 py-3 px-4 bg-gray-900 text-white"
        >
          Get started
        </button>
        <p className="text-[16px] text-gray-900 text-center">
          You’ll receive an email with an invite link to join.
        </p>
      </form>
    </div>
  );
};

export default SignUp;
