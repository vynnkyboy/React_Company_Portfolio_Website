import { testimoni } from "../constants";

const testimonis = () => {
  return (
    <div className="mt-20 tracking-wide" id="testimonis">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonis.map((testimoni, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimoni.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimoni.image}
                  alt=""
                />
                <div>
                  <h6>{testimoni.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimoni.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default testimoni;
