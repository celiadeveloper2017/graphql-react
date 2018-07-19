/**
 * http://usejsdoc.org/
 */
import React,{ Component } from 'react';
import RotoqlItem from'./RotoqlItem.js';

class RotoqlMain extends React.Component {
	

    render() {
        if(this.props.todos.length == 0) {
            return (
                <div className="todo-empty"></div>
            )
        } else {
            return (
            		<div className="rotoql-main">
            		
            	<div className="record-container">
            	<p className="recordstop">Fantasy Players</p>
                <ul >
                    {
                        this.props.todos.map((todo, index) => {
                         
                            return <RotoqlItem text={todo.realPlayer.fullName} player={todo.realPlayer} index={index} isStarting={todo.isStarting}  eligiblePositions={todo.eligiblePositions} {...this.props}/>
                        })
                    }
                </ul>
                </div>
                </div>
             
            )
        }
    }
}
export default RotoqlMain;   