import SignUp from "./components/SignUp";
import Notification from "./components/Notification";
import Watch from "./components/Watch";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-9 min-h-screen">
      <div className="text-xl col-span-1 md:col-span-5 min-h-[64rem] text-cyan-100 bg-[url('./assets/bluela.png')] bg-no-repeat bg-cover bg-center bg-gray-900 flex flex-col gap-4 pl-[60px] pb-16 pt-12">
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
