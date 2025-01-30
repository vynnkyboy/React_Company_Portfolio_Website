import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpeg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20" id="workflow">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Profil Dan Sejarah{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
          STIKOM TUNAS BANGSA PEMATANG SIANTAR
        </span>
      </h2>

      {/* Image Section - Full width */}
      <div className="mt-10 w-full px-2">
        <img
          src={codeImg}
          alt="Coding"
          className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl border-4 border-blue-900/30"
        />
      </div>

      {/* Content Section - Full width */}
      <div className="mt-16 px-4 max-w-5xl mx-auto">
        {checklistItems.map((item, index) => (
          <div key={index} className="mb-12">
            <div className="text-center mb-6">
              <h5 className="text-2xl font-bold text-neutral-100 inline-block border-b-2 border-blue-500 pb-2">
                {item.title}
              </h5>
            </div>
            <div className="mt-6 space-y-8">
              {item.description.map((paragraph, pIndex) => (
                <p 
                  key={pIndex} 
                  className="text-lg text-neutral-400 text-justify leading-loose tracking-wide px-4 indent-8"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflow;