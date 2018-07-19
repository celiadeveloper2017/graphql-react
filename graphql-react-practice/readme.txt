Environment:

Recat + Apollo Client + apollo-graphql

build and run

firstly navigate to the root path of rotoql-rect

type command -- npm install to install all the packages

then type command -- npm start 

if the above steps successfully completed, the browser should open a new tag window, 
the port 3000 is listened by rotoal-rect project


rotoql-rect
	--public
	--src
	  --App.css  style for the main layout
	  --style.css style for the detailed elements in components
	  --App.js main component wrap the Query Components and handle and screen events
	  --connect.js defined the query and implements of Graphql Query, 
	  		currently the query has one variable : id to fetch data upon different id.
	  --RotoqlHeader.js a simple component to present the header of fantasyTeam, 
	     can handle more events or decoration if given more information or data
	   --RotoqlMain.js individual component to present the records of fantasyPlayers
	   --RotoalItem.js a component as template to present each record of fantasyPlayer
	  