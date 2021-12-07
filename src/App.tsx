import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import 'antd/dist/antd.css';
import './styles/main.scss';
import { Typography, Layout, Menu} from "antd";
import { MainPage } from './pages/mainPage';
import { NewsPage } from './pages/newsPage';
import { NotesPage } from './pages/notesPage';

const { Header, Content, Footer } = Layout;

//'Link' wrote like 'L' to avoid conflict with React Router DOM
const { Link: L } = Typography;

function App() {
  return (
    <Layout className="layout">
      <Router basename='/'>
        <Header>
          <Menu theme="dark" mode="horizontal" >
            <Menu.Item>
              <Link to="">Главная</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/news">Новости</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/notes">Профиль</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path='/notes' element={<NotesPage />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2021 Created by Elena</Footer>
      </ Router>
    </Layout>
  );
}

export default App;
