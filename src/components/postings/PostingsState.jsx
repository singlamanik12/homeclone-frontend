import React, { Component } from 'react';
import Postings from './Postings';
class PostingsState extends Component {
    state = { name="Manik" }
    render() { 
        return ( <Postings name={this.state.name}/> );
    }
}
 
export default PostingsState;