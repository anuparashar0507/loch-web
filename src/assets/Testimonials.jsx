import TestimonialCard from "./TestimonialCard";
import logo from "../assets/logo.png";
const testimonials = [
  {
    name: "Jack F",
    role: "Ex Blackrock PM",
    messsage:
      "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
  },
  {
    name: "Yash P",
    role: "Research, 3poch Crypto Hedge Fund",
    messsage:
      "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
  },
  {
    name: "Shiv S",
    role: "Co-Founder Magik Labs",
    messsage:
      "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-end pr-[62px] gap-5">
      <h5 className="text-[25px] text-end leading-[30px] text-background line-clamp-3 max-h-[53px]">
        Testimonials
      </h5>
      <div className="h-px bg-gray-50 mb-6" />
      <div className="flex gap-10 align-bottom items-end h-min">
        <img src={logo} className="w-[60px] h-[60px]" />
        <div className="flex gap-5">
          {testimonials.map((testimonial, i) => {
            return (
              <TestimonialCard
                key={i}
                name={testimonial.name}
                role={testimonial.role}
                message={testimonial.messsage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
