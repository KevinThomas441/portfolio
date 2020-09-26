import React from 'react';
import { Grid, Avatar, Box, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(
    (theme) => ({
      root: {
          display:"flex",
          flexdirection:"row",
          alignitems:"center",
          minimumheight: 440
      },
      avatar: {
          marginRight: theme.spacing(4),
          height:128,
          width:128
      },
      aboutlink: {
          justifyContent: "flex-end",
          display: "flex",
          textDecoration: "none"
      }
    }),
    { index: 1 }
  );

const Header = ({ title, caption }) => {
    const styles = useStyles()
    return (
        <Grid item>
            <Grid container component="header" justify="center">
                <Grid item xs={11} md={6} classes={{ root: styles.root }}>
                    <Avatar alt="Kevin Thomas" classes={{ root: styles.avatar }} src = "./assets/kevin.png" />
                    <Box>
                        <Typography variant="h3">{title}</Typography>
                        <Typography variant="body1">{caption}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={11} classes={{ root: styles.aboutlink }}>
                    <Link underline="none" href="#about">more about me</Link>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Header;