"use client";

import * as React from "react";
import { Box, Container, Paper, Rating, Table, TableCell, TableRow, Typography } from "@mui/material";

// this does NOT get anything from the actual data, since it really isnt availlable and we dont have filtering

// let columns: GridColDef<(typeof rows)[number]>[] = [];

import categoriesJSON from "./categories.json";

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

const ratings: {category:string; rating:number; amount:number;}[] = [];

var rating = 0;

for (var category in categoriesJSON){
    ratings.push({category:category, rating:rating, amount:100 * rating});

    rating += .5;
}

export default function CategoryPage() {
    return (
        <Paper variant="outlined" sx={{ p: 2, height: "100%" }}>
            <Typography variant={"h6"}>Ratings By Category</Typography>
            <Table width="100%" cellSpacing={0}>
                {ratings.map(({category, rating, amount}) =>
                    <TableRow>
                        <TableCell>
                            <Typography align="left" fontWeight={"bold"} >{category}</Typography>
                        </TableCell>
                        <TableCell>
                            <Rating
                                    name="read-only"
                                    value={rating}
                                    readOnly
                                    precision={0.25}
                                    />
                        </TableCell>
                        <TableCell sx={{width:"60%"}}>
                            <Typography align="right" fontWeight={"bold"}>{amount} Reviews</Typography>
                        </TableCell>  
                    </TableRow>
                )}
            </Table>
        </Paper>
    );
}
