import React from 'react';
import ReactDOM from 'react-dom';

const Comment = ({
	text,
	author,
	key,
	...props
}) => {
	console.log('keeey', key, this);
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