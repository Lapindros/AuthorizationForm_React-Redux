const initialState = {
    values: {
        auth: false,
        name: '',
        email: '',
        age: '',
        gender: '',
        education: '',
        password: ''
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
