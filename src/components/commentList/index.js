import React from 'react';
import ReactDOM from 'react-dom';
import Comment from '../comment'

const CommentList = ({
	data,
	...props
}) => {
	const commentNodes = data.map(function(comment) {
		return (
			<Comment author={comment.author} key={comment.id} text={comment.text} />
		);
	});
	return (
		<div className="commentList">
			{commentNodes}
		</div>
	);
};

export default CommentList;