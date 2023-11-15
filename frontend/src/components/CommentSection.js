
import React from 'react';
import { connect } from 'react-redux';

const CommentSection = ({ isAuthenticated, isGuest }) => {
  if (!isAuthenticated || isGuest) {
    return null; 
  }

  return (
    <div>
      {/* Componenta pentru adăugarea de comentarii */}
      <textarea placeholder="Add a comment"></textarea>
      <button>Add a comment</button>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isGuest: state.auth.isGuest,
});

export default connect(mapStateToProps)(CommentSection);
