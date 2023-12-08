import PropTypes from "prop-types";
const TestimonialCard = ({ name, role, message }) => {
  return (
    <div className="p-5 cursor-pointer rounded-xl min-w-[353px] w-max flex flex-col gap-2 max-h-[136px] bg-white shadow-[0px_1px_1px_0px_rgba(0, 0, 0, 0.04), 0px_4px_10px_0px_rgba(0, 0, 0, 0.04)]">
      <div className="flex gap-2">
        <p className=" font-medium text-[16px] leading-[19.2px] text-gray-900 ">
          {name}
        </p>
        <p className="text-[13px] leading-[15.6px] text-gray-400 ">{role}</p>
      </div>
      <div>
        <p className="text-[16px] leading-[19.2px] text-[#1D2129] line-clamp-3 max-h-[53px]">
          {message}
        </p>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  message: PropTypes.string,
};

export default TestimonialCard;
