import React from 'react';
import { Grid, makeStyles, CssBaseline } from '@material-ui/core';

const useStyle = makeStyles(theme =>({
    root: {flexGrow: 1}
}));

const BaseLayout = ({ navigation, children, footer }) => {
    return <React.Fragment>
        <CssBaseline />
        <Grid container>
            <Grid item>{navigation}</Grid>
            <Grid item>{children}</Grid>
            <Grid item>{footer}</Grid>
        </Grid>
    </React.Fragment>
}

export default BaseLayout;