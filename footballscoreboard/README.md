# Football Score Board

Board consists of 2 main components, System Data and Summary.

System Data is used to create new, update and delete games from the Redux store, while Summary is just a representation of the games ordered as required.

Edge cases supported for New Game: 
 - Teams can not be the same
 - Team can not play more than one game at the same time
 - Team can not have an empty name

Score edge cases:
 -  Score can not be negative.

Regarding score, it is possible to type smaller amount than current one, but this may not be allowed, as score is almost never going to be reduced.

Some basic tests for Board elements are added in SystemData and Board components.

ChakraUI is used as a component library.
