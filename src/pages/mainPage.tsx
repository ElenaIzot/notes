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
          Вы можете сохранять важные заметки с помощью нашего приложения 
        </Paragraph>
        <Paragraph className="main__text">
          А также читать последние новости в ленте новостей 
        </Paragraph>
      </Typography>
    </div>
  )
}