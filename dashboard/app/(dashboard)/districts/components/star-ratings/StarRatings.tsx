import { Box, Stack } from "@mui/material";
import {
    AverageStarRatings,
    CumulativeStarRatings,
    StarRatingsOverTime,
} from "./components";

export default function StarRatingsPage() {
    return (
        <Stack gap={2}>
            <Stack direction={{ sm: "row", xs: "column" }} gap={2}>
                <Box flex={1}>
                    <AverageStarRatings />
                </Box>
                <Box flex={2}>
                    <CumulativeStarRatings />
                </Box>
            </Stack>
            <StarRatingsOverTime />
        </Stack>
    );
}
