import './Table.css';
import React from 'react'
import TableHeader from "./TableHeader"
import TableBody from "./TableBody"
import { AutocompleteCoursesTextField } from './AutocompleteField'
import allCourseList_json from "./all_courses.json"

export interface TableProps {
    tableName: string
    tableData: any
    handleAddData: (tableName: string, courseid: any) => {}
    handleRemoveData: (tableName: string, courseid: any) => void
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
            return <TableBody handleRemove={this.handleRemove} key={index} data={data} />
        })
    }

    renderadditem() {
        const allCourseList = allCourseList_json.courses
        console.log(allCourseList)
        if (this.state.editing === true) {
            return (
                <tr>
                    <td colSpan={7}>
                        <AutocompleteCoursesTextField 
                            label="Add Course"
                            list={allCourseList} 
                            handleCancel={this.handleCancel} 
                            handleCreate={this.handleCreate}>
                        </AutocompleteCoursesTextField></td>
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

    handleCreate = (courseid: number) => {
        this.props.handleAddData(this.props.tableName, courseid)
        this.setState({editing: false})
    }

    handleRemove = (courseid: number) => {
        this.props.handleRemoveData(this.props.tableName, courseid)
    }

}

export default Table