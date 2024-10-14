import AbcIcon from "@mui/icons-material/Abc";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Navigation } from "@toolpad/core";
import { AppProvider } from "@toolpad/core/nextjs";
import * as React from "react";

import theme from '../theme';
import { SpeedDialIcon } from '@mui/material';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: '',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'categoryRatings',
    title: 'Ratings By Category',
    icon: <SpeedDialIcon />,
  },
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
];

const BRANDING = {
    title: "Travel Centers of America Dashboard",
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
