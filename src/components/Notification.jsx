// import mg from "../assets/mg.png";
import Slider from "react-slick";
import bellIcon from "../assets/Bell.png";
import { Card1, Card2, Card3 } from "./NotificationCards";
const Notification = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: null,
    nextArrow: null,
  };
  return (
    <div className="w-full h-max grid md:grid-cols-2 grid-cols-1 md:items-start items-center gap-8 md:gap-0">
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
      <div className="max-w-[420px] px-6 py-2 overflow-clip bg">
        {/* <img src={mg} className="max-w-[407px] max-h-[304px]" /> */}
        <div className="relative w-[420px]">
          <div className="absolute inset-0 z-10  bg-gradient-to-r from-[#165DFF] from-2% via-transparent via-20% to-slate-900 to-90% from-opacity-5 via-opacity-100 to-opacity-50 opacity-20"></div>
          <Slider arrows={false} {...settings}>
            <Card1 />
            <Card2 />
            <Card3 />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Notification;
