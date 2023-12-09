import { useState, useRef, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import logo from "../assets/logo.png";

const testimonials = [
  {
    name: "Jack F",
    role: "Ex Blackrock PM",
    message:
      "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
  },
  {
    name: "Yash P",
    role: "Research, 3poch Crypto Hedge Fund",
    message:
      "“I use Loch every day now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
  },
  {
    name: "Shiv S",
    role: "Co-Founder Magik Labs",
    message:
      "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
  },
];

const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState([true, false, false]);
  const [dragStart, setDragStart] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  // const [dragOffset, setDragOffset] = useState(0);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      testimonialsRef.current.style.overflow = "hidden";
    };

    testimonialsRef.current.addEventListener("scroll", handleScroll);

    return () => {
      testimonialsRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCardClick = (index) => {
    const newVisibleCards = Array.from(
      { length: testimonials.length },
      (_, i) => i === index
    );
    setVisibleCards(newVisibleCards);
    scrollCardIntoView(index);
  };

  const handleDragStart = (e) => {
    setDragStart(new Date().getTime());
    setDragStartX(e.clientX);
    setDragging(true);
  };

  const handleDragMove = (e) => {
    if (dragging) {
      const deltaX = e.clientX - dragStartX;
      testimonialsRef.current.scrollLeft -= deltaX;
      setDragStartX(e.clientX);
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
    const dragEnd = new Date().getTime();
    if (dragEnd - dragStart < 300) {
      const newVisibleCards = Array.from(
        { length: testimonials.length },
        (_, i) => i === 0
      );
      setVisibleCards(newVisibleCards);
      scrollCardIntoView(0);
    }
  };

  const scrollCardIntoView = (index) => {
    const cardWidth = 353;
    const spacing = 10;
    const fixedMargin = 100;

    let scrollPosition;
    if (index === 0) {
      scrollPosition = 0;
    } else {
      scrollPosition = index * (cardWidth - spacing) - fixedMargin;
    }

    testimonialsRef.current.scrollLeft = scrollPosition;
  };

  return (
    <div className="flex flex-col justify-end gap-5">
      <h5 className="text-[25px] pr-[62px] text-end leading-[30px] text-background line-clamp-3 max-h-[53px]">
        Testimonials
      </h5>
      <div className="h-px mr-[62px] bg-gray-50 mb-6" />
      <div className="max-w-full overflow-hidden">
        <div className="flex flex-col md:flex-row gap-10 align-bottom items-end h-min">
          <img src={logo} alt="Logo" className="w-[60px] h-[60px]" />
          <div
            className="flex max-w-screen-md gap-2 md:gap-5 overflow-x-hidden"
            ref={testimonialsRef}
            onMouseMove={(e) => handleDragMove(e)}
            onMouseUp={handleDragEnd}
          >
            {testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={i}
                name={testimonial.name}
                role={testimonial.role}
                message={testimonial.message}
                isVisible={visibleCards[i]}
                onClick={() => handleCardClick(i)}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDrag={handleDragMove}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
