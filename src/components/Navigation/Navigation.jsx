import { Link } from 'react-router-dom'
import s from './Navigation.module.css'
export const Navigation = () => {
return (
    <nav className={s.inna}>
<Link to='/generate'>Генерировать QR код</Link>
<Link to='/scan'>Сканировать QR код</Link>
<Link to='/scanHistory'>История сканирования</Link>
<Link to='/generateHistory'>История Генерирования</Link>

    </nav>

);
};