import { useNavigate } from "react-router-dom";

const Contact = () => {
const navigate = useNavigate()
    return( 
      <div>
    <h1 onClick={() =>navigate("/nopage")}>Contact Me</h1>
    </div>
    )
  };

  
  export default Contact;