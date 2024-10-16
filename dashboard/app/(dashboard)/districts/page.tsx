import BusinessActions from "./components/Business-Actions/BusinessActions";
import CommonWords from "./components/common-words/CommonWords";
import App from "./components/dropdown/DistrictDropdown";
import StarRatings from "./components/star-ratings/StarRatings";
import CategoryRatings from "./components/categoryRatings/CategoryRatings";
import { Grid2, Box } from "@mui/material";

export default function Districts() {
    return (
        <>
            <Box>
                {/* <Typography>Dist</Typography> */}
                <App />
                <Grid2 container spacing={2}>
                    <Grid2 size={6}>
                        <CommonWords />
                    </Grid2>
                    <Grid2 size={6}>
                        <BusinessActions />
                    </Grid2>
                    <Grid2>
                        <StarRatings />
                    </Grid2>
                    <Grid2 size={12}>
                        <CategoryRatings />
                    </Grid2>
                </Grid2>
            </Box>
        </>
    );
}
