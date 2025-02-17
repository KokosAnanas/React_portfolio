import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Box, Card, Typography, Button } from "@mui/material";

export default function Blog() {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      method: "GET",
      headers: {
        "X-Api-Key": "d7qDhc3NOM9jHCbhjxCsJQ==YsDsyCqC4kvbSqoZ",
        "Content-Type": "application/json",
      },
    });
    const articles = await response.json();
    setArticles(articles);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Layout>
      {articles.map(({ author, category, quote }, i) => (
        <Box key={`${i}-article`} mb={2}>
          <Card>
            <Typography variant="h6">{quote}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {author}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {category}
            </Typography>
          </Card>
        </Box>
      ))}
      <Button variant="contained" color="primary" onClick={getArticles}>
        Обновить цитату
      </Button>
    </Layout>
  );
}
