import React from 'react'
import { Chart } from 'react-google-charts'

function BarChart(props) {
    return (
        <>
        { props.CountDeliveryNotDone==0 && props.CountDeliveryDone==0?null :
        <div>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                    [' ', 'Planned', 'Done'],
                    [' ',  props.CountDeliveryNotDone, props.CountDeliveryDone],
                ]}
                options={{
                    slices: {
                        0: { color: '#A9E461' },
                        1: { color: '#E48161' },
                    }
                }}
                // For tests
                rootProps={{ 'data-testid': '2' }}
            />
        </div>
            }
            </>
    )
}
export default BarChart;