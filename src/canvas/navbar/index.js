import React from 'react';
import { Avatar, Toolbar, makeStyles, Typography } from '@material-ui/core';
import NavLink from './navlink';

const useStyle = makeStyles((theme) =>({
    root: {
        padding: theme.spacing(1,4)
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
    <Toolbar classes = {{root:classes.root}}>
        <Typography>
            Kevin
        </Typography>
        <div className = {classes.fillSpace}></div>
        <NavLink url="#projects" label="projects"/>
        <NavLink url="#skills" label="skills"/>
        <NavLink url="#experience" label="experience"/>
        <NavLink url="#about" label="about"/>
        <div className = {classes.fillSpace}></div>
        <Avatar alt="LinkedIn" src = "/assets/kevin.png" className={classes.small}/>
        <Avatar alt="Github" src = "/assets/kevin.png" className={classes.small}/>
        <Avatar alt="Email" src = "/assets/kevin.png" className={classes.small}/>
    </Toolbar>
    )
}

export default NavBar