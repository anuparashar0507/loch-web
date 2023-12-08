import SignUp from "./components/SignUp";
import Notification from "./components/Notification";
import Watch from "./components/Watch";
import Testimonials from "./components/Testimonials";
// import blue from "./assets/bluela.png"
function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-9  min-h-screen max-h-[64rem]">
      <div className="text-xl col-span-1 md:col-span-5 min-h-screen max-h-[64rem] text-cyan-100 bg-[url('./assets/bluela.png')] bg-no-repeat bg-cover bg-center bg-gray-900 flex flex-col gap-4 pl-[60px] pb-16 pt-12">
        {/* <div className="absolute [background:radial-gradient(79.84%_79.84%_at_32.27%_91.27%,rgba(31,169,17,0.810119)_17.21%,#2F15D0_64.58%,rgba(0,0,0,0)_100%)_] w-[1334px] h-[1257.84px] top-[-114px] bottom-0 left-0"></div> */}
        <Notification />
        <Watch />
        <Testimonials />
      </div>

      <div className="text-xl col-span-1 md:col-span-4 bg-white h-full flex justify-center align-middle shadow-[0px_14px_64px_-4px_rgba(24, 39, 75, 0.12)] shadow-[0px_8px_22px_-6px_rgba(24, 39, 75, 0.12)]-left-96">
        <SignUp />
      </div>
    </div>
  );
}

export default App;

// background: radial-gradient(79.84% 79.84% at 32.27% 91.27%, rgba(31, 169, 17, 0.810119) 17.21%, #2F15D0 64.58%, rgba(0, 0, 0, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
