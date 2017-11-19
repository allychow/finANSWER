import React, {Component} from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import axios from 'axios'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
  
class OweChart extends Component {
   constructor() {
       super();
       this.state = {expenses: [], total: 0};
   }

   render() {
       var data = [
           {name: 'Page A', YouOwe: 4000, pv: 2400, amt: 2400},
           {name: 'Page B', YouOwe: 3000, pv: 1398, amt: 2210},
           {name: 'Page C', YouOwe: 2000, pv: 9800, amt: 2290},
           {name: 'Page D', YouOwe: 2780, pv: 3908, amt: 2000},
           {name: 'Page E', YouOwe: 1890, pv: 4800, amt: 2181},
           {name: 'Page F', YouOwe: 2390, pv: 3800, amt: 2500},
           {name: 'Page G', YouOwe: 3490, pv: 4300, amt: 2100},
     ];
       // const data =
       // [{ name: 'a', value: [5, 12] }, {name: 'b', value:[3,25]}];
       return (
            <BarChart width={600} height={300} data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="name"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Bar dataKey="YouOwe" fill="#ff9999" />
           <Bar dataKey="pv"fill="#ff4d4d" />
           </BarChart>
       );
   }
}

export default OweChart

