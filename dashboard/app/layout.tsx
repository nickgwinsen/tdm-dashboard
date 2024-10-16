import AbcIcon from "@mui/icons-material/Abc";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Branding, Navigation } from "@toolpad/core";
import { AppProvider } from "@toolpad/core/nextjs";
import * as React from "react";

import { SpeedDialIcon } from "@mui/material";
import Image from "next/image";
import theme from "../config/theme";

const NAVIGATION: Navigation = [
    {
        kind: "header",
        title: "Main items",
    },
    {
        segment: "",
        title: "Dashboard",
        icon: <DashboardIcon />,
    },
    {
        segment: "categoryRatings",
        title: "Ratings By Category",
        icon: <SpeedDialIcon />,
    },
    {
        segment: "districts",
        title: "Districts",
        icon: <LocalConvenienceStoreIcon />,
    },
    {
        segment: "common-words",
        title: "Most Common Words",
        icon: <AbcIcon />,
    },
    {
        segment: "star-ratings",
        title: "Star Ratings",
        icon: <StarBorderIcon />,
    },
    {
        segment: "Business-Actions",
        title: "Business Actions",
        icon: <BusinessCenterIcon />,
    },
];

const BRANDING: Branding = {
    title: "Travel Centers of America Dashboard",
    logo: (
        <Image src="/images/ta-logo.svg" width={100} height={100} alt="logo" />
    ),
};

export default function RootLayout(props: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            data-toolpad-color-scheme="light"
            suppressHydrationWarning
        >
            <body>
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <AppProvider
                        navigation={NAVIGATION}
                        branding={BRANDING}
                        theme={theme}
                    >
                        {props.children}
                    </AppProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
