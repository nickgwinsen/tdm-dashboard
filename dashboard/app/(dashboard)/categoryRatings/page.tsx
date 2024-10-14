'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { GridColDef, GridToolbarContainer } from '@mui/x-data-grid';
import Table from '../../components/Table';

// this does NOT get anything from the actual data, since it really isnt availlable and we dont have filtering

const columns: GridColDef<(typeof rows)[number]>[] = [];

const rows: any[] = [];

import categoriesJSON from "./categories.json";

const categories = Object.entries(categoriesJSON);
// get the categories json

for (var num = 0; num < categories.length; num++) 
{
    var category = categories[num][0];

    columns.push({field: category, headerName: category});
}

rows.push({id:0, "Food":1.0, "Service":2.0, "Cleanliness":5.0, "Parking":"N/A"});

// previous title function, still here just incase, but should be removed soon
function DataGridTitle(){
    return (
        <GridToolbarContainer sx={{bgcolor:"primary.main"}}>
            <Box style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Typography variant="h5" color='black'>Ratings By Category</Typography>
            </Box>
        </GridToolbarContainer>
    );
}

export default function CategoryPage() {
    return (
        <Box style = {{width:"auto"}}>
            <Typography>Grid now with auto columns:</Typography>
            <Table
                title='Ratings By Category'

                slots = {{toolbar: DataGridTitle}}

                rows = {rows}
                columns = {columns}

                hideFooter
                autoSize
                disableColumnMenu
                disableColumnSorting
                disableColumnResize
            />
        </Box>
    );
}
