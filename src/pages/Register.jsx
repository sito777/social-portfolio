import "../style.css";
import { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import bgPhoto from "../img/mathieu-stern-1zO4O3Z0UJA-unsplash.jpeg";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const Register = () => {
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((_error) => {
        setError(true);
        // ..
      });
  };

  return (
    <Grid
      container
      spacing={4}
      style={{
        backgroundImage: `url(${bgPhoto})`,
        height: "100vh",
        width: "100vw",
      }}
    >
      <Grid item xs={6}>
        <h1>Register</h1>
        <p>
          Assumenda ut ullam provident ea alias molestias dolorum. Qui ullam aut
          laborum repudiandae. Saepe non vel ratione illo. Commodi voluptates
          doloribus aut aut quaerat. Qui ut fugiat quaerat sapiente.
        </p>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={4}>
        <div className="login">
          <form onSubmit={handleLogin}>
            <Box
              sx={{
                marginTop: 10,
                padding: 5,
                paddingTop: 10,
                width: 300,
                height: 300,
                borderRadius: 5,
                textAlign: "center",
                backgroundColor: "lightgrey",
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
            >
              <TextField
                style={{}}
                required
                id="outlined-required"
                label="Email"
                defaultValue="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                required
                autoComplete="On"
                id="outlined-required"
                label="Password"
                defaultValue="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <Button variant="outlined" type="onSubmit">
                Register
              </Button>
              {error && (
                <span>
                  <br></br>Wrong email or password
                </span>
              )}
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
export default Register;
