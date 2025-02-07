import { v4 as uuid } from 'uuid';

export default function Header() {
    const MENU = [
        {title: 'portfolio', to: 'portfolio', key: uuid()},
        {title: 'portfolio', to: 'portfolio', key: uuid()},
        {title: 'portfolio', to: 'portfolio', key: uuid()},
        {title: 'portfolio', to: 'portfolio', key: uuid()},
    ]
    const styleLogo = {
        background: 'blue',
        fontSize: '56px'
    }

    return (
        <header>
            <div className="logo" style={styleLogo}>Logo</div>
            <nav>
                <ul>
                    {MENU.map(({title, key}) => <li key={key}>{title}</li>)}
                </ul>
            </nav>
        </header>    
    )
}