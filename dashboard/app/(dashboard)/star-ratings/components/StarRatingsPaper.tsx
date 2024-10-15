import { Paper, PaperProps } from "@mui/material";
import { ReactNode } from "react";

interface IProps extends PaperProps {
    children?: ReactNode;
}

export const StarRatingsPaper = (props: IProps) => {
    const { children, ...rest } = props;
    return (
        <Paper
            {...rest}
            sx={{ p: 2, height: "100%", minHeight: 200 }}
            variant="outlined"
        >
            {children}
        </Paper>
    );
};
