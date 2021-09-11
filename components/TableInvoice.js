import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
const useStyles = makeStyles({
    table: {
        minWidth: 600,
    },
});

export default function TableInvoice({ data }) {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <StyledTableRow>
                        <TableCell colSpan={2}>
                            <b>Invoices</b>
                        </TableCell>
                        <TableCell align="right" colSpan={2}>
                            <a href="/user/store/order">View More</a>
                        </TableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <TableCell>Invoice ID</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell>Order Status</TableCell>
                        <TableCell>Date</TableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {data &&
                        data.map((item) => (
                            <StyledTableRow key={item.order_key}>
                                <TableCell size="medium">{item.order_key}</TableCell>
                                <TableCell>{item.customer}</TableCell>
                                <TableCell>{item.order_status}</TableCell>
                                <TableCell>{item.create_at}</TableCell>
                            </StyledTableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
