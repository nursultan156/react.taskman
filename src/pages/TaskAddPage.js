import React from "react";
import {Link} from "react-router-dom";
import "./TaskAddPage.css";
import LayoutDefault from "../layouts/LayoutDefault";
import TaskAdd from "../components/TaskAdd";

export default class TaskAddPage extends React.Component {

    render() {
        return (
            <LayoutDefault
                navLeft={"Task manager application"}
                navRight={<Link to="/login">Login</Link>}
                content={<TaskAdd/>}
            />
        );
    }

}