import React from 'react';
import ReactDOM from "react-dom";
import App from "./app";
import {BrowserRouter} from "react-router-dom";
import Useprovider from "./context/useprovider.js";
ReactDOM.render(<Useprovider><BrowserRouter><App/></BrowserRouter></Useprovider>,document.getElementById("root"));