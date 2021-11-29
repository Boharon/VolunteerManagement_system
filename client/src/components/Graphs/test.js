import React from 'react'
import { Chart } from 'react-google-charts'
import BarChart from './BarChart'
import PieChart from './PieChart'
//import { MdBorderLeft } from 'react-icons/md'
//import { PieChart } from 'react-minimal-pie-chart';
//import { LineChart, Line,XAxis,Tooltip, CartesianGrid} from 'recharts';
function MyChart() {
    return(
        <div>
            <BarChart/>
            <PieChart/>
    </div>
  )
}
export default MyChart;