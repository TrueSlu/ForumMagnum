import { Components, replaceComponent, withEdit } from 'meteor/vulcan:core';
import React from 'react';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import { Comments } from "meteor/example-forum";

const CommentsList = ({
  comments,
  currentUser,
  highlightDate,
  editMutation,
  post,
  frontPage,
}) => {
  if (comments) {
    return (
      <Components.ErrorBoundary>
        <div className="comments-list">
          {comments.map(comment =>
            <Components.CommentsNode
              currentUser={currentUser}
              comment={comment.item}
              nestingLevel={1}
              children={comment.children}
              key={comment.item._id}
              highlightDate={highlightDate}
              editMutation={editMutation}
              post={post}
              frontPage={frontPage}
            />)
          }
        </div>
      </Components.ErrorBoundary>
    )
  } else {
    return (
      <div className="comments-list">
        <p>
          <FormattedMessage id="comments.no_comments"/>
        </p>
      </div>
    )
  }

};

CommentsList.displayName = "CommentsList";

const withEditOptions = {
  collection: Comments,
  fragmentName: 'CommentsList',
};


replaceComponent('CommentsList', CommentsList, [withEdit, withEditOptions]);
