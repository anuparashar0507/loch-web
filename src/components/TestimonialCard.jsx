import { useRef } from "react";
import PropTypes from "prop-types";

const TestimonialCard = ({
  name,
  role,
  message,
  isVisible,
  onClick,
  onDragStart,
  onDragEnd,
  onDrag,
  width,
}) => {
  const cardRef = useRef(null);

  const handleDragStart = (e) => {
    e.preventDefault();
    onDragStart();
    e.dataTransfer.setData("text/plain", "");
  };

  const handleDragEnd = () => {
    onDragEnd();
  };

  const handleDrag = (e) => {
    e.preventDefault();
    onDrag(e);
  };

  const handleMouseLeave = () => {
    onDragEnd();
  };

  const cardStyle = {
    width: isVisible ? width : width,
    "min-width": isVisible ? width : width,
    opacity: isVisible ? "1" : "0.75",
    transition: "width 0.5s, opacity 0.5s",
    cursor: "grab",
  };

  return (
    <div
      ref={cardRef}
      className="p-5 rounded-xl min-w-[353px] flex flex-col gap-2 max-h-[136px] bg-white shadow-[0px_1px_1px_0px_rgba(0, 0, 0, 0.04), 0px_4px_10px_0px_rgba(0, 0, 0, 0.04)]"
      style={cardStyle}
      onClick={onClick}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDrag={handleDrag}
      onMouseLeave={handleMouseLeave}
      draggable="true"
    >
      <div className="flex gap-2">
        <p className="font-medium text-[16px] leading-[19.2px] text-gray-900">
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
  isVisible: PropTypes.bool,
  onClick: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDrag: PropTypes.func,
  width: PropTypes.string,
};

export default TestimonialCard;
