import {AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core';
import CollectionsIcon from '@material-ui/icons/Collections';

const userstyles = makeStyles({
    component:{
        background: '#445A65'
    }
})

const Navbar = ()=>{
    const classes = userstyles();
    return (
        <AppBar className={classes.component} position="static">
            <Toolbar>
                <CollectionsIcon/>
                <Typography variant="h5" style={{marginLeft: 10}}>Image Finder</Typography>

            </Toolbar>
        </AppBar>
    );
}

export default Navbar;