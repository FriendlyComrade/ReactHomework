import React from 'react';
import './Checkbox.css'

export default class Checkbox extends React.PureComponent {

    render () {
        console.log('Checkbox worked...')
        return (  
            <input type="checkbox" checked={this.props.isChecked} onChange={this.props.onChange}/>
        );
    }
};
