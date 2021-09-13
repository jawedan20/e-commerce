import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { baseUrl } from "../utils/url";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Image from "next/image";
import style from "../styles/sellerContent.module.css";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

const useRowStyles = makeStyles({
    root: {
        "& > *": {
            borderBottom: "unset",
        },
    },
});

function Row({ row }) {
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    let stock = 0;
    let price = new Array();
    for (let i = 0; i < row.varian.length; i++) {
        price[i] = row.varian[i].price;
    }
    for (let i = 0; i < row.varian.length; i++) {
        stock += row.varian[i].stock;
    }
    console.log(price);
    return (
        <React.Fragment>
            <TableRow className={classes.root} key={row.id}>
                <TableCell component="th" scope="row">
                    <div className={style.one}>
                        <div style={{ width: "60px" }}>
                            <Image
                                className={style.img}
                                src={baseUrl(row.thumb.image)}
                                width="fit-content"
                                height="fit-content"
                                layout="responsive"
                                quality={50}
                            />
                        </div>
                        <div className={style.name}>
                            <h5>{row.title}</h5>
                            <p>sold : 2</p>
                        </div>
                    </div>
                </TableCell>
                <TableCell>
                    Rp{Math.min(...price)} - Rp{Math.max(...price)}
                </TableCell>
                <TableCell>{stock}</TableCell>
                <TableCell>
                    <EditOutlinedIcon />
                    <DeleteOutlineRoundedIcon style={{ marginLeft: "10px" }} />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Box
                            width="83%"
                            bgcolor="#f8f8f8"
                            marginBottom="15px"
                            borderRadius="10px"
                            padding="5px 10px"
                        >
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                onClick={() => setOpen(!open)}
                            >
                                <h5>See Product Variant</h5>
                                <IconButton aria-label="expand row" size="small">
                                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                            </Box>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <Table size="small" aria-label="purchases">
                                    <TableBody>
                                        {row.varian.map((variant) => (
                                            <TableRow key={variant.id}>
                                                <TableCell width="36%" component="th" scope="row">
                                                    {variant.name}
                                                </TableCell>
                                                <TableCell width="30%">
                                                    <div className={style.inputPrice}>
                                                        <h4>Rp</h4>
                                                        <input
                                                            type="number"
                                                            value={variant.price}
                                                        />
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <input
                                                        className={style.input}
                                                        value={variant.stock}
                                                        type="number"
                                                    />
                                                </TableCell>
                                                <TableCell width="5%">
                                                    <DeleteOutlineRoundedIcon />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Collapse>
                        </Box>
                    </Box>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const useStyles = makeStyles({
    table: {
        minWidth: 800,
    },
    img: {
        borderRadius: 8,
    },
});

export default function TableProduct({ data }) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell width="45%">
                            {" "}
                            <h5>INFO PRODUCT</h5>
                        </TableCell>
                        <TableCell width="20%">
                            <h5>PRICE</h5>
                        </TableCell>
                        <TableCell width="20%">
                            <h5>STOCK</h5>
                        </TableCell>
                        <TableCell width="15%">
                            <h5>ACTION</h5>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{data && data.map((row) => <Row key={row.id} row={row} />)}</TableBody>
            </Table>
        </TableContainer>
    );
}
