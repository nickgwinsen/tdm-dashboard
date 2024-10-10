import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";

function createData(word: string, numOfAppearances: number) {
  return {
    word,
    numOfAppearances,
  };
}

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
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Word</TableCell>
            <TableCell>Appearances</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((r) => {
            return (
              <TableRow
                key={r.word}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{r.word}</TableCell>
                <TableCell>{r.numOfAppearances}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
