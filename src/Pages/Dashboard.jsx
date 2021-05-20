import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Nav from "../Components/Navbar";
import Pagination from '@material-ui/lab/Pagination'

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function Dashboard() {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [totalPage, setTotalPage] = useState(5)

    const getData = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            setData(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div>
            <Nav />
            <br />
            <input
                type="text"
                placeholder="Search name here"
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
            <br />
            <br />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Username</StyledTableCell>
                            <StyledTableCell>Email</StyledTableCell>
                            <StyledTableCell>Phone</StyledTableCell>
                            <StyledTableCell>Website</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                            .filter((item) => {
                                if (search === "") {
                                    return item;
                                } else if (
                                    item.name.toLowerCase().includes(search.toLowerCase())
                                ) {
                                    return item;
                                } else if (
                                    item.username.toLowerCase().includes(search.toLowerCase())
                                ) {
                                    return item;
                                } else if (
                                    item.email.toLowerCase().includes(search.toLowerCase())
                                ) {
                                    return item;
                                } else if (
                                    item.phone.toLowerCase().includes(search.toLowerCase())
                                ) {
                                    return item;
                                } else if (
                                    item.website.toLowerCase().includes(search.toLowerCase())
                                ) {
                                    return item;
                                }
                            })
                            .map((item) => {
                                return (
                                    <StyledTableRow key={item.id}>
                                        <StyledTableCell component="th" scope="row">
                                            {item.name}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {item.username}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {item.email}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {item.phone}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {item.website}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>

            <Pagination count={totalPage} color="primary" />
        </div>

    );
}