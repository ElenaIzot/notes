import { Layout, Menu, Typography } from "antd";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const { Header } = Layout;
const { Link: L } = Typography;

const MenuHeader = () => {
    return (
        <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item>
                    <Link to="/">Главная</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/news">Новости</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/notes">Профиль</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}



export default MenuHeader;