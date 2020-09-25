import React from 'react';
import { Grid, Avatar, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(
    (theme) => ({
      root: {
          display:"flex",
          flexdirection:"row",
          alignitems:"center",
          minimumheight:360
      },
      avatar: {
          marginRight: theme.spacing(4),
          height:128,
          width:128
      }
    }),
    { index: 1 }
  );

const Header = ({ title, caption }) => {
    const styles = useStyles()
    return (
        <Grid container component="header" justify="center">
            <Grid item xs={11} md={6} classes={{ root: styles.root }}>
                <Avatar alt="Kevin Thomas" classes={{ root: styles.avatar }} />
                <Box>
                    <Typography variant="h3">{title}</Typography>
                    <Typography variant="h5">{caption}</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
export default Header;