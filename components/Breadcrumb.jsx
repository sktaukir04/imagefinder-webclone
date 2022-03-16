import { Box, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    component: {
        background: "#f6f6f6",
        // '& > *': {
        //     margin: theme.spacing(1)
        // }
    }
}))


const Breadcrumb = ({onTextChange,onCountChange}) => {
    const classes = useStyles();
    return (
        <Box m={1} className={classes.component}>
        <TextField 
            label = "Search Images"
            onChange={(e)=> onTextChange( e.target.value)}
        />
        <TextField
            label = "Search Images"
             onChange={(e)=> onCountChange( e.target.value)}
        />
        
        </Box>
    )
}


export default Breadcrumb;