import './Table.css';
import React from 'react'
import TableHeader from "./TableHeader"
import TableBody from "./TableBody"

export interface TableProps {
    tableName: string
    tableData: any
}

class Table extends React.Component<TableProps> {
	render() {
        return (
            <div>
                <h2 className="title">{this.props.tableName}</h2>
                <table className="content-table">
                    <TableHeader/>
                    <tbody>
                        {this.renderbody()}
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
}

export default Table


// <tbody id="corestatisticscourses_body">
// <tr>
//     <td>&#x1F7E2;</td>
//     <td>STAT 133</td>
//     <td class="course-title">Concepts in Computing with Data</td>
//     <td>96 / 180</td>
//     <td>0 / 36</td>
//     <td>3.276</td>
//     <td>3.664 (spring 2020)</td>
// </tr><tr>
//     <td>&#x1F7E1;</td>
//     <td>STAT 134</td>
//     <td class="course-title">Concepts of Probability</td>
//     <td>262 / 270</td>
//     <td>4 / 60</td>
//     <td>2.804</td>
//     <td>3.929 (spring 2020)</td>
// </tr><tr>
//     <td>&#x1F7E2;</td>
//     <td>STAT 135</td>
//     <td class="course-title">Concepts of Statistics</td>
//     <td>123 / 180</td>
//     <td>0 / 36</td>
//     <td>2.806</td>
//     <td>3.57 (spring 2020)</td>
// </tr></tbody>
