import { Typography } from "antd";

const { Title, Paragraph, Link } = Typography;

export function MainPage(): JSX.Element {
  return (
    <div className="site-layout-content">
      <Typography className="main">
        <Title className="main__title">
          Приложение для создания заметок
        </Title>
        <Paragraph className="main__text">
          Сохраняйте важное с помощью приложения Заметки
        </Paragraph>
        <Paragraph className="main__text">
          Читайте все последние новости в разделе Новости
        </Paragraph>
      </Typography>
    </div>
  )
}