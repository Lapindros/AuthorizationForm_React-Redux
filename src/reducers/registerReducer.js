const initialState = {
    form: {
        name: '',
        email: '',
        age: '',
        sex: '',
        password: '',
    }
};

const registerReducer = {
    form: (state = initialState, action) => {
        switch (action.type) {
            default:
                return state;
        }
    }
};

export default registerReducer;
