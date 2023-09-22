import React, { Component } from 'react';
import './enrollment.css';

class Ennr extends Component {
  constructor() {
    super();
    this.state = {
      description: '',
      screenshots: [],
      chatMessages: [],
      newMessage: '',
      imagePreviews: [], // Store image previews
    };
  }

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  handleScreenshotChange = (e) => {
    const files = e.target.files;
    this.setState({ screenshots: files });

    // Create and store image previews
    const imagePreviews = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreviews.push(e.target.result);
        this.setState({ imagePreviews });
      };
      reader.readAsDataURL(files[i]);
    }
  };

  handleEnrollSubmit = (e) => {
    e.preventDefault();
    // Handle enrollment submission here (e.g., send data to a server)
    // Reset the form fields after submission
    this.setState({ description: '', screenshots: [], imagePreviews: [] });
  };

  handleNewMessageChange = (e) => {
    this.setState({ newMessage: e.target.value });
  };

  handleChatSubmit = (e) => {
    e.preventDefault();
    // Handle sending a new chat message here
    const newMessage = this.state.newMessage;
    this.setState((prevState) => ({
      chatMessages: [...prevState.chatMessages, newMessage],
      newMessage: '',
    }));
  };

  render() {
    return (
      <div className="app-container">
        <div className="left-section">
          <h2>Upload Your Work</h2>
          <form onSubmit={this.handleEnrollSubmit}>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              cols="50"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              required
            ></textarea>

            <label htmlFor="screenshots">Screenshots:</label>
            <input
              type="file"
              id="screenshots"
              name="screenshots"
              accept="image/*"
              onChange={this.handleScreenshotChange}
              multiple // Allow multiple file selection
            />

            {/* Image preview area */}
            {this.state.imagePreviews.length > 0 && (
              <div className="image-preview">
                <h3>Image Previews:</h3>
                {this.state.imagePreviews.map((preview, index) => (
                  <img
                    key={index}
                    src={preview}
                    alt={`Screenshot ${index + 1}`}
                  />
                ))}
              </div>
            )}

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="right-section">
          <h2>Chat</h2>
          <div className="chat-messages">
            {this.state.chatMessages.map((message, index) => (
              <div key={index} className="chat-message">
                {message}
              </div>
            ))}
          </div>
          <form onSubmit={this.handleChatSubmit}>
            <input
              type="text"
              value={this.state.newMessage}
              onChange={this.handleNewMessageChange}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Ennr;