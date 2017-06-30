/**
 * Created by juliomojica on 6/29/17.
 */
import React, {Component} from 'react';

export default ()=>{
    return (
        <button className={this.props.className} onClick={this.props.onClick}>
            {this.props.text}
        </button>
    )
}