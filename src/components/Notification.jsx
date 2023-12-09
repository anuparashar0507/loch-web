// import mg from "../assets/mg.png";
import Slider from "react-slick";
import bellIcon from "../assets/Bell.png";
import { Card1, Card2, Card3 } from "./NotificationCards";
const Notification = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    pauseOnHover: true,
    prevArrow: null,
    nextArrow: null,
  };
  return (
    <div className="w-full h-max grid md:grid-cols-2 grid-cols-1 items-end">
      <div className="flex flex-col gap-4 max-w-[322px]">
        <img src={bellIcon} className="h-8 w-8"></img>
        <h4 className="text-[31px] leading-[37.2px] text-background stroke-black stroke-2 drop-shadow-[0px_4px_4px_0px_rgba(0, 0, 0, 0.25)]">
          Get notified when a highly correlated whale makes a move
        </h4>
        <p className="text-[16px] leading-[19.2px] text-background opacity-70">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </p>
      </div>
      <div className="max-w-[420px] p-6 overflow-clip">
        {/* <img src={mg} className="max-w-[407px] max-h-[304px]" /> */}
        <div className="w-[420px]">
          <Slider {...settings}>
            <Card1 />
            <Card2 />
            <Card3 />
          </Slider>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-opacity-0 via-opacity-50 to-opacity-50"></div>
      </div>
    </div>
  );
};

export default Notification;
