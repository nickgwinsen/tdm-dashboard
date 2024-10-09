import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Navigation } from "@toolpad/core";
import { AppProvider } from "@toolpad/core/nextjs";
import * as React from "react";

import theme from "../theme";

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
    segment: "districts",
    title: "Districts",
    icon: <LocalConvenienceStoreIcon />,
  },
];

const BRANDING = {
  title: "Travel Centers of America Dashboard",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-toolpad-color-scheme="light" suppressHydrationWarning>
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
