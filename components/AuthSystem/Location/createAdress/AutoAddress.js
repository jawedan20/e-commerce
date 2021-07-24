import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import axiosInstance from "../../../../utils/axios";

export default function Grouped({ setData }) {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState(null);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const getFistlatter = (name) => {
        const fistlatter = name[0].toUpperCase();
        return /[0-9]/.test(fistlatter) ? "0-9" : fistlatter;
    };
    useEffect(() => {
        if (input.length > 3) {
            setLoading(true);
            axiosInstance
                .get(`api/auth/location/address/?search=${input}`)
                .then((res) => {
                    setLoading(false);
                    setOptions(res.data);
                })
                .catch((e) => (axios.isCancel(e) ? console.clear() : console.log(e.request)));
        }
    }, [input]);

    useEffect(() => {
        if (!open) setOptions([]);
    }, [open]);

    return (
        <Autocomplete
            id="province"
            style={{ width: 300, marginRight: "15px", marginBottom: "20px" }}
            open={open}
            value={value}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            onChange={(event, newValue) => {
                setValue(newValue);
                setData((prev) => ({
                    ...prev,
                    city: { ...newValue, select: null },
                }));
            }}
            inputValue={input}
            onInputChange={(event, newInputValue) => setInput(newInputValue)}
            getOptionLabel={(option) =>
                option ? `${option.province_name}, ${option.city}, ${option.sub_district}` : ""
            }
            getOptionSelected={(option, value) => option.province_name === value.province_name}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="City or Sub District"
                    variant="outlined"
                    size="small"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />
    );
}
