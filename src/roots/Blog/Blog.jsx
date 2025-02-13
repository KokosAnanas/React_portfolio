import { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout'
import { Box, Card, Typography } from "@mui/material";

export default function Blog() {
	const [articles, setArticles] = useState([])
	useEffect(() => {
		const getArticles = async () => {
			const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
				method: 'GET',
				headers: {
					"X-Api-Key": "d7qDhc3NOM9jHCbhjxCsJQ==YsDsyCqC4kvbSqoZ",
					"Content-Type": "application/json"
				}
			})
			const articles = await response.json();
			setArticles(articles);
		}
		getArticles()
	}, [])
	return (
		<Layout>
			{articles.map(({author, category, quote}, i) => <Box key={`${i}-article`}>
				<Card>
					<Typography>{quote}</Typography>
					<Typography>{author}</Typography>
					<Typography>{category}</Typography>
				</Card>
			</Box>)}
		</Layout>
	)
}