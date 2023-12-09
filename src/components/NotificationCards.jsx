import bellIcon from "../assets/bell-notification.svg";
import chart from "../assets/bar-chart.svg";
import clock from "../assets/clock.svg";

export const Card1 = () => {
  return (
    <div className="p-3.5 rounded-xl w-[190px] min-w-[189px] max-w-[191px] gap-4 h-[172px] bg-white shadow-[0px_1px_1px_0px_rgba(0, 0, 0, 0.04), 0px_4px_10px_0px_rgba(0, 0, 0, 0.04)]">
      <div className="flex flex-col w-full gap-[14px] justify-stretch">
        <div className="flex row-span-1 justify-between items-start">
          <img src={bellIcon} className="h-7 w-7"></img>
          <button
            type="text"
            name="save"
            id="save"
            className="block  rounded-lg border-[1px] text-sm border-none text-gray-900"
            placeholder="0.00"
          >
            save
          </button>
        </div>
        <div className="flex flex-col row-span-3 gap-4">
          <p className="text-[14px] leading-[16.8px] text-gray-900 pr-8">
            We’ll be sending notifications to you here
          </p>
          <input
            type="email"
            name="email"
            id="email"
            className="block rounded-lg border-[1px] py-1 px-2"
            placeholder=""
          />
        </div>
      </div>
    </div>
  );
};

export const Card2 = () => {
  return (
    <div className="p-3.5 rounded-xl w-[190px] min-w-[189px] max-w-[191px] gap-4 h-[172px] bg-white shadow-[0px_1px_1px_0px_rgba(0, 0, 0, 0.04), 0px_4px_10px_0px_rgba(0, 0, 0, 0.04)]">
      <div className="flex flex-col w-full h-full justify-between">
        <div className="flex row-span-1 justify-between items-start">
          <img src={chart} className="h-7 w-7"></img>
          <input
            type="checkbox"
            checked
            className="form-checkbox text-blue-500 h-4 w-4 rounded-lg outline-none border"
          />
        </div>
        <div className="flex flex-col row-span-3 gap-4">
          <p className="text-[11px] leading-[13.44px] text-gray-900 ">
            Notify me when any wallets move more than
          </p>
          <select
            disabled
            className="appearance-none bg-gray-200 w-[66px] text-gray-700 p-[4.2px] text-[9px] rounded-sm leading-[11px] focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="1000$" selected>
              $1000
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export const Card3 = () => {
  return (
    <div className="p-3.5  rounded-xl  w-[190px] min-w-[189px] max-w-[191px] h-[172px] bg-white shadow-[0px_1px_1px_0px_rgba(0, 0, 0, 0.04), 0px_4px_10px_0px_rgba(0, 0, 0, 0.04)]">
      <div className="flex flex-col w-full h-full justify-between ">
        <div className="flex row-span-1 justify-between items-start">
          <img src={clock} className="h-7 w-7" />
          <input
            type="checkbox"
            checked
            className="form-checkbox text-blue-500 h-4 w-4 rounded-lg outline-none border"
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <p className="text-[11px] leading-[13.44px] text-gray-900 ">
            Notify me when any wallets move more than
          </p>
          <select
            disabled
            className="appearance-none bg-gray-200 w-[66px] text-gray-700 p-[4.2px] text-[9px] rounded-sm leading-[11px] focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="1000$" selected>
              {`> 30days`}
            </option>
          </select>
          <p className="text-[11px] leading-[13.44px] text-gray-900 ">
            becomes active
          </p>
        </div>
      </div>
    </div>
  );
};
