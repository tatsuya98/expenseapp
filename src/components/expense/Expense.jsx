import React from "react"
import "./expense.css"

function Expense({ expenses }) {

    return (
        <div className="table">
            {
               expenses.map(info=>{
                   return <table>
                       <thead>
                       <tr>
                           <th>amount</th>
                           <th>expense type</th>
                           <th>spend date</th>
                       </tr>
                       </thead>
                       <tbody>
                       <tr>
                           <td>{info.amount}</td>
                           <td>{info.expense_type}</td>
                           <td>{info.spend_date}</td>
                       </tr>
                       </tbody>
                   </table>
               })
            }
        </div>
    )
}


export default Expense