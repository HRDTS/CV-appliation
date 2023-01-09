import React, { Component } from "react";
import Overview from "./overview";
import uniqid from "uniqid";

class Educational extends Component {
  constructor() {
    super();

    
    this.state = {
        task: {
            school: '',
            study: '',
            date: '',
            id: uniqid()
        },
        tasks: [],
        selectedTask : '',
        editTrueorFalse: false,
    };
    this.handleChangeSchool = this.handleChangeSchool.bind(this)
    this.handleChangeStudy = this.handleChangeStudy.bind(this)
    this.handleChangeDate = this.handleChangeDate.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
    this.testConsole = this.testConsole.bind(this)
    
  }

  handleChangeSchool = (e) => {
    this.setState({
      task: {
        school: e.target.value,
        study: this.state.task.study,
        date: this.state.task.date,
        id: uniqid()
      }
    })
  }

  handleChangeStudy = (e) => {
    this.setState({
      task: {
        school: this.state.task.school,
        study: e.target.value,
        date: this.state.task.date,
        id: uniqid()
      }
    })
  }

  handleChangeDate = (e) => {
    this.setState({
      task: {
        school: this.state.task.school,
        study: this.state.task.study,
        date: e.target.value,
        id: uniqid()
      }

    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        school: '',
        study: '',
        date: '',
        id: uniqid()      
      }
    })
    
  }

  handleRemove = (id) => {
    var newTasks = this.state.tasks.filter(element => element.id !== id)
    this.setState({
      tasks: newTasks
    })
  }

  handleEdit = (id) => {
    const selectList = this.state.tasks.map(element => {
      if (element.id === id) {
        this.setState({
          task: {
            school: element.school,
            study : element.study,
            date: element.date,
            id: element.id
          },
          selectedTask: element.id
        })
    }
    }) 
    this.setState({
      editTrueorFalse : true
    })
  }

  handleEditSubmit = (e) => {
    e.preventDefault();
    this.setState({
      editTrueorFalse: false
    })
    /*const editedTasks = this.state.tasks.map(element => {
      if (element.id === this.state.selectedTask) {
            element.school = this.state.task.school,
            element.study = this.state.task.study,
            element.date = this.state.task.date
      }
    })
    this.setState({
      tasks: editedTasks
    })*/
  }


  testConsole = (e) => {
    console.log(this.state.tasks)

  }


  render() {
    const { school, study, date, id } = this.state.task
    const {editTrueorFalse} = this.state
    

    return (
      <div>
        <form className="educational" onSubmit={this.handleSubmit}>
            <label htmlFor="schoolInput">Enter school name</label>
            <input
              onChange={this.handleChangeSchool}
              value={school}
              type="text"
              id="schoolInput"
            />
            <label htmlFor="studyInput">Enter title of study</label>
            <input
              onChange={this.handleChangeStudy}
              value={study}
              type="text"
              id="studyInput"            
            />
            <label htmlFor="dateInput">Enter date of study</label>
            <input
              onChange={this.handleChangeDate}
              value={date}
              type="text"
              id="dateInput"            
            />
            {editTrueorFalse ? <button type="button" onClick={this.handleEditSubmit}>Save edit</button> : <button type="submit">Save changes</button>}
            <button type="button" onClick={this.testConsole} >console</button>
            
        </form>
        <Overview tasks={this.state.tasks} handleRemove={this.handleRemove} handleEdit={this.handleEdit}/>
      </div>
    );
  }
}

export default Educational;