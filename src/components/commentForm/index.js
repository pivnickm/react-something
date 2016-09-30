import React from 'react';
import ReactDOM from 'react-dom';

class CommentForm extends React.Component {
	constructor() {
		super();
		this.state = { author: '', text: '' };
		this.handleAuthorChange = this.handleAuthorChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleAuthorChange(evt) {
		this.setState({ author: evt.target.value });
	}
	handleTextChange(evt) {
		this.setState({ text: evt.target.value });
	}
	handleSubmit(evt) {
		evt.preventDefault();
		const author = this.state.author.trim();
		const text = this.state.text.trim();
		if (!text || !author) {
			return;
		}
		this.props.onCommentSubmit({ author: author, text: text });
		this.setState({ author: '', text: '' });
	}

	render() {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="Name"
					value={this.state.author}
					onChange={this.handleAuthorChange}
				/>
				<input
					type="text"
					placeholder="Comment"
					value={this.state.text}
					onChange={this.handleTextChange}
				/>
				<input type="submit" value="Post" />
			</form>
		);
	}
};

export default CommentForm;