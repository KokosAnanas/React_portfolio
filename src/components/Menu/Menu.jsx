import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

export default function Menu() {
    const MENU = [
        {title: 'portfolio', to: '/portfolio', key: uuid()},
        {title: 'Обо мне', to: '/about', key: uuid()},
        {title: 'Блог', to: '/blog', key: uuid()},
        {title: 'portfolio', to: '/portfolio', key: uuid()},
    ]
   
    return (
            <nav>
                <ul>
                    {MENU.map(({title, to, key}) => <Link to={to} key={key}>{title}</Link>)}
                </ul>
            </nav>
    )
}