import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    color: '#E6E7EA'
  },
});

const BlankPreview = props => {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          There is no preview.
        </Typography>
        <Typography component="p">
          Please toggle the preview with the icon to the right.
        </Typography>
      </Paper>
    </div>
  );
}

BlankPreview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlankPreview);
