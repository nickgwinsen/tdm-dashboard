import BusinessActions from "./_components/Business-Actions/BusinessActions";
import CommonWords from "./_components/common-words/CommonWords";
import App from "./_components/dropdown/DistrictDropdown";
import StarRatings from "./_components/star-ratings/StarRatings";
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
                </Grid2>
            </Box>
        </>
    );
}
