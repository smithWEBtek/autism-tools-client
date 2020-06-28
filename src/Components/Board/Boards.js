import React from "react";
import Board from "./Board";

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      boards: [],
    };
  }

  componentDidMount() {
    fetch("https://api.autism-tools.org/api/v1/boards")
      .then((response) => response.json())
      .then((boards) => this.setState({ boards: boards }));
  }

  showBoards = (event) => {
    const visible = this.state.visible;
    this.setState({ visible: !visible });
  };

  render() {
    let renderedBoards;
    if (this.state.visible) {
      renderedBoards = this.state.boards.map((board, index) => {
        return <Board board={board} key={index} />;
      });
    }

    return (
      <div>
        <h2>
          <button onClick={this.showBoards}>Boards</button>
        </h2>
        <p>Communications | Choices</p>
        {renderedBoards}
      </div>
    );
  }
}

export default Boards;
