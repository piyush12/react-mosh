import React, {Component} from 'react';

class TableHeader extends Component {

    raiseSort = sort => {
        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.sort === sort){
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc':'asc';
        }else{
            sortColumn.sort = sort;
            sortColumn.order = 'asc';
        }
            this.props.onSort(sortColumn)
    }
    renderSortIcon = column => {
        const {sortColumn} = this.props;
        if(column.sort !== sortColumn.sort) return null;
        if(sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>
    }

    addKey = column => {
        console.log(column)
    }

    render() { 
        const {columns } = this.props;
        return ( 
            <thead>
                <tr>
                    {columns.map(column => (
                        <th key={(column) => this.addKey()} onClick={()=> this.raiseSort(column.sort)}>{column.label} {this.renderSortIcon(column)}</th>
                    ))}
                </tr>
        </thead>
         );
    }
}
 
export default TableHeader;