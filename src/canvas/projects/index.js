import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(
    (theme) => ({
      root: {
          mainTop: theme.spacing(4)
      },
      main: {
          minHeight: 725,
          background: "#9191E9",
          color:"#FFFFFF",
          padding: theme.spacing(2, 4)
      }
    }),
    { index: 1 }
  );

const Projects = () => {
    const styles = useStyles()
    return (
        <Grid item classes={{ root:styles.root }} component="section" id="projects">
            <Paper classes={{ root:styles.main}} square elevation={0}>
                <Typography variant="h3">Projects</Typography>
                <Typography variant="body1">subtitle</Typography>
            </Paper>
        </Grid>
    );
}
export default Projects;