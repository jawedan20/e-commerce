import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function OrderInvoice({ data }) {
    const classes = useStyles();
    const { order_key, create_at, customer, order_status } = data;

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Order Key</TableCell>
                        <TableCell align="right">Customer</TableCell>
                        <TableCell align="right">Status order</TableCell>
                        <TableCell align="right">Date order</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow key={order_key}>
                            <TableCell component="th" scope="row">
                                {order_key}
                            </TableCell>
                            <TableCell align="right">{customer}</TableCell>
                            <TableCell align="right">{order_status}</TableCell>
                            <TableCell align="right">{create_at}</TableCell>
                        </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
