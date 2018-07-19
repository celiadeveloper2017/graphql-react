/**
 * http://usejsdoc.org/
 */
import React,{ Component } from 'react';
import './style.css';
class RotoqlItem extends React.Component {
   
  
    render() {
        let style={color:"red"};
        return (
            <li key={this.props.index} >
        	<div className="record-grid">
        	<div className="record-left-container">
            <div className='record-item-left'>
                
             <div classNmae="record-left-img">
             <span> {this.props.player.imageUrl?
            		  (<img src={this.props.player.imageUrl} />)
            		  :(<img src="nopic.png" />)
              
            		  }</span></div>
           <div className="record-left-name"><span>{this.props.text}</span></div>
          <div className="mobile-ep"><div className="record-item-slice"><p>Eligible Positions</p></div>
           <div className="record-item-slice" >
          
         <ul>
          {this.props.eligiblePositions.map((ep, index)=> 
          <li key={index} className="nomore">{ep}</li>
          )}
           </ul>
         
           </div>
           </div>
           
              </div> 
              </div>
              <div className="record-right-container">
              <div className="record-item-right" >
             <div className="mobile-fn"><div className="record-item-slice "><span>{this.props.text}</span></div></div>
              <div className="record-item-slice "><span>Started</span></div>
             <div className="record-item-slice">
              {this.props.isStarting?
            		  (<span>Yes</span>):(<span style={style}>Not Yet</span>)
             
            		  }</div>
              
              </div>
              <div className="record-item-plaint" >
              <div className="desktop-ep"> <div className="record-item-slice"><p>Eligible Positions</p></div>
              <div className="record-item-slice" >
             
            <ul>
             {this.props.eligiblePositions.map((ep, index)=> 
             <li key={index} className="nomore">{ep}</li>
             )}
              </ul>
            
              </div>
              </div>
              </div>
             </div>
              </div>
            </li>
        )
    }
}
export default RotoqlItem;   