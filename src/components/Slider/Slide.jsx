import PropTypes from "prop-types";
import styles from "./slider.module.css";

export default function Slide({ image }) {
  return (
  	<img className={styles.img} src={image} />
  )
}

Slide.propTypes = {
	image: PropTypes.string
}