import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "20px",
  },
  tabs: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 6,
      minWidth: 20,
    },
  },
}));

export default useStyles;