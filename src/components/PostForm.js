import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../actions/postsActions";
// import proptypes
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    this.props.addPost(post);
  }
  render() {
    return (
      <div>
        <h3>Add Post</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-4 form-group">
              <label>post title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.title}
              />
            </div>
            <div className="col-md-4 form-group">
              <label>post body</label>
              <textarea
                name="body"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.body}
              />
            </div>
            <br />
            <hr />
            {/* <div className="col-md-4"> */}
            <button type="submit" className="btn btn-success btn-block">
              Save
            </button>
            {/* </div> */}
          </div>
        </form>
        <hr />
      </div>
    );
  }
}

export default connect(null, { addPost })(PostForm);
