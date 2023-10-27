import { useNavigate } from "react-router-dom";

const Blogs = () => {
const navigate = useNavigate()
    return(
      <>
     <h1 onClick={() =>navigate("/contact")}>Blog Articles</h1>
      {/* <h2>Blogs Page</h2> */}
      </>
    )
    };
  
  export default Blogs;