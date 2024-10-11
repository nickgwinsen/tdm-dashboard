"use client";
import { Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { dataset, valueFormatter } from "./dataset/reviews";
import { StarRatingsPaper } from "./StarRatingsPaper";

const chartSetting = {
    yAxis: [
        {
            label: "# of Reviews",
        },
    ],
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: "translate(-10px, 0)",
        },
        ml: 2,
    },
};

export const StarRatingsOverTime = () => {
    return (
        <StarRatingsPaper>
            <Typography variant={"h6"}>Star Ratings Over Time</Typography>
            <BarChart
                height={400}
                dataset={dataset}
                xAxis={[{ scaleType: "band", dataKey: "month" }]}
                series={[
                    { dataKey: "one", label: "One Stars", valueFormatter },
                    { dataKey: "two", label: "Two Stars", valueFormatter },
                    {
                        dataKey: "three",
                        label: "Three Stars",
                        valueFormatter,
                    },
                    {
                        dataKey: "four",
                        label: "Four Stars",
                        valueFormatter,
                    },
                    {
                        dataKey: "five",
                        label: "Five Stars",
                        valueFormatter,
                    },
                ]}
                {...chartSetting}
            />
        </StarRatingsPaper>
    );
};
