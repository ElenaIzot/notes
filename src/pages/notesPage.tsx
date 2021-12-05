import { Col, Row, Typography, Form, Button, List, Input } from 'antd';
import { ProfileTwoTone } from '@ant-design/icons';
import { useState } from 'react';
import { Note } from '../Models';

const { Search } = Input;
const { Title } = Typography;
const ALL_NOTES: Note[] = [];

export function NotesPage(): JSX.Element {
    const [form] = Form.useForm();
    const [notes, setNotes] = useState(ALL_NOTES);
   
    function handleSubmit(values: any): void {
        ALL_NOTES.push(values);
        //игнорируем поиск, чтобы не запутать пользователя, иначе он может подумать, что submit не сработал
        setNotes([...notes, values]);
        form.resetFields();
    };

    function onSearch(value: any): void {
        const searchResult = ALL_NOTES.filter((note: Note) => {
            if (note.title.includes(value) || note.description.includes(value)) {
                return true;
            };

            return false;
        });

        setNotes(searchResult);
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
                        <Input placeholder="Введите название заметки..." required />
                    </Form.Item>
                    <Form.Item label="Текст" name="description">
                        <Input placeholder="Ввведите текст заметки..." required/>
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
                                key={note.title}
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