import React from 'react';

import './ChartBar.css'


const ChartBar = (props) => {
    let barFillH = '0%';

    if (props.max > 0) {
        barFillH = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height: barFillH}}/>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    );
};

export default ChartBar;
