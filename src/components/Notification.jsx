// import mg from "../assets/mg.png";
import bellIcon from "../assets/Bell.png";
import NotificationCards from "./NotificationCards";
const Notification = () => {
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
      <div className="max-w-[407px] max-h-[304px]">
        {/* <img src={mg} className="max-w-[407px] max-h-[304px]" /> */}
        <NotificationCards />
      </div>
    </div>
  );
};

export default Notification;

/* Frame 427319432 */

// position: absolute;
// width: 407px;
// height: 304px;
// left: 393px;
// top: 44px;

// background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.921569) 27.6%, #FFFFFF 53.13%, rgba(255, 255, 255, 0.666667) 81.77%, rgba(255, 255, 255, 0) 100%);

// ***************************** //
