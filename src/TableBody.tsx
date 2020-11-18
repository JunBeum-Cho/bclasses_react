import React from "react"
import './Table.css';



export default class TableBody extends React.Component {
    
    render() {
        const { data } = this.props
        return(
            <tr>
                <td>{this.changeToSign(data.availabiliy)}</td>
                <td>{data.course_title}</td>
                <td>{data.course_subtitle}</td>
                <td>{data.currently_enrolled} / {data.max_enrolled}</td>      
                <td>{data.currently_waitlisted} / {data.max_waitlisted}</td>      
                <td>{data.total_class_grade}</td>
                <td>{data.recent_section_grade} ({data.recent_section_period})</td>
            </tr>
        )
    }

    changeToSign(availabiliy: string) {
        const greenlight = "&#128994;"
        const yellowlight = "&#128993;"
        const redlight = "&#128308;"
        const whitelight = "&#9898;"
        return "x"
    }
}