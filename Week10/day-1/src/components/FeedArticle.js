import React, { Component } from 'react';

class FeedArticle extends Component {
    render() {
        return(
            <div class="FeedArticle">
                <h3>{this.props.title}</h3>
                <p>{this.props.body}</p>
                <div class="stats-bar">
                    <p>{this.props.comments} comments</p>
                    <p>{this.props.likes} likes</p>
                </div>
            </div>
        )
    }
}

export default FeedArticle;