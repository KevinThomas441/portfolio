import React from 'react';
import { Grid } from '@material-ui/core';

const useStyle = makeStyle(theme => {
    root: {flexGrow: 1}
})

const BaseLayout = () => {
    return <Grid container></Grid>
}