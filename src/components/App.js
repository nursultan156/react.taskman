import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";


export default class App extends React.Component {

    render() {
        return (
            <Router>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/login" component={LoginPage}/>
            </Router>
        );
    }

}

// 1 страница кнопка логин(войти/выйти) + таблица
// 2 страница только логин
// 3 страница создание задачи
// 4 страница редактирование задачи

