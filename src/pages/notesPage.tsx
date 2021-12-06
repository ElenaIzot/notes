import { Col, Row, Typography, Form, Button, List, Input } from 'antd';
import { ProfileTwoTone } from '@ant-design/icons';
import { useState } from 'react';
import { Note } from '../Models';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../store/noteReducer';
import { RootState } from '../store';

const { Search } = Input;
const { Title } = Typography;

export function NotesPage(): JSX.Element {
    const [form] = Form.useForm();
    const dispath = useDispatch();
    const notesFromState = useSelector((state: RootState) => {
        return state.notes.notes;
    });
    const [notes, setNotes] = useState(notesFromState);

    function handleSubmit(values: any): void {
        //игнорируем поиск, чтобы не запутать пользователя, иначе он может подумать, что submit не сработал
        dispath(addNote(values));
        setNotes([...notes, values]);
        form.resetFields();
    };

    function onSearch(value: string): void {
        const searchResult: Note[] = notesFromState.filter((note: Note) => {        
            if (note.title.includes(value) || note.description.includes(value)) {
                return true;
            };

            return false;
        });

        setNotes(searchResult);
    };

    return (
        <div className="site-layout-content notes-content">
            <div className="site-card-wrapper">
                <Form
                    layout='vertical'
                    form={form}
                    onFinish={(values) => handleSubmit(values)}
                >
                    <Form.Item label="Название заметки" name="title">
                        <Input placeholder="Введите название заметки..." required />
                    </Form.Item>
                    <Form.Item label="Текст" name="description">
                        <Input placeholder="Ввведите текст заметки..." required />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary"
                            size="middle"
                            htmlType="submit"
                        >
                            Добавить
                        </Button>
                    </Form.Item>
                </Form>

                <Row gutter={[16, 16]} className="notes">
                    <Col span={12}>
                        <Title className="notes__title" level={3}>
                            Мои заметки
                        </Title>
                    </Col>
                    <Col span={12}>
                        <Search
                            placeholder="Найти в заметках..."
                            allowClear
                            enterButton="Поиск"
                            size="middle"
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
                                title={note.title}
                                description={note.description}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}