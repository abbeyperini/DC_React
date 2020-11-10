import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            click: 'home'
        }
    }

    onClickHome = () => {
        this.setState({
            click: 'home'
        }, () => {
            this.props.onClickHome(this.state.click)
        })
    }

    onClickSearch = () => {
        this.setState({
            click: 'search'
        }, () => {
            this.props.onClickSearch(this.state.click)
        })
    }

    render() {
        return (
            <header>
                <div>
                    <button onClick={this.onClickHome}className="menuItem">Home</button>
                    <button onClick={this.onClickSearch} className="menuItem">Search by State</button>
                </div>
            </header>
        )
    }
}

export default Header;