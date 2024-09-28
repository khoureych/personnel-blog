


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    console.log("Données envoyées :", {
      username,
      email,
      password
    });

    axios.post('http://localhost:8080/api/auth/signup', { username, email, password })
      .then(response => {
        console.log('Inscription réussie', response.data);
        navigate('/login'); 
      })
      .catch(error => {
        console.error("Erreur lors de l'inscription", error);
      });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="w-50">
        <h2 className="text-center mb-4">S'inscrire</h2>
        <Form onSubmit={handleSignup}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Nom d'utilisateur :</Form.Label>
            <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Entrer nom d'utilisateur" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email :</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Entrer votre email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de passe :</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" required />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">S'inscrire</Button>
        </Form>
      </div>
    </Container>
  );
};

export default Signup;


