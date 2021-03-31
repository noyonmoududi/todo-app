
import { Component } from 'react';
import './App.css';

class App extends Component{
  state={
    todoList:[]
  }
  render() {
    return (
      <div className="card">
          <div className="card-body">
            <h1 className="text-center">Todos App</h1>
            <hr/>
            <form className="mb-3" onSubmit={this.handleSubmit}>
              <div className="input-group">
                <input type="text" name="todoTask" className="form-control" placeholder="Please Enter your Task" autoComplete="off" />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-outline-success">ADD</button>
                </div>
              </div>
            </form>
          </div>
          <ul className="list-group">
            {
              this.state.todoList.map(
                (item,index)=>{
                  return <li className="list-group-item" key={index}>
                    <div className="row">
                      <div className="col-md-6">
                      {item}
                      </div>
                      <div  className="col-md-6" style={{textAlign: "right"}}>
                      <button className="btn btn-sm btn-outline-danger" onClick={(event)=>{this.deleteTodoTask(event,index)}}>Delete</button>
                        </div>
                    </div>
                  </li> 
                }
              )
            }
          </ul>
          <br/>
      </div>
    );
  }
handleSubmit = (event) =>{
  var taskDesc = event.target.elements.todoTask.value;
  if (taskDesc.length > 0) {
    this.setState({
      todoList :[...this.state.todoList,taskDesc]
    })
    event.target.reset();
  }
  event.preventDefault();
  }


  deleteTodoTask = (event,index) =>{
    var taskArray = [...this.state.todoList]
    taskArray.splice(index,1)
    this.setState({todoList:taskArray})
   
  }
  

}

export default App;
