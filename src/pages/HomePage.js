import React from "react";
import {Link} from "react-router-dom";
import "./HomePage.css";
import LayoutDefault from "../layouts/LayoutDefault";
import TaskTable from "../components/TaskTable";

export default class HomePage extends React.Component {

    render() {
        return (
            <LayoutDefault
                navLeft={"Task manager application"}
                navRight={<Link to="/login">Login</Link>}
                content={<TaskTable/>}
            />
        );
    }

}