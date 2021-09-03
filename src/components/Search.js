import React from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';

import { searchKeyword,searchDone,searchUndone } from '../actions';
import { completeTodo, uncompleteTodo, deleteTodo } from '../actions';

const Search = props => (
  <div>
    
    <TextField
      hintText="Search your Todo"
      floatingLabelText="Searching..."
      type="text"
      value={props.searchKeywordValue}
      onChange={e => props.setSearchKeyword(e.target.value)}
 
    />
     <button className="btn" onClick={e => props.setSearchDone('false')}>DONE</button> 
     <button className="btn" onClick={e => props.setSearchDone('true')}>UNDONE</button>             
                   
                   
                   
  </div>
)

const mapStateToProps = state => ({
  searchKeywordValue: state.searchKeyword,
  searchUndoneValue: state.searchUndone,
  searchDoneValue: state.searchDone
})

const mapDispatchToProps = dispatch => ({
  setSearchKeyword: keyword => dispatch(searchKeyword(keyword)),
  setsearchUndone: keyword => dispatch(searchUndone(keyword)),
  searchDone: keyword => dispatch(searchDone(keyword)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Search)
