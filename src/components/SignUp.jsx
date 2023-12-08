const SignUp = () => {
  return (
    <div className="max-w-[365px] h-max py-16 md:max-h-[347px] flex flex-col gap-8 align-middle items-center justify-between rounded-lg mx-auto my-auto">
      <h3 className="text-[39px] leading-[46.8px] text-gray-300">
        Sign up for exclusive access.
      </h3>
      <div className="flex flex-col gap-6 w-full">
        <input
          type="email"
          name="email"
          id="email"
          className="block mx-[15px] rounded-lg border-[1px] py-5 px-6"
          placeholder="Your email address"
        />
        <button
          type="text"
          name="price"
          id="price"
          className="block mx-[15px] rounded-lg border-[1px] border-1 py-5 px-6 bg-gray-900 text-white"
          placeholder="0.00"
        >
          Get started
        </button>
        <p className="text-[16px] text-gray-900 text-center">
          You’ll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
