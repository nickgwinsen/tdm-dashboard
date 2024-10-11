import { Box, Rating, Stack, Typography } from "@mui/material";
import { StarRatingsPaper } from "./StarRatingsPaper";
import { getAverageRating } from "./dataset/reviews";

export const AverageStarRatings = () => {
    const avgStars = getAverageRating();
    return (
        <StarRatingsPaper>
            <Box height={"100%"} display={"flex"} flexDirection={"column"}>
                <Typography variant={"h6"}>Average Stars</Typography>
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    gap={2}
                    flexGrow={1}
                >
                    <Rating
                        name="read-only"
                        value={avgStars}
                        readOnly
                        precision={0.01}
                    />
                    <Typography variant={"h4"} fontWeight={600}>
                        {avgStars}
                    </Typography>
                </Stack>
            </Box>
        </StarRatingsPaper>
    );
};
