import React from 'react';
import { Grid, Typography, Paper, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(
    (theme) => ({
      root: {
          padding: theme.spacing(4, 8)
      },
      main: {
          minHeight: 675,
          background: "#C2AFF0",
          color:"#FFFFFF",
          padding: theme.spacing(2, 4),
          borderRadius: theme.spacing(4)
      },
      tiles: {
          display: "flex",
          flexDirection: "row"
      },
      skills: {
          marginBottom: theme.spacing(2)
      }
    }),
    { index: 1 }
  );

const Skills = ({children}) => {
    const styles = useStyles()
    return (
        <Grid item classes={{ root:styles.root }} component="section" id="skills">
            <Paper classes={{ root:styles.main}} elevation={0}>
                <Typography variant="h3" classes={{root:styles.skills}}>
                    Skills
                </Typography>
                {children}
            </Paper>
        </Grid>
    );
}
export default Skills;