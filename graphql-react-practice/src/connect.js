/**
 * http://usejsdoc.org/
 */
import React, { Component } from 'react';
import {Query,ApolloProvider } from 'react-apollo';
import gql from "graphql-tag";
import RotoqlMain from'./RotoqlMain.js';
import RotoqlHeader from './RotoqlHeader.js';


//query to fetch fantasyTeam with parameter id 
const q=gql`
query test($id:UUID!){
  auth(token: "f1432e0d-557d-466f-877c-8fc6631e7594 15552000.DcDrmg.0OYsrRdQvK2HLro91Fjyc-8U3C0"){
	fantasyTeam(id: $id){
			name,
			fantasyPlayers {
			isStarting
			eligiblePositions
				realPlayer{
						fullName
						imageUrl
				}
				}
		}
	}
  }
`;
// Query component fetching data with the above query and variables(configurable)
const FetchFantasyTeam=({id})=>(
		<Query query={q} variables={{id}} skip={!id}>
	    {({ loading, error, data, startPolling, stopPolling }) => {
	      if (loading) return null;
	      if (error) return `Error!: ${error}`;
	      let team={};
	      if(data.auth && data.auth.fantasyTeam){
	    	   team=data.auth.fantasyTeam;
	    	
	    
	    	  console.log(team);
	      }
	      return (
	    		  <div>
	    		  <RotoqlHeader todos={team.fantasyPlayers} team={team}/>
        		  <RotoqlMain todos={team.fantasyPlayers} team={team} />
        		  </div>
        		  
	      );
	    }}
	  </Query>


);
export default FetchFantasyTeam;	      
	      
	      