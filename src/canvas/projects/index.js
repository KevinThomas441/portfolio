import React from 'react';
import { Grid, Typography, Paper, Link, IconButton, Box, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import bg from '../../assets/tossitright/background.jpg';

const useStyles = makeStyles(
    (theme) => ({
      root: {
          mainTop: theme.spacing(4)
      },
      main: {
          minHeight: 440,
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundScale: "fill",
          color: "#FFFFFF",
          padding: theme.spacing(2, 4)
      },
      header: {
          display: "flex",
          flexDirection: "column",
          marginTop: theme.spacing(5)
      },
      heading: {
          flowGrow: 1,
          marginBottom: 2
      },
      tags: {
          marginRight: theme.spacing(1.5),
          marginBottom: theme.spacing(1.5),
          opacity: 0.8
      },
      wapTag: {
          width: "45%"
      }
    }),
    { index: 1 }
  );

const Projects = ({title, caption, tags}) => {
    const styles = useStyles()
    return (
        <Grid item classes={{ root:styles.root }} component="section" id="projects">
            <Paper classes={{ root:styles.main}} square elevation={0}>
                <Box classes={{root:styles.header}}>
                    <Box classes = {{root:styles.heading}}>
                        <Typography variant="h3">
                            {title}{" "}
                            <Link>
                                <IconButton>
                                </IconButton>
                            </Link>
                        </Typography>
                        <Typography variant="body1">{caption}</Typography>
                    </Box>
                    <Box classes={{root:styles.wrapTag}}>
                        {console.log(tags)}
                        {
                            tags.map((tag) => ( 
                                <Chip label={tag} key={tag} classes={{root:styles.tags}}/>
                            ))
                        }
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
}
export default Projects;