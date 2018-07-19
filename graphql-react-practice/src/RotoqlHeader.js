/**
 * http://usejsdoc.org/
 */
import React,{ Component } from 'react';
class RotoqlHeader extends React.Component {
  
    render() {
        return (
            <div className="rotoql-header">
            <h3>{this.props.team.name}</h3>
            
            </div>
        )
    }
}
export default RotoqlHeader;   