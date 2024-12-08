import AuthForm from "./AuthForm";
const Auth = ({ handleLogin }: any) => {
  return (
    <div>
      <nav className=" sticky top-0 w-full z-50">
        <div className=" px-4 py-2 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex  justify-between items-center">
          <div className=" flex items-center gap-3">
            <p className=" text-sm font-bold lg:text-base cursor-pointer">
              FlowTrade
            </p>
          </div>
          <div className="space-x-3">
            <AuthForm handleLogin={handleLogin} />
          </div>
        </div>
      </nav>
      <div className=" px-10 my-2 flex items-center justify-between border-b">
        <div
          className="flex gap-5 flex-col items-start
        justify-center"
        >
          <h1 className=" text-3xl font-bold">
            Take control of your money Start your portfolio today and discover
            crypto
          </h1>
          <p className=" text-xl text-gray-600">
            FlowTrade is the most trusted platform for buying, selling and
            trading crypto
          </p>

          <ul className=" flex flex-col text-xs gap-2 font-semibold text-gray-600 ">
            <li>• Top up via your bank without paying fees</li>
            <li>• Sells & withdrawals</li>
            <li>• Trade 250+ digital assets</li>
          </ul>
          <AuthForm handleLogin={handleLogin} />
        </div>
        <img
          className=" w-[50%] hover:rotate-6 transition-all duration-1000"
          src="https://images.ctfassets.net/c5bd0wqjc7v0/5o0IbUnXunFKmiSC31gK6j/c9da092eda3ebc34941dfa3d107437f4/Type_Circles_4x.png?fm=webp&q=100&w=1180"
          alt=""
        />
      </div>
    </div>
  );
};

export default Auth;
