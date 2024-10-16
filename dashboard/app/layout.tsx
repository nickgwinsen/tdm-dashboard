import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Branding, Navigation } from "@toolpad/core";
import { AppProvider } from "@toolpad/core/nextjs";
import * as React from "react";

import Image from "next/image";
import theme from "../config/theme";

const NAVIGATION: Navigation = [
    {
        kind: "header",
        title: "Travel Centers",
    },

    {
        segment: "districts",
        title: "Districts",
        icon: <LocalConvenienceStoreIcon />,
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
