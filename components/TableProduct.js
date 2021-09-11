import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Image from "next/image";
import { TextField, InputAdornment } from "@material-ui/core";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    img: {
        borderRadius: 8,
    },
    one: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
});

function createData(name, fat, carbs, protein) {
    return { name, fat, carbs, protein };
}

const rows = [
    createData("Frozen yoghurt", 6.0, 24, 4.0),
    createData("Ice cream sandwich", 9.0, 37, 4.3),
];

const TableProduct = () => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>INFO PRODUCT</TableCell>
                        <TableCell>PRICE</TableCell>
                        <TableCell>STOCK</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell className={classes.one} component="th" scope="row">
                                <div style={{ width: "60px" }}>
                                    <Image
                                        className={classes.img}
                                        src="/sapatu.jpg"
                                        width="fit-content"
                                        height="fit-content"
                                        layout="responsive"
                                        quality={50}
                                    />
                                </div>
                                <div style={{ marginLeft: "15px" }}>
                                    <h5>Muhammada jawahiruzzmana</h5>
                                    <p>sold : 2</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">Rp</InputAdornment>
                                        ),
                                    }}
                                />
                            </TableCell>
                            <TableCell>
                                <TextField variant="outlined" size="small" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableProduct;
