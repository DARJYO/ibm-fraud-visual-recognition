import React, { useState } from "react";

export default function DemoClassifier() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));

    // Simulated result – will hook this to an actual model later
    setResult({
      label: Math.random() > 0.5 ? "Potential Fraud Detected" : "Clean Transaction",
      confidence: `${(Math.random() * 40 + 60).toFixed(2)}%`
    });
  };

  return (
    <div className="bg-white py-10 px-6 rounded-2xl shadow-lg mt-12 text-center max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">🧪 Demo: Image Classifier</h2>
      <p className="text-gray-500 mb-6">Upload an image to see how our visual recognition engine might classify it.</p>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4"
      />

      {image && (
        <div className="mt-4">
          <img src={image} alt="Uploaded preview" className="w-64 h-auto mx-auto rounded-md shadow" />
        </div>
      )}

      {result && (
        <div className="mt-6 text-lg">
          <p className="font-bold text-gray-700">Prediction: <span className="text-indigo-600">{result.label}</span></p>
          <p className="text-gray-500">Confidence: {result.confidence}</p>
        </div>
      )}
    </div>
  );
}
