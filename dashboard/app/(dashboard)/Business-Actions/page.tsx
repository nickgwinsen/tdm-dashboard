"use client";
import Table from "../../components/Table"; 

let i = 0;

function createData(action: string, priority: string) {
  const data = {
    id: i,
    action: action,
    priority: priority,
  };
  i += 1;
  return data;
}

const columns = [
  { field: 'id', headerName: 'No.' },
  { field: 'action', headerName: 'Action' },
  { field: 'priority', headerName: 'Priority', flex: 1 },
];

const autoSizeOptions = {
    columns: columns.map((c) => {
        return c.field;
    }),
    includeHeaders: true,
    expand: true,
};
// Example rows; 
const rows = [
  createData('Improve food quality', 'High'),
  createData('Hire more staff', 'Medium'),
  createData('Clean bathrooms', 'High'),
  createData('Increase product variety', 'Low'),
  createData('Implement new marketing strategy', 'Medium'),
  createData('Improve lighting in parking lots', 'Medium'),
];



export default function CommonWords() {
    return (
        <>
            <Table
                rows={rows}
                columns={columns}
                autoSize
                autosizeOptions={autoSizeOptions}
            />
        </>
    );
}