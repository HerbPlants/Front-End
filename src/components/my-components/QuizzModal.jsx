// "use client"

import React from "react";
import { X, ArrowRight, ArrowLeft } from "lucide-react";

const QuizModal = ({
  questionNumber,
  question,
  options,
  selectedOption,
  onSelectOption,
  onNext,
  onPrevious,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center p-4 backdrop-blur-sm bg-black/30">
      <div className="bg-[#F6FBE9] rounded-xl max-w-md w-full shadow-lg p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-900">
            Soal Nomor {questionNumber}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-500"
          >
            <X />
          </button>
        </div>

        {/* Question */}
        <p className="text-gray-800 mb-4">{question}</p>

        {/* Options */}
        <div className="space-y-2">
          {options.map((option, index) => (
            <label
              key={index}
              className={`block border rounded-md px-4 py-2 cursor-pointer ${
                selectedOption === index
                  ? "bg-lime-200 border-lime-400"
                  : "border-lime-300 hover:bg-lime-100"
              }`}
            >
             
              <span className="font-medium">
                {String.fromCharCode(65 + index)}.
              </span>{" "}
              {option}
            </label>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6">
          <button
            className="flex items-center text-sm px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
            onClick={onPrevious}
          >
            <ArrowLeft size={16} className="mr-2" />
            Sebelumnya
          </button>
          <button
            className="flex items-center text-sm px-4 py-2 rounded-md bg-lime-500 text-white hover:bg-lime-600"
            onClick={onNext}
          >
            Selanjutnya
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
