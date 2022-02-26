import { Box } from "@material-ui/core";
import FooterBar from "../components/FooterBar";
import GetApiData from "../components/GetApiData";
import NavBar from "../components/NavBar"

const Home = () => {
  return (
    <>
      <NavBar />
      <GetApiData />
      <FooterBar />
    </>
  )
}

export default Home;