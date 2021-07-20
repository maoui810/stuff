import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = props => {

    return <div className="chart">
        {props.dataPs.map(dataP =>
            <ChartBar
                key={dataP.label}
                value={dataP.value}
                maxValue={null}
                label={dataP.label}/>)}
    </div>
}

export default Chart;
