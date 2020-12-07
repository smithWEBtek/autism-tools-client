import React from "react";
import Document from "./Document";
const API_URL = process.env.REACT_APP_API_URL

class Documents extends React.Component {
  state = {
    visible: false,
    documents: [],
  };

  componentDidMount() {
    fetch(`${API_URL}/documents`)
      .then((response) => response.json())
      .then((documents) => this.setState({ documents: documents }));
  }

  showDocuments = (event) => {
    const visible = this.state.visible;
    this.setState({ visible: !visible });
  };

  render() {
    let renderedDocuments;
    if (this.state.visible) {
      renderedDocuments = this.state.documents.map((document, index) => {
        return <Document document={document} key={index} />;
      });
    }

    return (
      <div>
        <h2>
          <button onClick={this.showDocuments}>Documents</button>
        </h2>
        <div>
          <p>Legal | Medical | Education | Archives</p>
        </div>
        {renderedDocuments}
      </div>
    );
  }
}

export default Documents;
