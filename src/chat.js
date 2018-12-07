import {ApiAiClient} from 'api-ai-javascript';

const accessToken = '0a687f42dd984521a304d63538109cbd';
const client = new ApiAiClient({accessToken})

const ON_MESSAGE = 'ON_MESSAGE';

export const sendMessage = (text, sender='user') => ({
    type: ON_MESSAGE, 
    payload: {text, sender }
    
});

const messageMiddleware = () => next => action => {

};

const messageReducer = (state = [], action) => {
    switch (action.type) {
        
        case ON_MESSAGE:
            return [...state, action.payload];

        default: 
        return state;
    }
};