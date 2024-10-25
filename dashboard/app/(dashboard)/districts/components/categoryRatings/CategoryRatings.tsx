"use client";

import * as React from "react";
import { Paper, Rating, Typography } from "@mui/material";

// this does NOT get anything from the actual data, since it really isnt availlable and we dont have filtering

import categoriesJSON from "./categories.json";
import DataTable from "@/app/components/Table";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

const ratings: {id: number, category:string; rating:number; reviews:number;}[] = [];

var rating = 1;
var id = 0;

for (var category in categoriesJSON){
    ratings.push({id: id, category:category, rating:rating, reviews:100 * rating});

    rating += .5;
    id++;
}

export function renderRating(params: GridRenderCellParams<any, number, any>) {
    if (params.value == null) {
      return '';
    }
  
    return <Rating value={params.value} readOnly precision={.1}/>;
}

const columns: GridColDef<(typeof ratings)[number]>[] = [
    {
        field: 'category',
        headerName: 'Category',
    },
    {
        field: 'rating',
        headerName: 'Rating',
        align:"left",
        renderCell: renderRating,
        flex:1,
    },
    {
        field: 'reviews',
        headerName: 'Reviews',
        editable: false,
    }
];

const autoSizeOptions = {
    columns: columns.map((c) => {
        return c.field;
    }),
    expand: true,
    includeHeaders: true,
    includeOutliers: true,
};

export default function CategoryPage() {
    return (
        <Paper variant="outlined" sx={{ p: 2, height: "100%" }}>
            <Typography variant={"h6"}>Ratings By Category</Typography>
            <DataTable 
                columns={columns}
                rows = {ratings}
                autoSize
                autosizeOptions={autoSizeOptions}
                />
        </Paper>
    );
}
