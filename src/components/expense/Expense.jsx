import React from "react"

function Expense({ expenses }) {

    return (
        <div>
            <table>
                <tr>
                    <th>amount</th>
                    <th>expense type</th>
                    <th>spend date</th>
                </tr>
                <tr>
                    {
                        expenses.map(info=>{
                            return <div><td>{info.amount}</td>
                                        <td>{info.expense_type}</td>
                                        <td>{info.spend_date}</td>
                            </div>
                        })
                    }
                </tr>
            </table>
        </div>
    )
}


export default Expense