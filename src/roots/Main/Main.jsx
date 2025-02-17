import { useState } from 'react';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Layout from '../../components/Layout/Layout';
import { Box } from '@mui/material';
import photo from '../../assets/avatar.png'
import styles from "./main.module.css";

export default function Main() {
	const result = useState(false)
	const formIsAktive = result[0];
	const setFormActive = result[1];

	return (
    <Layout className={styles.layout}>
      <Box>
        <main className={styles.main}>
            <span className={styles.main__line}></span>
            <img className={styles.main__photo} src={photo} />
			<h1 className={styles.main__h1}>I’m Sonali a Web developer</h1>
			<p className={styles.main__p}>
			I craft high-performing, beautiful websites that are
			conversion-focused, brand-accurate, & people-friendly.
			</p>

			<Button className={styles.main__button}
        label="Let’s Talk"
        onClick={() => setFormActive((active) => !active)}
      />
      <>{formIsAktive && <Form />}</>
        </main>
      </Box>

      
    </Layout>
  );
}