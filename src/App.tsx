import axios from "axios";
// import { useNavigate } from "react-router-dom";
const About = () => {
  const saveUser = async () => {
    try {
      const response = await axios.post("http://localhost:3000",  {
          name: "Agilan",
          email: "agilanakil1432@gmail.com",
          Number:45,
          contactName: "T.Agilan",
      });
      console.log(response.data, "success");
    } catch (error) {
      console.error(error, "error");
    }
  };
  return (
    <div>
      <h2 onClick={saveUser}>About</h2>
      <p>This is the about page.</p>
    </div>
  );
};
export default About;