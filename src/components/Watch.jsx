import mg from "../assets/Cohorts1.png";
import eyeIcon from "../assets/Eye.svg";
const Watch = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:justify-start justify-center md:pr-[62px] gap-8 md:mt-12">
      <div className="md:max-h-[306px] md:left-0 md:-ml-12 overflow-hidden">
        <img
          src={mg}
          className="shadow-[0px_8px_22px_-6px_rgba(24, 39, 75, 0.12), 0px_14px_64px_-4px_rgba(24, 39, 75, 0.12)] rounded-xl"
        />
      </div>
      <div className="flex flex-col items-end gap-4 max-w-[305px]">
        <img src={eyeIcon} className="h-max w-max" />
        <h4 className="text-[31px] leading-[37.2px] text-background text-end stroke-black stroke-2 drop-shadow-[0px_4px_4px_0px_rgba(0, 0, 0, 0.25)]">
          Watch what the whales are doing
        </h4>
        <p className="text-[16px] leading-[19.2px] text-background text-end opacity-70">
          All whales are not equal. Know exactly what the whales impacting YOUR
          portfolio are doing.
        </p>
      </div>
    </div>
  );
};

export default Watch;
