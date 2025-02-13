import { useContext } from 'react';
import Footer from "../Footer/Footer"
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../context/context';
import cn from 'classnames'
import './Layout.css'

export default function Layout({children, className}) {
	const {theme} = useContext(ThemeContext)
	
	return (
		<>
			<Header />
			<main className={cn(className, theme)}>{children}</main>
			<Footer />	
		</>
	)
}
Layout.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
}