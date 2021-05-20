import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Nav from '../Components/Navbar'
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Moment from 'moment'

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
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
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

export default function AddEvent() {
    const classes = useStyles();
    const [title, setTitle] = useState(null)
    const [location, setLocation] = useState(null)
    const [participant, setParticipant] = useState(null)
    const [date, setDate] = useState(Moment().format("YYYY-MM-DD"))
    const [note, setNote] = useState(0)

    return (
        <React.Fragment>
            <CssBaseline />
            <Nav />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        + Add Event
                    </Typography>
                    <React.Fragment>
                        <React.Fragment>
                            <React.Fragment>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="title"
                                            name="title"
                                            label="Title"
                                            fullWidth
                                            onChange={event => setTitle(event.target.value)}
                                            error={title === ""}
                                            helperText={title === "" ? 'Title tidak boleh kosong!' : ' '}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="location"
                                            name="location"
                                            label="Location"
                                            fullWidth
                                            onChange={event => setLocation(event.target.value)}
                                            error={location === ""}
                                            helperText={location === "" ? 'Location tidak boleh kosong!' : ' '}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="participant"
                                            name="participant"
                                            label="Participant"
                                            fullWidth
                                            onChange={event => setParticipant(event.target.value)}
                                            error={participant === ""}
                                            helperText={participant === "" ? 'Participant tidak boleh kosong!' : ' '}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            id="date"
                                            label="Date"
                                            type="date"
                                            defaultValue={date}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            fullWidth
                                            onChange={event => setDate(event.target.value)}
                                            error={date === ""}
                                            helperText={date === "" ? 'Date tidak boleh kosong!' : ' '}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            id="note"
                                            label="Note"
                                            multiline
                                            rows={5}
                                            variant="outlined"
                                            fullWidth
                                            onChange={event => setNote(event.target.value)}
                                            error={(note === "") || (note.length < 50)}
                                            helperText={(note === "") || (note.length < 50) ? 'Note tidak boleh kurang dari 50 huruf!' : ' '}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <input
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                            id="raised-button-file"
                                            multiple
                                            type="file"
                                        />
                                        <label htmlFor="raised-button-file">
                                            <Button color="default" variant="contained" component="span">
                                                Upload Picture
                                            </Button>
                                        </label>
                                    </Grid>
                                </Grid>
                            </React.Fragment>
                            <div className={classes.buttons}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                >
                                    Submit
                                </Button>
                            </div>
                        </React.Fragment>
                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment>
    );
}
