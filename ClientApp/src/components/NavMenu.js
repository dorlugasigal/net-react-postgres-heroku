import React, { Component } from 'react'
import {
    Collapse,
    Container,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import './styles/NavMenu.css'

export class NavMenu extends Component {
    static displayName = NavMenu.name

    constructor(props) {
        super(props)

        this.toggleNavbar = this.toggleNavbar.bind(this)
        this.state = {
            collapsed: true,
        }
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    render() {
        return (
            <header>
                <Navbar
                    className="navbar-expand-sm navbar navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
                    light
                >
                    <Container>
                        <img
                            className="logo-img"
                            src="https://i.ibb.co/qJCMw6x/logo.png"
                            width="70"
                            height="70"
                            alt=""
                        />
                        <NavbarBrand className="navbar-title" tag={Link} to="/">
                            Home Assignment
                        </NavbarBrand>
                        <NavbarToggler
                            onClick={this.toggleNavbar}
                            className="mr-2"
                        />
                        <Collapse
                            className="d-sm-inline-flex flex-sm-row-reverse"
                            isOpen={!this.state.collapsed}
                            navbar
                        >
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink
                                        tag={Link}
                                        className="text-light"
                                        to="/"
                                    >
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        tag={Link}
                                        className="text-light"
                                        to="/details"
                                    >
                                        Details
                                    </NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        )
    }
}
