import './Table.css';
import React from 'react'
import TableHeader from "./TableHeader"
import TableBody from "./TableBody"
import { AutocompleteCoursesField } from './AutocompleteField';

export interface TableProps {
    tableName: string
    tableData: any
    onCreate: (course: any) => {}
}

class Table extends React.Component<TableProps> {
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
        // return (
        //     <tr>
        //         <td colSpan={7}><div className="additem_btn" onClick={this.additem_onClick}>+</div></td>
        //     </tr>
        // )
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

        return (
            <tr>
                <td colSpan={7}><AutocompleteCoursesField label="select a course" list={courses}></AutocompleteCoursesField></td>
            </tr>
        )
    }

    additem_onClick = () => {
        // autotextfield가 나오도록 함
        // 거기에서 무언가를 클릭하면
        this.props.onCreate("asd")
    }

}

export default Table