import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function CardEvent() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://img.okezone.com/content/2020/06/25/320/2236207/cara-berdiskusi-dalam-meeting-kontrol-cara-bicaramu-szuNU7LDub.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h7" component="h5">
                        Pisangan Timur, Jakarta
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Meeting With CEO
                    </Typography>
                    <Typography gutterBottom variant="h7" component="h7">
                        17 Agustus 2020
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Typography gutterBottom variant="h7" component="h5">
                    Taofik Rakhman Sudrajat
                </Typography>
            </CardActions>
        </Card>
    );
}
