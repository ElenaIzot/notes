import { EditTwoTone } from '@ant-design/icons';
export function Header(): JSX.Element {

    return (<>
        <header className='header'>
            <div className='logo'>
                <EditTwoTone twoToneColor="#00a82d"  className='logo_green'/>
            </div>
            <nav>
                <ul className='menu'>
                    <li className='menu__item'>
                        <a className='menu__link' href="/" >Главная</a>
                    </li>
                    <li className='menu__item'>
                        <a className='menu__link' href="/news" >Новости</a>
                    </li>
                    <li className='menu__item'>
                        <a className='menu__link' href="/notes" >Профиль</a>
                    </li>
                </ul>
            </nav>

        </header>
    </>
    )
};