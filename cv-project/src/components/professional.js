import React, { Component } from "react";
import OverviewProf from "./overviewProf";
import uniqid from "uniqid";

class Professional extends Component {
  constructor() {
    super();
    this.state = {
        task: {
            company: '',
            position: '',
            mainResponsibilities: [''],
            date: '',
            id: uniqid()
        },
        tasks: [],
    };
    this.handleChangeCompany = this.handleChangeCompany.bind(this)
    this.handleChangePosition = this.handleChangePosition.bind(this)
    this.handleChangeMainResponsibilities = this.handleChangeMainResponsibilities.bind(this)
    this.handleChangeDate = this.handleChangeDate.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    
  }

  handleChangeCompany = (e) => {
    this.setState({
      task: {
        company: e.target.value,
        position: this.state.task.position,
        mainResponsibilities: this.state.task.mainResponsibilities,
        date: this.state.task.date,
        id: uniqid()
      }
    })
  }

  handleChangePosition = (e) => {
    this.setState({
      task: {
        company: this.state.task.company,
        position: e.target.value,
        mainResponsibilities: this.state.task.mainResponsibilities,
        date: this.state.task.date,
        id: uniqid()
      }
    })
  }

  handleChangeMainResponsibilities = (e) => {
    this.setState({
      task: {
        company: this.state.task.company,
        position: this.state.task.position,
        mainResponsibilities: e.target.value,
        date: this.state.task.date,
        id: uniqid()
      }

    })
  }

  handleChangeDate= (e) => {
    this.setState({
      task: {
        company: this.state.task.company,
        position: this.state.task.position,
        mainResponsibilities: this.state.task.mainResponsibilities,
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
        company: '',
        position: '',
        mainResponsibilities: '',
        date: '',
        id: uniqid(),      
      }
    })
    console.log(this.state.tasks)
  }

  handleRemove = (id) => {
    var newTasks = this.state.tasks.filter(element => element.id !== id)
    this.setState({
      tasks: newTasks
    })
  }



  render() {
    const { company, position, mainResponsibilities, date, id } = this.state.task
    

    return (
      <div>
        <form className="professional" onSubmit={this.handleSubmit}>
            <label htmlFor="companyInput">Enter company name</label>
            <input
              onChange={this.handleChangeCompany}
              value={company}
              type="text"
              id="companyInput"
            />
            <label htmlFor="positionInput">Enter position title</label>
            <input
              onChange={this.handleChangePosition}
              value={position}
              type="text"
              id="positionInput"            
            />
            <label htmlFor="mainResponsibilitiesInput">Enter the main tasks of your role</label>
            <input
              onChange={this.handleChangeMainResponsibilities}
              value={mainResponsibilities}
              type="text"
              id="mainResponsibilitiesInput"            
            />
            <label htmlFor="dateInput">Enter start date and end date of job</label>
            <input
              onChange={this.handleChangeDate}
              value={date}
              type="text"
              id="dateInput"            
            />            
            <button type="submit">Save changes</button>
        </form>
        <OverviewProf tasks={this.state.tasks} handleRemove={this.handleRemove} handleEdit={this.handleEdit}/>
      </div>
    );
  }
}

export default Professional;