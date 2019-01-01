import React, {Component} from 'react';
import ToDoItem from './ToDoItem';
import '../App.css'

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            title: '',
            todo: ''
        };
    };

    createNewToDoItem = () => {
      this.setState(({ list, title }) => ({
        list: [
            ...list,
          {
            title
          }
        ],
        title: ''
      }));
    };

    handleKeyPress = e => {
        if (e.target.value !== '') {
          if (e.key === 'Enter') {
            this.createNewToDoItem();
          }

        }
    };

    handleTitleInput = e => {
      this.setState({
        title: e.target.value,
      });
    };

    
    deleteItem = indexToDelete => {
        this.setState(({ list }) => ({
          list: list.filter((toDo, index) => index !== indexToDelete)
      }));
    };

    // editItem = (updTitle, updToDo, i) => {
    //     let arr = this.state.list;
    //     arr[i].title = updTitle;
    //     arr[i].todo = updToDo;
    //     this.setState ({list: arr});
    // };
    editItem = (i, updTitle) => {
    let arr = this.state.list;
    arr[i].title = updTitle;
    this.setState ({list: arr});
};

    eachToDo = (item, i) => {
        return <ToDoItem
                    key={i}
                    title={item.title}
                    todo={item.todo}
                    deleteItem={this.deleteItem.bind(this, i)}
                    editItem={this.editItem.bind(this, i)}
                />
      };

    render() {
        return (
            <div className="ToDo">
      
                <h1 className="ToDo-Header">ADDING NOTES</h1>
                <div className="ToDo-Container">

                    <div className="ToDo-Content">
                        {this.state.list.map(this.eachToDo)}
                    </div>

                    <div>
                       <input type="text" placeholder="Enter a Note" value={this.state.title} onChange={this.handleTitleInput} onKeyPress={this.handleKeyPress}/>
                       <button className="ToDo-Add" onClick={this.createNewToDoItem}>+</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default ToDo;