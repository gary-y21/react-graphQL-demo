import React from 'react';
import { NavLink } from 'react-router-dom';

export default function () {

    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/" exact> Home </NavLink>
                </li>
                <li>
                    <NavLink to="/about"> About </NavLink>
                </li>
                <li>
                    <NavLink to="/contact"> Contact </NavLink>
                </li>
                <li>
                    <NavLink to="/profile"> Profile </NavLink>
                </li>                
            </ul>
        </div>
    )
}