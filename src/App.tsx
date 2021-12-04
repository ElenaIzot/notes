import 'antd/dist/antd.css';
import './styles/main.scss';
import { Typography } from "antd";
import { Layout, Menu } from 'antd';
import { MainPage } from './pages/mainPage';
import { NewsPage } from './pages/newsPage';
import {  NotesPage } from './pages/notesPage';

const { Header, Content, Footer } = Layout;
const { Link } = Typography;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item>
            <Link href="/">Главная</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/news">Новости</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/notes">Профиль</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <MainPage />
        <NewsPage />
        <NotesPage />
  
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2021 Created by Elena</Footer>
    </Layout>
  );
}

export default App;
