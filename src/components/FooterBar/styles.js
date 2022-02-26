import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#1E2833",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  img: {
    marginLeft: "10%",
  },
  divider: {
    width: "80%",
    marginLeft: "10%",
    backgroundColor: "white",
    height: "1px",
    opacity: 0.1,
    marginBottom: "50px",
    marginTop: "50px",
  },
  footerLeft: {
    paddingLeft: "10%",
  },
  footerRight: {
    paddingRight: "7%",
  },
  whiteColor: {
    color: "#ffffff",
  },
});

export default useStyles;