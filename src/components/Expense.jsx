import React from "react"

function Expense({ expenses }) {

    return (
        <div>
            {
                expenses.map(info=>{
                    return <li>
                        <p>{info.amount} {info.expensetype} {info.spenddate}</p>
                    </li>
                })
            }
        </div>
    )
}


export default Expense