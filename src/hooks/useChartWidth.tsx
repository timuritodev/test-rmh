import { useState, useEffect } from "react";
import { calculateChartWidth } from "../utils/calculateChartWidth";

export const useChartWidth = () => {
    const [chartWidth, setChartWidth] = useState(calculateChartWidth());

    useEffect(() => {
        const handleResize = () => {
            setChartWidth(calculateChartWidth());
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return chartWidth;
};
