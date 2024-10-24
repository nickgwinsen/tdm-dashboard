"use client";
import { Stack } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import CategoryDropDown from "./CategoryDropdown";

// Reusable SelectDistrict component
function DistrictDropdown({
    districts,
    label,
    value,
    onChange,
}: {
    districts: Array<{ id: number; name: string }>;
    label: string;
    value: string;
    onChange: (event: SelectChangeEvent) => void;
}) {
    return (
        <FormControl sx={{ minWidth: 120, mb: 2 }} size="small">
            <InputLabel id="select-district-label">{label}</InputLabel>
            <Select
                labelId="select-district-label"
                id="select-district"
                value={value}
                label={label}
                onChange={onChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {districts.map((district) => (
                    <MenuItem key={district.id} value={district.id}>
                        {district.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

// Usage of SelectDistrict component
export default function App() {
    const [selectedDistrict, setSelectedDistrict] = React.useState("");

    const handleDistrictChange = (event: SelectChangeEvent) => {
        setSelectedDistrict(event.target.value as string);
    };

    const districtList = [
        { id: 1, name: "District 1" },
        { id: 2, name: "District 2" },
        { id: 3, name: "District 3" },
        { id: 4, name: "District 4" },
        { id: 5, name: "District 5" },
        { id: 6, name: "District 6" },
        { id: 7, name: "District 7" },
        { id: 8, name: "District 8" },
        { id: 9, name: "District 9" },
        { id: 10, name: "District 10" },
        { id: 11, name: "District 11" },
        { id: 12, name: "District 12" },
        { id: 13, name: "District 13" },
        { id: 14, name: "District 14" },
        { id: 15, name: "District 15" },
        { id: 16, name: "District 16" },
        { id: 17, name: "District 17" },
        { id: 18, name: "District 18" },
        { id: 19, name: "District 19" },
        { id: 20, name: "District 20" },
        { id: 21, name: "District 21" },
        { id: 22, name: "District 22" },
        { id: 23, name: "District 23" },
        { id: 26, name: "District 26" },
        { id: 27, name: "District 27" },
        { id: 28, name: "District 28" },
        { id: 29, name: "District 29" },
        { id: 30, name: "District 30" },
        { id: 31, name: "District 31" },
        { id: 32, name: "District 32" },
        { id: 33, name: "District 33" },
        { id: 34, name: "District 34" },
    ];

    return (
        <Stack direction="row" spacing={1}>
            <DistrictDropdown
            districts={districtList}
            
            label="District"
            value={selectedDistrict}
            onChange={handleDistrictChange}
            />
            <CategoryDropDown/>
        </Stack>
    );
}
