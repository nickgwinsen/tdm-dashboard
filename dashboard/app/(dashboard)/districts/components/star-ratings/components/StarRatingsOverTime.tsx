"use client";
import { Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { dataset, valueFormatter } from "./dataset/reviews";
import { StarRatingsPaper } from "./StarRatingsPaper";
import { useTheme } from "@mui/material/styles";

const chartSetting = {
    yAxis: [
        {
            label: "Average Star Rating",
            min: 0,
            max: 5,
        },
    ],
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: "translate(-10px, 0)",
        },
        ml: 2,
    },
};

// calculating average for each month and storing in averages array
// this will likely change when api is connected since we will be grabbing
// reviews instead of number of star ratings.
const averages = dataset.map((month) => {
    const total = month.one + month.two + month.three + month.four + month.five;
    const average =
        (month.one * 1 +
            month.two * 2 +
            month.three * 3 +
            month.four * 4 +
            month.five * 5) /
        total;
    return {
        average: average,
        month: month.month,
    };
});

export const StarRatingsOverTime = () => {
    // imports theme so the line graph can use primary color
    const theme = useTheme();
    return (
        <StarRatingsPaper>
            <Typography variant={"h6"}>Star Ratings Over Time</Typography>
            <LineChart
                height={400}
                dataset={averages}
                xAxis={[{ scaleType: "point", dataKey: "month" }]}
                series={[
                    {
                        dataKey: "average",
                        label: "Average",
                        valueFormatter,
                        color: theme.palette.primary.main,
                    },
                ]}
                {...chartSetting}
            />
        </StarRatingsPaper>
    );
};
