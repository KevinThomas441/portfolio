import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = ({small, color}) =>
 makeStyles(
  (theme) => ({
    root: {
        height: small ? 96: 128,
        width: small ? 96: 128,
        display:"flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
        backgroundColor: color || "#727272",
        borderRadius: theme.spacing(2),
        color: color === "#FAF3DD" ? "#707070" : "#FFFFFF",
        margin: theme.spacing(0.75),
        padding: theme.spacing(1.25)
    },
    title: {
      flexGrow: 1,
      fontFamily: `'Open Sans', sans-serif`,
      fontWeight: 900,
      fontSize: small ? "1.6rem": "2.4rem"
    },
    caption: {
      fontFamily: `'Open Sans', sans-serif`,
      fontWeight: 400,
      fontSize: small ? "0.75rem": "0.75rem"
    },
    category: {
        height: small ? 96: 128,
        width: 256,
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: color || "#727272",
        borderRadius: theme.spacing(2),
        color: color === "#FAF3DD" ? "#707070" : "#FFFFFF",
        margin: theme.spacing(0.75),
        padding: theme.spacing(1.25),
        borderColor: "#C1C1C1",
        borderWidth: 2,
        border: "solid"
    },
    catTitle: {
      flexGrow: 1,
      fontFamily: `'Open Sans', sans-serif`,
      fontWeight: 900,
      fontSize: small ? "0.75rem": "1.6rem",
      textAlign: "center"
    }
  }),
  { index: 1 }
);

const AddSkill = ({title, caption, small, color, category}) => {
  const styles = useStyles({small, color})();
  return (
    category ? (
    <Box classes={{ root:styles.category }}>
      <Typography variant= "h5" classes={{root:styles.catTitle}}>
        {category}
      </Typography>
    </Box> 
    ) : (
    <Box classes={{ root:styles.root }}>
      <Typography variant={small ? "h6": "h3"} classes={{root:styles.title}}>
        {title}
      </Typography>
      <Typography classes={{root:styles.caption}}>
        {caption}
        </Typography>
    </Box> 
    )
    
  )
};

export default AddSkill;