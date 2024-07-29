import React from "react";
import "./BMIclassif.css";

const BMIclassif = ({ bmi }) => {
    const getClassification = (bmi) => {
        if (bmi < 18.5) return "Underweight";
        if (bmi < 25) return "Healthy";
        if (bmi < 30) return "Overweight";
        if (bmi >= 30) return "Obese";
        return "Invalid BMI";
    };

    const classification = getClassification(bmi);

    return (
        <div className="bmi-classif">
            <p className="bmi-classif-text">
                Your BMI indicates you are in the
                <strong> {classification} </strong>
                range.
            </p>
        </div>
    );
};

export default BMIclassif;
