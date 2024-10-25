"use client";
import { Paper } from "@mui/material";
import Table from "../../../../components/Table";

var i = 0;

function createData(word: string, appearances: number) {
    const data = {
        id: i,
        word: word,
        appearances: appearances,
    };
    i += 1;
    return data;
}

const columns = [
    { field: "word", headerName: "Word" },
    { field: "appearances", headerName: "Appearances", flex: 1 },
];

const autoSizeOptions = {
    columns: columns.map((c) => {
        return c.field;
    }),
    includeHeaders: true,
    expand: true,
};

// later on will want to get data from api with fetch and then convert
// to array
const rows = [
    createData("good", 53435),
    createData("food", 52033),
    createData("truck", 42609),
    createData("place", 41471),
    createData("great", 40256),
    createData("stop", 38129),
];

export default function CommonWords() {
    return (
        <>
            <Paper
                variant="outlined"
                sx={{ p: 2, height: "100%", minHeight: 450 }}
            >
                <Table
                    title="Most Common Words"
                    rows={rows}
                    columns={columns}
                    autoSize
                    autosizeOptions={autoSizeOptions}
                />
            </Paper>
        </>
    );
}
