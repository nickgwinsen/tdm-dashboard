import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

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
  { field: "word", headerName: "Word", width: 150 },
  { field: "appearances", headerName: "Appearances", flex: 1 },
];

// later on will want to get data from api with fetch and then convert
// to array
const rows = [
  createData("good", 53435),
  createData("food", 52033),
  createData("truck", 42609),
  createData("place", 41471),
  createData("great", 40256),
];

export default function CommonWords() {
  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}
