import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles =makeStyles({
    image:{
        width: "100%",
        height: 300,
        objectFit: 'cover'
    }
})


const Images = ({ image }) => {
    const classes = useStyles();
    return(
        <Card>
        <img src={image.largeImageURL} className={classes.image}/>
        </Card>
    )
}

export default Images;