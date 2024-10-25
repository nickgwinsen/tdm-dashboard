"use client";

import * as React from "react";
import { Box, Paper } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import Table from "../../../../components/Table";

// this does NOT get anything from the actual data, since it really isnt availlable and we dont have filtering

// let columns: GridColDef<(typeof rows)[number]>[] = [];

let rows: any[] = [];

import categoriesJSON from "./categories.json";

const categories = Object.entries(categoriesJSON);
// get the categories json

// for (var num = 0; num < categories.length; num++) {
//     var category = categories[num][0];

//     console.log(category);
//     if (category == "Truck Maintenance") {
//         columns.push({
//             field: "TruckMaintenance",
//             headerName: "Truck Maintenance",
//         });
//     } else {
//         columns.push({ field: category, headerName: category });
//     }
// }

const columns = [
    { field: "Food", headerName: "Food", flex: 1 },
    { field: "Service", headerName: "Service", flex: 1 },
    { field: "Bathrooms", headerName: "Bathrooms", flex: 1 },
    { field: "Cleanliness", headerName: "Cleanliness", flex: 1 },
    { field: "Parking", headerName: "Parking", flex: 1 },
    { field: "TruckMaintenance", headerName: "Truck Maintenance", flex: 1 },
];

rows.push({
    id: 0,
    Food: 1.0,
    Service: 2.0,
    Bathrooms: 2.5,
    Cleanliness: 5.0,
    Parking: "N/A",
    TruckMaintenance: 3.6,
});

export default function CategoryPage() {
    return (
        <Paper variant="outlined" sx={{ p: 2, height: "100%" }}>
            <Box style={{ width: "auto" }}>
                <Table
                    title="Ratings By Category"
                    rows={rows}
                    columns={columns}
                    autoSize
                    disableColumnMenu
                    hideFooter
                    disableColumnSorting
                    disableColumnResize
                />
            </Box>
        </Paper>
    );
}
