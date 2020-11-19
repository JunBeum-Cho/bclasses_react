import './App.css';

import Table from './Table'
import React from 'react';
import {AutocompleteCoursesField, AutocompleteListField} from "./AutocompleteField"

const courses = [
  { id: 1, abbreviation: "A,RESEC", course_number: "201" },
  { id: 2, abbreviation: "A,RESEC", course_number: "202" },
  { id: 3, abbreviation: "A,RESEC", course_number: "210" },
  { id: 4, abbreviation: "A,RESEC", course_number: "211" },
  { id: 5, abbreviation: "A,RESEC", course_number: "212" },
  { id: 6, abbreviation: "A,RESEC", course_number: "213" },
  { id: 7, abbreviation: "A,RESEC", course_number: "214" },
  { id: 8, abbreviation: "A,RESEC", course_number: "219A" },
  { id: 9, abbreviation: "A,RESEC", course_number: "219B" }
]

class App extends React.Component {

  state = {
    number: 0,
    bclasses: [
      { name: "Breadth Requirement - (should pick one)", 
        data: [{
            course_validation: true,
            is_offered: true,
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
            {this.renderpickers()}
            {this.renderbclasses()}
            {this.renderaddlist()}
        </div>
    )
  }

  renderbclasses() {
    const { bclasses } = this.state
    return bclasses.map(
      (bclass, index) => (<Table key={index} tableName={bclass.name} tableData={bclass.data} />)
    )
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

  renderpickers() {
    const { number, bclasses } = this.state
    console.log(bclasses.map((bclass) => bclass.name))

    return (
      <div className="pickerdiv">
        <AutocompleteListField label="Select a list" list={bclasses.map(bclass => ({name: bclass.name}))}></AutocompleteListField>
        <AutocompleteCoursesField label="Select a course" list={courses}></AutocompleteCoursesField>
      </div>
    )
  }
}

export default App



