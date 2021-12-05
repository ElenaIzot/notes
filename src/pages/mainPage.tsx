import { Typography } from "antd";

const { Title, Paragraph, Link } = Typography;

export function MainPage(): JSX.Element {
    return (
        <div className="site-layout-content">
          <Typography className="main">
            <Title level={1} className="main__title">Приложение для создания заметок</Title>
            <Paragraph className="main__text">
              Сохраняйте важное с помощью приложения Заметки
            </Paragraph>
            <Link href="/notes" className="main__link" >Прейти к созданию заметок</Link>
          </Typography>
        </div>
    )
}