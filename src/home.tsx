import { useNavigate } from "react-router-dom";
// import Blogs from "./blogs";

const Home = () => {
    const navigate =useNavigate()

    return( 
    <div>
    {/* <h1>home</h1> */}
    <button onClick={() =>navigate( "/blogs")}>Home</button>

    </div>
  )};
  
  export default Home;
