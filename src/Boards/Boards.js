import React from "react";

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
    };
  }

  componentDidMount() {
    fetch("https://api.autism-tools.org").then((response) => {
      console.log("response: ", response.json());
    });
  }

  render() {
    // const renderedBoards = this.state.boards;
    // console.log("renderedBoards: ", renderedBoards);
    return (
      <div>
        <h1>So far so good.</h1>
        {/* {renderedBoards} */}
      </div>
    );
  }
}

export default Boards;
