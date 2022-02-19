import React, { Component } from "react";
import { HashRouter, NavLink, Link, Route, Routes, Outlet, BrowserRouter } from "react-router-dom"
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Stuff } from "./Stuff";

export class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <h1>Aplikacja React Router</h1>
                    <ul className="header">
                        <li><Link to="/">Strona główna</Link></li>
                        <li><Link to="/stuff">O nas</Link></li>
                        <li><Link to="/contact">Kontakt</Link></li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route path="/stuff" element={<Stuff />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}