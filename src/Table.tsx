import './Table.css';
import React from 'react'
import TableHeader from "./TableHeader"
import TableBody from "./TableBody"

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
        return (
            <tr>
                <td colSpan={7}><div className="additem_btn" onClick={this.additem_onClick}>+</div></td>
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