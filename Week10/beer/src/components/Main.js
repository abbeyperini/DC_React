import React, { Component } from 'react';

class Main extends Component {
    constructor() {
        super()

        this.state = {
            page: 1,
            breweries: []
        }
    }

    fetchBreweries = () => {
        fetch('https://api.openbrewerydb.org/breweries?per_page=21')
        .then(response => response.json())
        .then(result => {
          this.setState({
            breweries: result
          })
        })
      }
    
    componentDidMount() {
        this.fetchBreweries()
    }

    fetchMoreBreweries = () => {
        let page = this.state.page + 1;

        fetch(`https://api.openbrewerydb.org/breweries?page=${page}&per_page=21`)
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

        fetch(`https://api.openbrewerydb.org/breweries?page=${page}&per_page=21`)
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

export default Main;