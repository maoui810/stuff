import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = props => {
    const dataPointValues = props.dataPs.map(dataP => dataP.value);

    const totalMax = Math.max(...dataPointValues);

    return <div className="chart">
        {props.dataPs.map(dataP =>
            <ChartBar
                key={dataP.label}
                value={dataP.value}
                maxValue={totalMax}
                label={dataP.label}/>)}
    </div>
}

export default Chart;
