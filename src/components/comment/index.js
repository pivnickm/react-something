import React from 'react';
import ReactDOM from 'react-dom';

const Comment = ({
	text,
	author,
	...props
}) => {
	return (
		<div className="comment">
			<h2 className="commentAuthor">
				{author}
			</h2>
			{text}
		</div>
	);
};

export default Comment;