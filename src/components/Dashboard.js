import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/articles', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(response => setArticles(response.data))
    .catch(error => console.error('Erreur lors du chargement des articles', error));
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Mon Tableau de Bord</h2>
      
      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Statistiques</Card.Title>
              <Card.Text>Voici quelques statistiques importantes.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Activités Récentes</Card.Title>
              <Card.Text>Voici les activités récentes dans votre tableau de bord.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Paramètres</Card.Title>
              <Card.Text>Accédez aux paramètres de votre compte ici.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      
      <h3 className="text-center mb-4">Articles</h3>
      <div className="d-flex flex-wrap justify-content-center">
        {articles.map(article => (
          <Card key={article.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>{article.content.substring(0, 100)}...</Card.Text>
              <Button variant="primary" href={`/article/${article.id}`}>Lire plus</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Dashboard;




