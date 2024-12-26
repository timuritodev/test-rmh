export const calculateChartWidth = () => {
    const charts = 3;

    const gap = 20 * (charts - 1);

    const width = window.innerWidth * 0.9;

    return ((width - gap) / charts) * 0.9;
};
