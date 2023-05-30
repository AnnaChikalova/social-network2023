import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import store from "./Redux/redux-store";
import {Provider} from "react-redux";

     ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
            <App// state={store.getState()}
                 // addPost={store.addPost.bind(store)}
                 // addMessage={store.addMessage.bind(store)}
                 // updateNewPostText={store.updateNewPostText.bind(store)}
                 // updateNewMessageText={store.updateNewMessageText.bind(store)}
               // dispatch={store.dispatch.bind(store)}
               //  store={store}
                />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
