import React, {Component} from 'react';
import '../App.css';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
        }
      };

      edit = () => {
        this.setState ({editMode: true});
      };

      save = () => {
        let updTitle = this.refs.newTitle.value;
        
        this.props.editItem (updTitle, this.props.key);

        this.setState ({
          editMode: false})
      };

      renderNormal = () => {
        return (
          <div className="container">
          <div className="row">
          <div className="col-12">
          <div className="col-12">
            <div className="ToDoItem">
            <p className="ToDoItem-Text">{this.props.title}</p>
            <button className="ToDoItem-Edit" onClick={this.edit}>&#x270D;</button>
            <button className="ToDoItem-Delete" onClick={this.props.deleteItem}>Delete</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        );
      };

      renderEdit = () => {
        return (
          <div className="container">
          <div className="row">
          <div className="col-12">
          <div className="ToDoItem">
            <textarea ref="newTitle" className="edit-text" defaultValue={this.props.title}></textarea>
            <button onClick={this.save} className="ToDoItem-Save">Save</button>
          </div>
          </div>
          </div>
          </div>
        );
      };

      render() {
        if (this.state.editMode) {
          return this.renderEdit ();
        } else {
          return this.renderNormal ();
        }
      }
}

export default ToDoItem;