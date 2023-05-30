import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import state, {ActionsTypes, StateType, StoreType} from "./Redux/store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";


type AppPropsType = {
    //state: StateType
    // addPost: (newText: string) => void
    // addMessage: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
    // updateNewMessageText:(NewMessageText:string)=>void
    //dispatch:(action:ActionsTypes)=>void
    //store:StoreType
}

function App(props: AppPropsType) {

    return (
        <Router>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Routes>

                        <Route path={'/dialogs'} element={<DialogsContainer
                           // dialogsPage={props.state.dialogsPage}
                            // addMessage={props.addMessage}
                            // updateNewMessageText={props.updateNewMessageText}
                            //dispatch={props.dispatch}
                            //store={props.store}
                        />}/>
                        <Route path={'/profile'} element={<Profile
                            // profilePage={props.state.profilePage}
                            // addPost={props.addPost}
                            // updateNewPostText={props.updateNewPostText}
                           // store={props.store}
                            // dispatch={props.dispatch}
                        />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
