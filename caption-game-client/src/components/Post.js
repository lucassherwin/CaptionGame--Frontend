import React, {Component} from 'react';
import CaptionDisplay from './CaptionDisplay'

export default class Post extends Component {
        
    
    render(){
        console.log(this.props.postObj)
        return(
            <div> 
            <CaptionDisplay />
            </div>
        )
    }
}