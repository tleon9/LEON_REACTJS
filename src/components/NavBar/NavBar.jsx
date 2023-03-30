import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () =>{
    return(
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">GYM TOOLS</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Clothes</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Workout Accesories</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Equipment</a>
            </li>
        </ul>
            <CartWidget/>
        </div>
    </div>
    </nav>

    )
}


