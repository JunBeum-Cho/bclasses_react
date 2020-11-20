import './Table.css';
import React, { useState } from 'react'
import TableHeader from "./TableHeader"
import TableBody from "./TableBody"
import { AutocompleteCoursesTextField } from './AutocompleteField';

export interface TableProps {
    tableName: string
    tableData: any
    handleAddData: (courseid: any) => {}
    // onUpdate: (courseid: any) => {}
    // onRemove: (courseid: any) => {}
}

class Table extends React.Component<TableProps> {
    state = { editing: false }

	render() {
        return (
            <div className="tablearea">
                <h2 className="title">{this.props.tableName}</h2>
                <table className="content-table">
                    <TableHeader/>
                    <tbody>
                        {this.renderbody()}
                        {this.renderadditem()}
                    </tbody>
                </table>
            </div>
        )
    }

    renderbody() {
        const { tableData } = this.props
        return tableData.map((data: any, index: number) => {
            return <TableBody key={index} data={data} />
        })
    }

    renderadditem() {
        const courses = [
            { id: "1", abbreviation: "A,RESEC", course_number: "201" },
            { id: "2", abbreviation: "A,RESEC", course_number: "202" },
            { id: "3", abbreviation: "A,RESEC", course_number: "210" },
            { id: "4", abbreviation: "A,RESEC", course_number: "211" },
            { id: "5", abbreviation: "A,RESEC", course_number: "212" },
            { id: "6", abbreviation: "A,RESEC", course_number: "213" },
            { id: "7", abbreviation: "A,RESEC", course_number: "214" },
            { id: "8", abbreviation: "A,RESEC", course_number: "219A" },
            { id: "9", abbreviation: "A,RESEC", course_number: "219B" }
          ]


        if (this.state.editing === true) {
            return (
                <tr>
                    <td colSpan={7}><AutocompleteCoursesTextField label="Add Course" list={courses} handleCancel={this.handleCancel} handleCreate={this.props.handleAddData} ></AutocompleteCoursesTextField></td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td colSpan={7}><div className="additem_btn" onClick={this.additem_onClick}>+</div></td>
                </tr>
            )
        }
    }

    additem_onClick = () => {
        this.setState({editing: !this.state.editing})
    }

    handleCancel = () => {
        this.setState({editing: false})
    }

}

export default Table