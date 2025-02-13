
import { useState } from 'react';
import { ThemeContext } from '../context/context';
import PropTypes from 'prop-types';


export default function ThemeProvider({children}) {
	const [theme, setTheme] = useState('light');
	const toggleTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}
	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}

ThemeProvider.propTypes = {
  	children: PropTypes.node,
}