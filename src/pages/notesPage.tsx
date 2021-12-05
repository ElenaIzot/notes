import { Col, Row, Typography, Form, Button, List, Input } from 'antd';
import { ProfileTwoTone } from '@ant-design/icons';
import { useState } from 'react';
import { Note } from '../components/Models';

const { Search } = Input;

type LayoutType = Parameters<typeof Form>[0]['layout'];
const { Title } = Typography;
const { Link: L } = Typography;

const notes: Note[] = [];

export function NotesPage(): JSX.Element {
    const [form] = Form.useForm();
    const [note, setNote] = useState<Note>({
        id: null,
        title: '',
        description: '',
    });

    const [search, setSearch] = useState('');

    function handleSubmit(values: any): void {
        notes.push(values);
        setNote({
            id: null,
            title: '',
            description: '',
        });
        form.resetFields()
    };

    const onSearch = (value: any, event: any) => {

      
        console.log(value)
     
    };

    return (
        <div className="site-layout-content">
            <div className="site-card-wrapper">
                <Form
                    layout='vertical'
                    form={form}
                    initialValues={{
                        title: '',
                        description: '',
                    }}
                    onFinish={(values) => handleSubmit(values)}
                >
                    <Form.Item label="Название заметки" name="title">
                        <Input placeholder="Введите название заметки..."
                            value={note.title}
                            onChange={e => {
                                setNote({ ...note, title: e.target.value });
                            }}
                        />
                    </Form.Item>
                    <Form.Item label="Текст" name="description">
                        <Input placeholder="Ввведите текст заметки..."
                            value={note.description}
                            onChange={e => {
                                setNote({ ...note, description: e.target.value });
                            }}
                        />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary"
                            htmlType="submit">
                            Добавить
                        </Button>
                    </Form.Item>
                </Form>

                <Row gutter={[16, 16]} className="notes">
                    <Col span={12}>
                        <Title className="notes__title" level={2}>
                            Мои заметки
                        </Title>
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
                    dataSource={notes}
                    renderItem={note => (
                        <List.Item>
                            <List.Item.Meta
                                key={note.id}
                                avatar={<ProfileTwoTone />}
                                title={<a href='#'>{note.title}</a>}
                                description={note.description}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}