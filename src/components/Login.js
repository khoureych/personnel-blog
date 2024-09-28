import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

   
    console.log('Tentative de connexion avec :', { username, password });

    axios.post('http://localhost:8080/api/auth/login', { username, password })
      .then(response => {
        
        console.log('Connexion réussie, réponse de l\'API :', response.data);

       
        localStorage.setItem('token', response.data.token);

       
        navigate('/dashboard');
      })
      .catch(error => {
        
        console.error('Erreur lors de la connexion :', error);
        setError('Nom d\'utilisateur ou mot de passe incorrect');
      });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="w-50">
        <h2 className="text-center mb-4">Connexion</h2>

     
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Nom d'utilisateur :</Form.Label>
            <Form.Control 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Entrer nom d'utilisateur" 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de passe :</Form.Label>
            <Form.Control 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Mot de passe" 
              required 
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">Connexion</Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
