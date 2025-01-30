import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]" id="features">
      <div className="text-center">
      <span className="bg-neutral-900 text-white-500 rounded-full h-1 text-lg font-medium px-2 py-1 uppercase">
  Visi, Misi, Tujuan & Strategi
</span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          STIKOM {" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
            TUNAS BANGSA
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
  {features.map((feature, index) => (
    <div key={index} className="w-full sm:w-1/2 lg:w-1/2 mb-6">
      <div className="flex items-start">
        {/* Ikon */}
        <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-blue-700 justify-center items-center rounded-full">
          {feature.icon}
        </div>
        {/* Konten Fitur */}
        <div>
          <h5 className="mt-1 mb-4 text-xl font-bold text-neutral-100">{feature.text}</h5>
          {/* Validasi tipe data untuk description */}
          {Array.isArray(feature.description) ? (
            <ul className="text-md p-2 mb-4 text-neutral-500 text-justify">
              {feature.description.map((desc, idx) => (
                <li key={idx} className="mb-2">{desc}</li>
              ))}
            </ul>
          ) : (
            <p className="text-md p-2 mb-4 text-neutral-500 text-justify">{feature.description}</p>
          )}
        </div>
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default FeatureSection;
