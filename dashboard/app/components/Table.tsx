import InboxIcon from "@mui/icons-material/Inbox";
import { debounce, LinearProgress, Typography } from "@mui/material";
import {
    DataGrid,
    DataGridProps,
    GridColDef,
    GridSlots,
    GridValidRowModel,
    useGridApiRef,
} from "@mui/x-data-grid";
import { useCallback, useEffect } from "react";
import { useTheme } from "@mui/material/styles";

interface IDataTableProps<TRow extends GridValidRowModel> {
    /**
     * Rows of the table.
     *
     */
    rows: TRow[];
    /**
     * Columns of the table.
     *
     */
    columns: GridColDef<TRow>[];
    /**
     * Title of the table.
     *
     */
    title?: string;
    /**
     * Whether to auto size the columns.
     * @default false
     */
    autoSize?: boolean;
}

// This is a custom overlay for when there are no rows (data) in the table
function NoRowsOverlay() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 50,
            }}
        >
            <InboxIcon
                color={"primary"}
                style={{ fontSize: 128, opacity: 0.4 }}
            />
            <Typography variant={"body2"}>No Data Available</Typography>
        </div>
    );
}

/**
 * Custom implementation of MUI DataGrid component for our use.
 * Custom styles for the table, and overlays for no data and loading.
 *
 */
export const DataTable = <TRow extends GridValidRowModel>({
    rows,
    columns,
    autosizeOptions,
    apiRef,
    sx,
    autoSize = false,
    title,
    ...other
}: IDataTableProps<TRow> &
    Omit<DataGridProps, "rows" | "columns" | "autosizeOnMount">) => {
    const gridApiRef = useGridApiRef();
    const baseApiRef = apiRef || gridApiRef;

    const handleAutoSize = useCallback(() => {
        if (!autoSize) return;
        baseApiRef.current.autosizeColumns(autosizeOptions);
    }, [autoSize, baseApiRef, autosizeOptions]);

    const theme = useTheme();
    const isDarkMode = theme.palette.mode == "dark";
    const tableStyles = {
        bgcolor: "background.paper",

        "& .MuiDataGrid-columnHeader": {
            bgcolor: "primary.main",
            color: isDarkMode ? "#000000" : "#FFFFFF",
        },
        "& .MuiDataGrid-filler": {
            bgcolor: "primary.main",
        },

        "& .MuiDataGrid-topContainer": {
            bgcolor: "primary.main",
        },
        "& .MuiDataGrid-columnHeader .MuiDataGrid-checkboxInput": {
            color: "#FFFFFF",
        },
        "& .MuiDataGrid-iconButtonContainer button ": {
            color: "#FFFFFF",
        },

        "& .MuiDataGrid-menuIcon button": {
            color: "#FFFFFF",
        },
        "--DataGrid-overlayHeight": "200px",

        ".MuiDataGrid-cell--editable:focus": {
            outline: "solid !important",
            outlineWidth: "1px !important",
            outlineColor: "#A263B4 !important",
        },

        ".MuiDataGrid-cell:focus": {
            outline: "none",
        },

        "&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell": {
            py: "8px",
        },
        "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": {
            py: "15px",
        },
        "&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell": {
            py: "22px",
        },
    };

    // autosize columns on data change
    useEffect(() => {
        setTimeout(() => {
            handleAutoSize();
        }, 100);
    }, [baseApiRef, autoSize, autosizeOptions, rows, handleAutoSize]);

    // autosize columns on columns change
    useEffect(() => {
        handleAutoSize();
    }, [columns, handleAutoSize]);

    // autosize columns on window resize
    useEffect(() => {
        const onResize = debounce(handleAutoSize, 100);

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, [handleAutoSize]);

    return (
        <>
            <Typography variant="h5" sx={{ mb: 2 }}>
                {title}
            </Typography>
            <DataGrid
                autoHeight
                apiRef={baseApiRef}
                rows={rows}
                columns={columns}
                disableRowSelectionOnClick
                sx={{ ...tableStyles, ...sx }}
                autosizeOnMount={autoSize}
                autosizeOptions={autosizeOptions}
                getRowHeight={() => "auto"}
                slots={{
                    noRowsOverlay: NoRowsOverlay,
                    loadingOverlay:
                        LinearProgress as GridSlots["loadingOverlay"],
                }}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                slotProps={{
                    filterPanel: {
                        filterFormProps: {
                            operatorInputProps: {
                                disabled: true,
                                sx: { display: "none" },
                            },
                        },
                    },
                }}
                {...other}
            />
        </>
    );
};
export default DataTable;
