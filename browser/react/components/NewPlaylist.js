import React from 'react';
import { Link } from 'react-router';

const NewPlaylist = function (props) {
return (
	<div className="well">
	  <form className="form-horizontal" onSubmit={props.handleSubmit}>
	    <fieldset>
	      <legend>New Playlist</legend>
	      {props.inputIsInvalid ? <div className="alert alert-warning">{props.warningText}</div> : null}
	      <div className="form-group">
	        <label className="col-xs-2 control-label">Name</label>
	        <div className="col-xs-10">
	          <input className="form-control" type="text" value={props.inputValue} onChange={props.handleChange}/>
	        </div>
	      </div>
	      <div className="form-group">
	        <div className="col-xs-10 col-xs-offset-2">
	          <button disabled={props.inputIsInvalid} type="submit" className="btn btn-success">Create Playlist</button>
	        </div>
	      </div>

	    </fieldset>
	  </form>
	</div>
)}

export default NewPlaylist;

