import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Card} from 'react-bootstrap';

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/articles/${id}`)
      .then(response => setArticle(response.data))
      .catch(error => console.error('Erreur lors du chargement de l\'article', error));
  }, [id]);

  if (!article) return <div>Chargement...</div>;

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.content}</Card.Text>
          <p><strong>Auteur :</strong> {article.author}</p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Article;
