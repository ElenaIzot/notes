import { Col, Row, Typography, Form, Button, List, Input } from 'antd';
import { EditTwoTone } from '@ant-design/icons';
import { useState } from 'react';


const { Search } = Input;

type LayoutType = Parameters<typeof Form>[0]['layout'];
const { Title } = Typography;

export function NotesPage(): JSX.Element {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
            }
            : null;

    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];

    const onSearch = (value: any) => console.log(value);

    return (
        <div className="site-layout-content">
            <div className="site-card-wrapper">
                <Form
                    {...formItemLayout}
                    layout='vertical'
                    form={form}
                    initialValues={{ layout: 'vertical' }}
                >
                    <Form.Item label="Название заметки">
                        <Input placeholder="Введите название заметки..." />
                    </Form.Item>
                    <Form.Item label="Текст">
                        <Input placeholder="Ввведите текст заметки..." />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary">Добавить</Button>
                    </Form.Item>
                </Form>
                <Row gutter={[16, 16]} className="notes">
                    <Col span={12}>
                        <Title className="notes__title" level={2} >Мои заметки</Title>
                    </Col>
                    <Col span={12}>
                        <Search
                            placeholder="Найти..."
                            allowClear
                            enterButton="Поиск"
                            size="large"
                            onSearch={onSearch}
                        />
                    </Col>
                </Row>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<EditTwoTone />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}