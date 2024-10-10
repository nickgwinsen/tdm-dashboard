import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

// this does NOT get anything from the actual data, since it really isnt availlable and we dont have filtering

const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'category', headerName: 'Category', width: 250},
    { field: 'rating', headerName: "Star Rating", type: 'number'}
];

const rows = [
    {id: 0, category: "Service", rating:1.5},
    {id: 1, category: "Food", rating:2.0},
    {id: 2, category: "Parking", rating:3.0},
    {id: 3, category: "Bathrooms", rating:4.0},
    {id: 4, category: "Truck Maintenance", rating:5.0},
];

/*
for (int num in categories.length) 
{
    string category = categories[num];
    double rating = categories[num]; // somehow differentiate

    rows.add{id: num, category: category.title(), rating: rating};
    columns.add({field: category, headerName: category.title()});
}
*/

export default function CategoryPage() {
    return (
        <Box>
            <Typography>Simple Example Grid:</Typography>
            <DataGrid 
                rows = {rows}
                columns = {columns}
            />
        </Box>
    );
}
