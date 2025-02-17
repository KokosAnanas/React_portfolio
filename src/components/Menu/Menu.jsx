import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './Menu.css'

export default function Menu() {
    const MENU = [
      { title: "Главная", to: "/", key: uuid() },
      { title: "Контакты", to: "/contact", key: uuid() },
      { title: "Блог", to: "/blog", key: uuid() },
      { title: "Портфолио", to: "/portfolio", key: uuid() },
    ];
   
    return (
            <nav>
                <ul className='menu'>
                    {MENU.map(({title, to, key}) => 
                    <Link className='menu-link' to={to} key={key}>
                        {title}
                    </Link>)}
                </ul>
            </nav>
    )
}