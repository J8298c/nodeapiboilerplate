/**
 * Created by juliomojica on 6/29/17.
 */
import React, {Component} from 'react';

export default (props)=>{
    return(
        <div>
            <input type={props.type} className={props.className}
                   placeholder={props.placeholder} />
        </div>
    )
}