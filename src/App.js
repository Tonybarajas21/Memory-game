import React from "react";
import Characters from "./components/Characters/";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Header from "./components/Header";

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
 
    this.state ={
      friends: friends,
      score:0,
      highscore: 0

    };
    

   }
 
   gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(friends => {
      friends.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.friends.find((o, i) => {
      if (o.id === id) {
        if(friends[i].count === 0){
          friends[i].count = friends[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
 
   render(){
   return (
     <Wrapper>
       <Header score={this.state.score} highscore={this.state.highscore}>Memory Game</Header>
     {
       this.state.friends.map(friend => {
           return <Characters
                     clickCount={this.clickCount}
                     name={friend.name}
                     image={friend.image}
                     occupation={friend.occupation}
                     location={friend.location}
                     id={friend.id}
                     
                     />
     })
     }
       
     
     </Wrapper>
   );
 }
 }
 
 export default App;