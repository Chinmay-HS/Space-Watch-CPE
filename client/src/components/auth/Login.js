// import React, { useContext, useState } from 'react';
// import { Link } from "react-router-dom";

// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import axios from 'axios';
// import AuthContext from '../../context/AuthContext';
// import { useNavigate } from 'react-router-dom';


// const defaultTheme = createTheme();

// function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const {getLoggedIn} = useContext(AuthContext);
//     const navigate = useNavigate();

//     async function login(e) {
//         e.preventDefault();

//         try {
//             const loginData = {
//                 email,
//                 password,
//             };

//             await axios.post("http://localhost:3001/auth/login", loginData);
//             await getLoggedIn();
//             navigate("/");

//         } catch (err) {
//             console.error(err);
//         }
//     }
  
//     return (
//         <ThemeProvider theme={defaultTheme}>
//             <Grid container component="main" sx={{ height: '100vh' }}>
//                 <CssBaseline />
//                 <Grid
//                     item
//                     xs={false}
//                     sm={4}
//                     md={7}
//                     sx={{
//                         backgroundImage: 'url(https://images.unsplash.com/photo-1710269389244-00268547a457?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
//                         backgroundRepeat: 'no-repeat',
//                         backgroundColor: (t) =>
//                             t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                     }}
//                 />
//                 <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//                     <Box
//                         sx={{
//                             my: 8,
//                             mx: 4,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <Typography component="h1" variant="h5" className='signing-heading'>
//                             Sign in
//                         </Typography>
//                         <Box component="form" noValidate onSubmit={login} sx={{ mt: 3 }}>
//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 id="email"
//                                 label="Email Address"
//                                 name="email"
//                                 autoComplete="email"
//                                 autoFocus
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 name="password"
//                                 label="Password"
//                                 type="password"
//                                 id="password"
//                                 autoComplete="current-password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />

//                             <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 sx={{ mt: 3, mb: 2 }}
//                             >
//                                 Sign In
//                             </Button>
//                             <Grid container>
//                                 <Grid item>
//                                     <Link to="/register" variant="body2">
//                                         Don't have an account? Sign Up Over Here.
//                                     </Link>
//                                 </Grid>
//                             </Grid>
//                         </Box>
//                     </Box>
//                 </Grid>
//             </Grid>
//         </ThemeProvider>
//     );   
// }

// export default Login;


import axios from 'axios';
import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {getLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();

    async function login(e) {
        e.preventDefault();

        try{
            const loginData = {
                email,
                password,

            };

            await axios.post("http://localhost:3001/auth/login", loginData);
            await getLoggedIn();
            navigate("/");

        }catch (err) {
            console.error(err);
        }
    }
  
    return (
    <div className='bg-img'>
      <div className='form'>
        <h1> Log in 
          <p className="main-line">
            If you don't have account 
            <p>
              You can <a className="register-link" href='/register'>regiseter here</a>
            </p>
          </p>
        </h1>
        <form onSubmit={login}>
          <div className="input-field">
            <input type="email" placeholder="enter your email address" onChange={(e) => setEmail(e.target.value)}value={email}/>
          </div>
          <div className="input-field">
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}value={password}/>
          </div>
          <div className='input-field'>
            <button className='login-btn' type="submit">Log in</button>
          </div>
        </form>
      </div>
    </div>
  );   
}

export default Login;