import { BadgeCheck, BrainCog, Camera, ShieldCheck } from "lucide-react";

export default function FraudDetectionLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-400">
            Detecting Fraud with Visual Recognition
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            A project powered by IBM Watson Visual Recognition & Watson Studio.
          </p>
        </header>
        <section className="bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-teal-300">Project Overview</h2>
          <p className="text-gray-200 leading-relaxed">
            This project explores how to leverage IBM Watson Visual Recognition to detect potential fraud using image-based evidence.
            Through self-paced learning and practical implementation, I trained a custom image classifier, deployed it via Watson Studio,
            and applied it to real-world fraud detection use-cases. This work bridges image recognition with ethical AI applications.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-teal-300 mb-6">Core Skills Demonstrated</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <SkillCard
              icon={<ShieldCheck className="h-6 w-6 text-teal-400" />}
              title="Fraud Detection"
              description="Utilized image-based classifiers to support the detection of suspicious or manipulated evidence."
            />
            <SkillCard
              icon={<Camera className="h-6 w-6 text-teal-400" />}
              title="Image Recognition"
              description="Trained and evaluated image classifiers using Watson Visual Recognition APIs."
            />
            <SkillCard
              icon={<BrainCog className="h-6 w-6 text-teal-400" />}
              title="Watson Studio"
              description="Created, managed and tested models inside IBM’s Watson Studio environment."
            />
            <SkillCard
              icon={<BadgeCheck className="h-6 w-6 text-teal-400" />}
              title="Watson Visual Recognition"
              description="Integrated IBM’s Visual Recognition services for practical, production-ready insights."
            />
          </div>
        </section>
        <footer className="text-center text-sm text-gray-500 mt-20">
          Built with ♥ using IBM Cloud tools — Watson Studio & Visual Recognition
        </footer>
      </div>
    </div>
  );
}

function SkillCard({ icon, title, description }) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
      <div className="flex items-center gap-4 mb-3">
        {icon}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
