import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(
    (theme) => ({
      root: {
          padding: theme.spacing(4, 8)
      },
      main: {
          minHeight: 440,
          background: "#9191E9",
          color:"#B01307",
          padding: theme.spacing(2, 4),
          borderRadius: theme.spacing(4)
      }
    }),
    { index: 1 }
  );

const Skills = () => {
    const styles = useStyles()
    return (
        <Grid item classes={{ root:styles.root }} component="section" id="skills">
            <Paper classes={{ root:styles.main}} elevation={0}>
                <Typography variant="h3">title</Typography>
                <Typography variant="body1">subtitle</Typography>
            </Paper>
        </Grid>
    );
}
export default Skills;