import { Typography } from "antd";
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;
const { Link: L } = Typography;

export function NotFoundPage(): JSX.Element {
    return (
        <div className="site-layout-content">
            <Typography className="main">
                <Paragraph className="main__text">
                    Запрошенная вами страница могла быть перемещена или удалена.
                </Paragraph>
                <Paragraph className="main__text">
                    Также возможно, что вы допустили небольшую опечатку при вводе запроса.
                </Paragraph>
                <Paragraph className="main__text">
                    Воспользуйтесь навигацией или формой поиска, чтобы найти интересующую вас информацию.
                </Paragraph>
                <Link to="/" className="main__link" >Вернуться на главную</Link>
            </Typography>
        </div>
    )
}