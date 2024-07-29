import "./styles/app.css";
import { useState } from "react";
import BMIheader from "./components/BMIheader/BMIheader";
import BMIform from "./components/BMIform/BMIform";
import BMIresult from "./components/BMIresult/BMIresult";
import BMIclassif from "./components/BMIclassif/BMIclassif";

const App = () => {
    const [bmi, setBMI] = useState(null);

    const calculateBMI = (height, weight) => {
        if (height && weight) {
            const bmiValue = (weight / (height / 100) ** 2).toFixed(1);
            setBMI(bmiValue);
        }
    };

    return (
        <div className="app">
            <div className="card">
                <BMIheader />
                <BMIform onCalculate={calculateBMI} />

                {bmi && (
                    <>
                        <BMIresult bmi={bmi} />
                        <BMIclassif bmi={bmi} />
                    </>
                )}
            </div>
        </div>
    );
};

export default App;
