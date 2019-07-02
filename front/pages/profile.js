import React from 'react';
import { List, Button, Card, Icon } from 'antd'
import NicknameEditForm from "../components/NicknameEditForm";

const Profile = () => {
    return(
        <>
            <NicknameEditForm />
            <List
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로잉목록</div>}
                loadMore={<Button style={{ width: '100%'}}>더 보기</Button>}
                bordered
                dataSource={['박정원', '박주형', '김수빈']}
                renderItem={item => (
                    <List.Item style={{ marginTop: '20px' }}>
                        <Card actions={[<Icon key="stop" type="stop" />]}><Card.Meta description={item} /></Card>
                    </List.Item>
                )}
            />
            <List
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로워목록</div>}
                loadMore={<Button style={{ width: '100%'}}>더 보기</Button>}
                bordered
                dataSource={['박주형', '김수빈', '박정원']}
                renderItem={item => (
                    <List.Item style={{ marginTop: '20px' }}>
                        <Card actions={[<Icon key="stop" type="stop" />]}><Card.Meta description={item} /></Card>
                    </List.Item>
                )}
            />
        </>
    )
};

export default Profile;
