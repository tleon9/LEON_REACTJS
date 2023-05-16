import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import { FcSportsMode } from "react-icons/fc";

export const NavBar = () =>{
    return(
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <Link class="navbar-brand" to ="/"> <FcSportsMode/> </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <Link class="nav-link"  to ="/" >Home</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to='/productos/clothes'>Clothes</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to='/productos/accesories'>Accesories</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to ="/cart"><CartWidget/></Link>
            </li>
        </ul>
            
        </div>
    </div>
    </nav>

    )
}


