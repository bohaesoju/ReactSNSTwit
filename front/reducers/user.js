export const initialState = {
    isLoggedIn: false,
    user: {},
};

export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP_ID = 'SIGN_UP_ID';
export const SIGN_UP_NICK = 'SIGN_UP_NICK';
export const SIGN_UP_PASSWORD = 'SIGN_UP_PASSWORD';

export const signUpAction = (data) => {
    return {
        type: SIGN_UP,
        data: data,
    }
};

export const loginAction = {
    type: LOG_IN,
    data: {
        nickname: '보해소주',
    },
};

export const logoutAction = {
    type: LOG_OUT,
};

export const signUpId = (data) => {
    return {
        type: SIGN_UP_ID,
        data,
    }
};

export const signUpId = (data) => {
    return {
        type: SIGN_UP_ID,
        data,
    }
};

export const signUpId = (data) => {
    return {
        type: SIGN_UP_ID,
        data,
    }
};





const reducer = (state = initialState, action) => {
    switch(action.type){
        case loginAction: {
            return {
                ...state,
                isLoggedIn: true,
                user: action.data,
            }
        }
        case logoutAction: {
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
};

export default reducer;
