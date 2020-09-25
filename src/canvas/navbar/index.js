import React from 'react';
import { Avatar, Toolbar, makeStyles, Typography } from '@material-ui/core';
import NavLink from './navlink';

const useStyle = makeStyles((theme) =>({
    root: {},
    title: {
        marginLeft: theme.spacing(1)
    },
    fillSpace: {
        flexGrow:1
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        marginLeft: theme.spacing(3)
    }
})
);

const NavBar = () => {
    const classes = useStyle();
    return (
    <Toolbar>
        <Avatar alt="Kevin Thomas" src = "/assets/kevin.png" />
        {/* <Typography classes = {{root:classes.title}}>
            Kevin Thomas
        </Typography> */}
        <div className = {classes.fillSpace}></div>
        <NavLink url="#" label="about" active/>
        <NavLink url="#" label="projects"/>
        <NavLink url="#" label="skills"/>
        <NavLink url="#" label="experience"/>
        <Avatar alt="LinkedIn" src = "/assets/kevin.png" className={classes.small}/>
        <Avatar alt="Github" src = "/assets/kevin.png" className={classes.small}/>
        <Avatar alt="Email" src = "/assets/kevin.png" className={classes.small}/>
    </Toolbar>
    )
}

export default NavBar