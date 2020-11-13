import React, { useEffect, useState } from 'react';

function Budget(props) {
    const [budgetState, setBudgetState] = useState({checking: 30, saving: 30, brokerage: 30})

    const handleBudgetOnChange = (e) => {
        setBudgetState({
            ...budgetState,
            [e.target.name]: parseInt(e.target.value)
        })
    }

    useEffect(() => {
        // call after state has been set
        props.handleOnChange(budgetState)
    })

    return (
        <div className="budget">
            <label htmlFor="checking">Checking:</label>
            <input onChange={handleBudgetOnChange} type="text" placeholder="30" name="checking" id="checking"></input>
            <label htmlFor="saving">Saving:</label>
            <input onChange={handleBudgetOnChange} type="text" placeholder="30" name="saving" id="saving"></input>
            <label htmlFor="brokerage">Brokerage:</label>
            <input onChange={handleBudgetOnChange} type="text" placeholder="30" name="brokerage" id="brokerage"></input>
        </div>
    );
};

export default Budget;