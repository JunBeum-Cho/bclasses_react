import './App.css';
import Table from './Table'
import React from 'react';

class App extends React.Component {
  state = {
    number: 0,
    bclasses: [
      { name: "Breadth Requirement - (should pick one)", 
        data: [{
            course_validation: true,
            is_offered: true,
            courseid: 1,
            course_title: "ESPM 60AC",
            course_subtitle: "Introduction to Culture and Natural Resource Management",
            currently_enrolled: "576",
            max_enrolled: "580",
            currently_waitlisted: "98",
            max_waitlisted: "100",
            total_class_grade: "3.736",
            recent_section_grade: "3.965",
            recent_section_period: "spring 2020"
          },
          {
            course_validation: true,
            is_offered: true,
            courseid: 2,
            availability: "Nope",
            course_title: "HISTORY 182A",
            course_subtitle: "Science, Technology, and Society",
            currently_enrolled: "47",
            max_enrolled: "130",
            currently_waitlisted: "0",
            max_waitlisted: "10",
            total_class_grade: "3.364",
            recent_section_grade: "3.8",
            recent_section_period: "spring 2020"
          },
        ]
      },
      { name: "Major Classes", 
        data: [{
            course_validation: true,
            is_offered: true,
            courseid: 1,
            course_title: "ESPM 60AC",
            course_subtitle: "Introduction to Culture and Natural Resource Management",
            currently_enrolled: "576",
            max_enrolled: "580",
            currently_waitlisted: "98",
            max_waitlisted: "100",
            total_class_grade: "3.736",
            recent_section_grade: "3.965",
            recent_section_period: "spring 2020"
          },
          {
            course_validation: true,
            is_offered: true,
            courseid: 2,
            availability: "Nope",
            course_title: "HISTORY 182A",
            course_subtitle: "Science, Technology, and Society",
            currently_enrolled: "47",
            max_enrolled: "130",
            currently_waitlisted: "0",
            max_waitlisted: "10",
            total_class_grade: "3.364",
            recent_section_grade: "3.8",
            recent_section_period: "spring 2020"
          },
        ]
      }
    ]
  }

  render() {
    return (
        <div id="cluster">
            {this.renderbclasses()}
            {this.renderaddlist()}
        </div>
    )
  }

  renderbclasses() {
    const { bclasses } = this.state
    return bclasses.map(
      (bclass, index) => (
      <Table 
        key={index}
        tableName={bclass.name} 
        tableData={bclass.data}
        handleAddData={this.handleAddData} 
        handleRemoveData={this.handleRemoveData}/>)
    )
  }

  handleAddData = (tableName, courseid) => {
    const {bclasses} = this.state
    const example = {
      course_validation: true,
      is_offered: true,
      courseid: 3,
      availability: "Nope",
      course_title: "Example 100",
      course_subtitle: "Example Class",
      currently_enrolled: `${courseid}`,
      max_enrolled: `${courseid}`,
      currently_waitlisted: `${courseid}`,
      max_waitlisted: `${courseid}`,
      total_class_grade: `${courseid}`,
      recent_section_grade: `${courseid}`,
      recent_section_period: "spring 2020"
    }

    const updated_bclasses = bclasses.map((bclass) => {
      if(bclass.name === tableName){
        return {name: bclass.name, data: [...bclass.data].concat(example)}
      } else{
        return bclass
      }
    })
    this.setState({...this.state, bclasses: updated_bclasses})
  }

  handleRemoveData = (tableName, courseid) => {
    const {bclasses} = this.state

    const updated_bclasses = bclasses.map((bclass) => {
      if(bclass.name === tableName){
        return {name: bclass.name, data: [...bclass.data].filter( course => 
          course.courseid !== courseid
        )}
      } else{
        return bclass
      }
    })
    this.setState({...this.state, bclasses: updated_bclasses})
  }


  renderaddlist() {
    return (
        <button className="addlist_btn" onClick={this.addlist_onClick} >+ Add List</button>
    )
  }

  addlist_onClick = () => {
    const { number, bclasses } = this.state
    this.setState({number: number+1, bclasses: [...bclasses.concat({name: `New list_${number}`, data: []})]})
  }
}

export default App



