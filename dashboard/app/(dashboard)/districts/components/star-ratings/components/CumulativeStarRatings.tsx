import { Rating, Stack, Typography } from "@mui/material";
import { StarRatingsPaper } from "./StarRatingsPaper";
import { getCumulativeRatings, ICumulativeStarRating } from "./dataset/reviews";

export const CumulativeStarRatings = () => {
    const cumulativeStarRatings: ICumulativeStarRating[] =
        getCumulativeRatings();
    return (
        <StarRatingsPaper>
            <Stack>
                <Typography variant={"h6"}>Cumulative Star Ratings</Typography>

                <Stack justifyContent={"center"} mt={2}>
                    {cumulativeStarRatings.map(({ stars, count }) => (
                        <Stack
                            key={stars}
                            direction={"row"}
                            gap={2}
                            justifyContent={"space-between"}
                        >
                            <Rating
                                name="read-only"
                                value={stars}
                                readOnly
                                precision={0.25}
                            />
                            <Typography fontWeight={600}>
                                {count} Ratings
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </StarRatingsPaper>
    );
};
