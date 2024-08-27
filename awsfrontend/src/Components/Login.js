import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: '#f0f4f8' }} // Background color for the page
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          padding: 4,
          borderRadius: 2,
          backgroundColor: '#ffffff', // Background color for the form
          boxShadow: 3, // Adds a shadow effect
          width: '100%',
          maxWidth: 400,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          fullWidth
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
        <Typography><NavLink to="/signup">Dont have an account?Sign Up</NavLink></Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
