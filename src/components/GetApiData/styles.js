import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 60,
  },
  loading: {
    padding: 60,
    paddingBottom: "100%",
    paddingTop: "20%",
    display: "flex",
    justifyContent: "center",
  },
}));

export default useStyles;