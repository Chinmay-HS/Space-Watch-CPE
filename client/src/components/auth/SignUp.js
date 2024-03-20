/*import axios from 'axios';
import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

    const {getLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();


    async function register(e) {
        e.preventDefault();

        try{
            const registerData = {
                email,
                password,
                passwordVerify,
            };

            await axios.post("http://localhost:3001/auth/", registerData);
            await getLoggedIn();
            navigate("/");
        }catch (err) {
            console.error(err);
        }
    }
  
    return (
    <div>
        <h1> Register a new account </h1>
        <form onSubmit={register}>
            <input 
            type="email" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
            <input 
            type="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
            <input 
            type="password" 
            placeholder="Verify your password" 
            onChange={(e) => setPasswordVerify(e.target.value)}
            value={passwordVerify}
            />
            <button type="submit">Register</button>
        </form>
    </div>
  );   
}

export default Register;
*/

import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink

const defaultTheme = createTheme();

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const registerData = {
                email,
                password,
                passwordVerify,
            };

            await axios.post("http://localhost:3001/auth/", registerData);
            console.log("User registered successfully!");
            // You might want to add logic to handle successful registration, such as redirecting the user to a login page
        } catch (err) {
            console.error("Registration failed:", err);
            // You might want to add logic to handle registration failure, such as displaying an error message to the user
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="passwordVerify"
                                    label="Verify Password"
                                    type="password"
                                    id="passwordVerify"
                                    autoComplete="new-password"
                                    value={passwordVerify}
                                    onChange={(e) => setPasswordVerify(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <RouterLink to="/login" variant="body2"> 
                                    Already have an account? Log in
                                </RouterLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

