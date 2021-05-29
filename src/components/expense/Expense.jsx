import React from "react"

function Expense({ expenses }) {

    return (
        <div>
            {
                expenses.map(info=>{
                    return <table>
                        <tr>
                            <th>amount</th>
                            <th>expense type</th>
                            <th>spend date</th>
                        </tr>
                        <tr>
                            <td>{info.amount}</td>
                            <td>{info.expense_type}</td>
                            <td>{info.spend_date}</td>
                        </tr>
                    </table>
                })
            }
        </div>
    )
}


export default Expense