import { useState } from 'react';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Layout from '../../components/Layout/Layout';
import styles from './main.module.css'
import { Box } from '@mui/material';

export default function Main() {
	const result = useState(false)
	const formIsAktive = result[0];
	const setFormActive = result[1];

	return (
		<Layout className={styles.layout}>
			<Box>Главная страница</Box>
			<Button label='Связаться со мной' onClick={() => setFormActive(active => !active)}/>
			<>{formIsAktive && <Form />}</>	
		</Layout>
	)
}