const initialState = {
    form: {
        login: '',
        password: '',
    }
};

const loginReducer = {
    form: (state = initialState, action) => {
        switch (action.type) {
            default:
                return state;
        }
    }

};

export default loginReducer;
