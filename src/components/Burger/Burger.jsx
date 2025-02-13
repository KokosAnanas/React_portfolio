import styles from './Burger.module.css';

export default function Burger() {
	return (
		<>
			{[1, 2, 3].map((el) => (
				<span key={el} className={styles.line} />
			))}
		</>
	)
}