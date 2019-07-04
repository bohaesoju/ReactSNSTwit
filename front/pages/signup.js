import React, { useState, useCallback, useEffect } from 'react'
import { Form, Input, Checkbox, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import Router from 'next/router';
import { SIGN_UP_REQUEST } from '../reducers/user';
import PropTypes from 'prop-types';

const TextInput = ({ value }) => (
    <div>{value}</div>
);

TextInput.propTypes = {
    value: PropTypes.string,
};

export const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
        setter(e.target.value);
    }, []);
    return [value, handler];
};

const Signup = () => {
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const [id, onChangeId] = useInput('');
    const [nick, onChangeNick] = useInput('');
    const [password, onChangePassword] = useInput('');
    const dispatch = useDispatch();
    const { isSigningUp, me } = useSelector(state => state.user);

    useEffect(() => {
        if(me){
            alert('로그인했으니 메인페이지로 이동합니다.');
            Router.push('/');
        }
    }, [me && me.id]);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true)
        }
        return dispatch({
            type: SIGN_UP_REQUEST,
            data: {
                userId: id,
                password,
                nicnname: nick,
            },
        });
    }, [id, nick, password, passwordCheck, term]);

    const onChangePasswordChk = useCallback((e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value)
    }, [password]);

    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked)
    }, []);

    return(
        <>
            <Form onSubmit={onSubmit} style={{ padding:10 }}>
                <TextInput value="1234123" />
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId} type="text"/>
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br/>
                    <Input name="user-nick" value={nick} required onChange={onChangeNick} type="text"/>
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br/>
                    <Input name="user-password" value={password} required onChange={onChangePassword} type="password"/>
                </div>
                <div>
                    <label htmlFor="user-password-chk">비밀번호체크</label>
                    <br/>
                    <Input name="user-password-chk" value={passwordCheck} required onChange={onChangePasswordChk} type="password"/>
                    {passwordError && <div style={{ color:'red'}}>비밀번호가 일치하지 않습니다.</div>}
                </div>
                <div>
                    <Checkbox name="user-term" value={term} onChange={onChangeTerm}>상기 내용을 동의합니다.</Checkbox>
                    {termError && <div style={{ color:'red'}}>약관에 동의하셔야 합니다</div>}
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button type="primary" htmlType="submit" loading={isSigningUp}>가입하기</Button>
                </div>
            </Form>
        </>
    )
};

export default Signup;
