import React from 'react'
import Nav from '../Components/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Card from '../Components/CardEvent'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 1200,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        display: 'flex'
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
}));

export default function Main() {
    const classes = useStyles();

    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Nav />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <Card />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Card />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Card />
                            </Grid>
                        </Grid>
                    </Paper>
                </main>
            </React.Fragment>
        </div>
    )
}