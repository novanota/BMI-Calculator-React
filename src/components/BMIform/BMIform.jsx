import React from "react";
import { useState } from "react";
import "./BMIform.css";
import BMIbutton from "../BMIbutton/BMIbutton";

const BMIform = ({ onCalculate }) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onCalculate(height, weight);
    };

    return (
        <form className="bmi-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="form-label">Height (cm)</label>

                <input
                    className="form-input"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Enter your height"
                    required
                />
            </div>

            <div className="form-group">
                <label className="form-label">Weight (kg)</label>

                <input
                    className="form-input"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter your weight"
                    required
                />
            </div>

            <BMIbutton />
        </form>
    );
};

export default BMIform;
