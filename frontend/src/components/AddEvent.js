
import React from 'react';
import { connect } from 'react-redux';

const AddEventComponent = ({ isAuthenticated, isGuest, addEvent }) => {
  if (!isAuthenticated || isGuest) {
    return null; }

  return (
    <button onClick={addEvent}>Add an event</button>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isGuest: state.auth.isGuest,
});

const mapDispatchToProps = dispatch => ({
  addEvent: () => dispatch({ type: 'ADD_EVENT' }), 
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEventComponent);
