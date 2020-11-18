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
            <div className="tablearea">
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