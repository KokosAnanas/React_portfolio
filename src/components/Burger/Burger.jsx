import styles from './Burger.module.css';
import PropTypes from "prop-types";

export default function Burger({onClick}) {
	return (
		<div onClick={onClick}>
			{[1, 2, 3].map((el) => (
				<span key={el} className={styles.line} />
			))}
		</div>
	)
}

Burger.propTypes = {
  onClick: PropTypes.func,
};