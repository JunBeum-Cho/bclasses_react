import './App.css';
import Table from './Table'
import React from 'react';

class App extends React.Component {

  state = {
    bclasses: [
      { id: 0,
        name: "Breadth Requirement - (should pick one)", 
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
            {this.renderbclasses()}
        </div>
    )
  }

  renderbclasses() {
    const { bclasses } = this.state
    return bclasses.map(
      bclass => (<Table key={bclass.id} tableName={bclass.name} tableData={bclass.data} />)
    )
  }
}

export default App





