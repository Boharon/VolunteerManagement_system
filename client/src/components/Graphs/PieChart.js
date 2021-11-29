import React from 'react'
import { Chart } from 'react-google-charts'

function PieChart(props) {
    return (
        <div>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Pizza', 'Popularity'],
                    ['Planned', props.CountDeliveryNotDone],
                    ['Done', props.CountDeliveryDone],
                ]}
                options={{
                    slices: {
                        0: { color: '#F50057' },
                        1: { color: '#00BFA6' },
                    }
                    /*title: 'Popularity of Types of Pizza',
                    sliceVisibilityThreshold: 0.2, // 20%*/
                }}
                rootProps={{ 'data-testid': '10' }}
            />

        </div>
    )
}
export default PieChart;