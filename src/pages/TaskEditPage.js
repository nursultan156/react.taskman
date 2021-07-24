import React from "react";
import {Link} from "react-router-dom";
import "./TaskEditPage.css";
import LayoutDefault from "../layouts/LayoutDefault";
import TaskEdit from "../components/TaskEdit";

export default class TaskEditPage extends React.Component {

    render() {
        return (
            <LayoutDefault
                navLeft={"Task manager application"}
                navRight={<Link to="/login">Login</Link>}
                content={<TaskEdit/>}
            />
        );
    }

}