import { Card, Col, Row, Typography, Image } from 'antd';
import { News } from '../Models';

const { Paragraph, Text } = Typography;
const news: News[] = [
    {
        id: 1,
        title: 'Храброго пса наградили за спасение коал от пожаров',
        description: "Собака по кличке Медведь, помесь бордер-колли и кули, стала членом австралийской спасательной группы по поиску пострадавших при пожаре коал в 2019 году. Пса, брошенного хозяевами, натренировали на то, чтобы выслеживать коал по запаху.Отважный Медведь помог спасти более сотни коал от пожаров и теперь получил награду Международного фонда защиты животных. Медведь проходил обучение в Университете Саншайн-Кост, где кинологи научили его использовать обоняние для поиска коал.",
        image: 'https://s3.nat-geo.ru/images/2021/11/1/ab9f857578a54680a32135f6951c8916.max-2000x1000.jpg',
        date: '1 ноября 2021',
    },
    {
        id: 2,
        title: 'Храброго пса наградили за спасение коал от пожаров',
        description: "Собака по кличке Медведь, помесь бордер-колли и кули, стала членом австралийской спасательной группы по поиску пострадавших при пожаре коал в 2019 году. Пса, брошенного хозяевами, натренировали на то, чтобы выслеживать коал по запаху.Отважный Медведь помог спасти более сотни коал от пожаров и теперь получил награду Международного фонда защиты животных. Медведь проходил обучение в Университете Саншайн-Кост, где кинологи научили его использовать обоняние для поиска коал.",
        image: 'https://s3.nat-geo.ru/images/2021/11/1/ab9f857578a54680a32135f6951c8916.max-2000x1000.jpg',
        date: '1 ноября 2021',
    },
    {
        id: 3,
        title: 'Храброго пса наградили за спасение коал от пожаров',
        description: "Собака по кличке Медведь, помесь бордер-колли и кули, стала членом австралийской спасательной группы по поиску пострадавших при пожаре коал в 2019 году. Пса, брошенного хозяевами, натренировали на то, чтобы выслеживать коал по запаху.Отважный Медведь помог спасти более сотни коал от пожаров и теперь получил награду Международного фонда защиты животных. Медведь проходил обучение в Университете Саншайн-Кост, где кинологи научили его использовать обоняние для поиска коал.",
        image: 'https://s3.nat-geo.ru/images/2021/11/1/ab9f857578a54680a32135f6951c8916.max-2000x1000.jpg',
        date: '1 ноября 2021',
    },
];

export function NewsPage(): JSX.Element {
    const listNews: JSX.Element[] = news.map((item) =>
        <Col xs={24} xl={12}>
            <Card title={item.title} key={item.id}>
                <Image src={item.image} />
                <Paragraph italic type="secondary">
                    {item.date}
                </Paragraph>
                <Paragraph className="news__text" >
                    {item.description}
                </Paragraph>
            </Card>
        </Col>
    );

    return (
        <div className="site-layout-content">
            <div className="site-card-wrapper">
                <Row gutter={[16, 16]}>
                    {listNews}
                </Row>
            </div>
        </div>
    )
}