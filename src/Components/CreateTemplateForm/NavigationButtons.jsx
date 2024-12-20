import React from "react";

const NavigationButtons = ({
  currentStep,
  onCancel,
  onPrevious,
  onNext,
  isValid,
}) => {
  return (
    <div className="col-span-12 flex justify-between mt-4">
      {currentStep === 1 && (
        <>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onNext}
            className={isValid ? "bg-main text-white px-6 py-2 rounded-md" : "bg-main/60 text-white px-6 py-2 rounded-md"}
            disabled={!isValid}
          >
            Next
          </button>
        </>
      )}

      {currentStep === 2 && (
        <>
          <button
            type="button"
            onClick={onPrevious}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={onNext}
            className={isValid ? "bg-main text-white px-6 py-2 rounded-md" : "bg-main/60 text-white px-6 py-2 rounded-md"}
            disabled={!isValid}
          >
            Next
          </button>
        </>
      )}

      {currentStep === 3 && (
        <>
          <button
            type="button"
            onClick={onPrevious}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md"
          >
            Previous
          </button>
          <button
            type="submit"
            className={isValid ? "bg-main text-white px-6 py-2 rounded-md" : "bg-main/60 text-white px-6 py-2 rounded-md"}
            disabled={!isValid}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default NavigationButtons;
