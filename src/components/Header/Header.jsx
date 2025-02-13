import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import Menu from '../Menu/Menu'
import { useContext } from 'react'
import { ThemeContext } from '../../context/context'
import "./Header.css";
import useResize from '../../hooks/useResize'
import Burger from '../Burger/Burger'

export default function Header() {
    const navigate = useNavigate()
    const {toggleTheme} = useContext(ThemeContext);
    const width = useResize();
    return (
        <header className='header'>
            <div className="logo">Logo</div>
            {width > 768 && <Menu/>}
            {width <= 768 && <Burger/>}
            <Button onClick={() => navigate('/contacts')} label='Контакты'/> 
            <Button onClick={() => toggleTheme()} label='Сменить тему'/> 
        </header>    
    )
}