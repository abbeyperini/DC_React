import React, { useEffect, useState} from 'react';
import { PieChart } from 'react-minimal-pie-chart';

function Chart(props) {
    const [budgetState, setBudgetState] = useState([]);

    useEffect(() => {
        setBudgetState(props.budgetState)
    })

    return(
        <div>
        {budgetState.length === 0 ? <PieChart className="pieChart" animate animationDuration={1000} animationEasing="ease-out" data={[
            {title: 'Checking', value: 30, color: '#E38627'},
            {title: 'Saving', value: 30, color: '#C13C37'},
            {title: 'Brokerage', value: 30, color: '#6A2135'},
        ]} label={(data) => data.dataEntry.value + "%"} labelPosition={65} labelStyle={{
            fontSize: "10px",
            fontColor: "FFFFFA",
            fontWeight: "800"
        }}
        /> : <PieChart className="pieChart" animate animationDuration={1000} animationEasing="ease-out" data={[
            {title: 'Checking', value: parseInt(budgetState.checking), color: '#E38627'},
            {title: 'Saving', value: parseInt(budgetState.saving), color: '#C13C37'},
            {title: 'Brokerage', value: parseInt(budgetState.brokerage), color: '#6A2135'},
        ]} label={(data) => data.dataEntry.value + "%"} labelPosition={65} labelStyle={{
            fontSize: "10px",
            fontColor: "FFFFFA",
            fontWeight: "800"
        }} lineWidth={65}
        />}
        </div>
    );
};

export default Chart;