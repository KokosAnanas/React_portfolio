import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import Menu from '../Menu/Menu'
import { useContext } from 'react'
import { ThemeContext } from '../../context/context'
import "./Header.css";
import useResize from '../../hooks/useResize'
import Burger from '../Burger/Burger'
import { NavLink } from "react-router-dom";
import { useState } from "react";
import cn from "classnames";

export default function Header() {
    const navigate = useNavigate()
    const {toggleTheme} = useContext(ThemeContext);
    const width = useResize();
     const [isOpen, setOpen] = useState(false);
     const { theme } = useContext(ThemeContext);
    return (
      <header className={cn("header", theme)}>
        <div className="logo">Logo</div>
        {width > 768 && <Menu />}
        {width <= 768 && <Burger onClick={() => setOpen((state) => !state)} />}
        {isOpen && width <= 768 && <Menu className="menu" />}
        {width <= 768 && <NavLink onClick={() => setOpen((state) => !state)} />}
        <Button onClick={() => navigate("/contact")} label="Контакты" />
        <Button onClick={() => toggleTheme()} label="Сменить тему" />
      </header>
    );
}