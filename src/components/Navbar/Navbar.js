import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Buy</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Sell</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Rent</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Agent Finder</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true">Manage Rental</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar



