import React from "react"

function Expense({ expenses }) {

    return (
        <div>
            {
                expenses.map(info=>{
                    return <li>
                        <p>{info.amount} {info.expense_type} {info.spend_date}</p>
                    </li>
                })
            }
        </div>
    )
}


export default Expense