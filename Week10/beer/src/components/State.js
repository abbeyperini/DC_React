import React, { Component } from 'react';

class State extends Component {
    constructor() {
        super()

        this.state = {
            stateName: '',
            page: 1,
            breweries: []
        }
    }

    handleOnChange = (e) => {
        console.log(e.target.name)

        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.fetchBreweries()
        })
    }

    fetchBreweries = () => {
        fetch(`https://api.openbrewerydb.org/breweries?by_state=${this.state.stateName}&per_page=21`)
        .then(response => response.json())
        .then(result => {
          this.setState({
            breweries: result
          })
        })
      }

    fetchMoreBreweries = () => {
        let page = this.state.page + 1;

        fetch(`https://api.openbrewerydb.org/breweries?by_state=${this.state.stateName}&page=${page}&per_page=21`)
        .then(response => response.json())
        .then(result => {
        this.setState({
            page: page,
            breweries: result
            })
        })
    }

    goBack = () => {
        let page = this.state.page - 1;

        fetch(`https://api.openbrewerydb.org/breweries?by_state=${this.state.stateName}&page=${page}&per_page=21`)
        .then(response => response.json())
        .then(result => {
        this.setState({
            page: page,
            breweries: result
            })
        })
    }

    render() {
        let breweriesItems = this.state.breweries.map((brewery) => {
            return <li key={brewery.id} className="brewery">
                <a href={brewery.website_url}><h3>{brewery.name}</h3></a>
                {brewery.city && brewery.state &&
                    <p>{brewery.city}, {brewery.state}</p>
                }
                <p>Type: {brewery.brewery_type}</p>
            </li>
        })

        return(
            <main>
                <div className="searchBox">
                    <h3>Search by State:</h3>
                    <input type="text" name="stateName" onChange={this.handleOnChange} placeholder="Full State Name"></input>
                </div>
                <ul className="breweries">
                    {breweriesItems}
                </ul>
                <div className="pageButtons">
                    {this.state.page > 1 && <button className="previousButton" onClick={this.goBack}>Previous</button> }
                    <button className="nextButton" onClick={this.fetchMoreBreweries}>Next</button>
                </div>
            </main>
        )
    }
}

export default State;