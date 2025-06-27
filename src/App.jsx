import { PureComponent, createRef } from "react";

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      guessItem: null,
      count: null,
      player: true,
    };
    this.guessInput = createRef();
  }
  componentDidMount = () => {
    this.guessInput.current.focus();
  };
  handleStart = (e) => {
    e.preventDefault();
    if (this.state.count === null) {
      this.setState({
        guessItem: this.guessInput.current.value,
        player: !this.state.player,
        count: 0,
      });
      this.guessInput.current.value = "";
    }
    if (this.state.guessItem !== this.guessInput.current.value) {
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.guessItem);
      this.guessInput.current.value = "";
    }
    if (
      this.state.guessItem !== null &&
      this.state.guessItem == this.guessInput.current.value
    ) {
      alert("you win!!");
      this.setState({
        guessItem: null,
        count: null,
        player: true,
      });
      this.guessInput.current.value = "";
    }
  };
  handleClear = () => {
    this.guessInput.current.value = "";
  };
  render() {
    return (
      <form className="main" onSubmit={this.handleStart}>
        <h4>Guess Word</h4>
        <input type="text" ref={this.guessInput} placeholder="write here..." />
        <div className="inputBtns">
          <button type="submit">{this.state.player ? "start" : "check"}</button>
          <button type="button" onClick={this.handleClear}>Clear</button>
        </div>
        <p>{this.state.player ? "Dealer" : "Player"}</p>
        <p>{this.state.count? `Mistakes: ${this.state.count}`: "" }</p>
      </form>
    );
  }
}

export default App;
