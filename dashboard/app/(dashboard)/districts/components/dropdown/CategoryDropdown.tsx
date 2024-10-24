"use client";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

// this is basically a copy of district, but for categories
function CDropdown({
    categories,
    label,
    value,
    onChange,
}: {
    categories: Array<{ id: number; name: string }>;
    label: string;
    value: string;
    onChange: (event: SelectChangeEvent) => void;
}) {
    return (
        <FormControl sx={{ minWidth: 120, mb: 2 }} size="small">
            <InputLabel id="select-category-label">{label}</InputLabel>
            <Select
                labelId="select-category-label"
                id="select-category"
                value={value}
                label={label}
                onChange={onChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {categories.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                        {category.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

import catJSON from "../categoryRatings/categories.json";

// Usage of SelectDistrict component
export default function CategoryDropDown() {
    const [selectedCategory, setSelectedDistrict] = React.useState("");

    const handleDistrictChange = (event: SelectChangeEvent) => {
        setSelectedDistrict(event.target.value as string);
    };

    const categoryList: { id: number; name: string; }[] = [];

    const categoriesJSON = Object.entries(catJSON);

    for (let catNum = 0; catNum < categoriesJSON.length; catNum++){
        categoryList.push({id: catNum, name:categoriesJSON[catNum][0]})
    }

    return (
        <CDropdown
            categories={categoryList}
            label="Category"
            value={selectedCategory}
            onChange={handleDistrictChange}
        />
    );
}
