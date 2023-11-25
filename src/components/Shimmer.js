const Shimmer = () => {
  return (
    <div className=" bg-transparent">
      <div className="w-full h-80 bg-slate-900 flex flex-col items-center justify-center">
        <div
          className="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-white/100 border-r-white/40 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
        <div className=" text-white/100">
          <h2 className=" pt-5 text-2xl font-semibold">
            Looking for great food near you ...
          </h2>
        </div>
      </div>
      <div className="max-w-7xl mx-auto  h-auto mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {Array(12)
          .fill("")
          .map((e, index) => (
            <div className="flex flex-col" key={index}>
              <div className=" w-60 h-40 border  bg-gray-200  text-black/100"></div>
              <div className=" mt-4 ml-0.5 w-36 h-3 border-grey border-2 rounded-md bg-gray-200"></div>
              <div className=" mt-4 ml-0.5 w-20 h-3 border-grey border-2 rounded-md bg-gray-200"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
