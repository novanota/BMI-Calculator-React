import React from "react";
import "./BMIresult.css";

const BMIresult = ({ bmi }) => {
    return (
        <div className="bmi-result">
            <label className="bmi-result-label">BMI:</label>
            <label className="bmi-result-number">{bmi}</label>
        </div>
    );
};

export default BMIresult;
