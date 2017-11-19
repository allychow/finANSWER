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
           {name: 'Allison', YouOwe: 10.55, TheyOwe: 8.66, amt: 2400},
           {name: 'Colleen', YouOwe: 6.44, TheyOwe: 2.44, amt: 2210},
           {name: 'Welson', YouOwe: 2.55, TheyOwe: 3.55, amt: 2290},
           {name: 'Ali', YouOwe: 5.77, TheyOwe: 4.55, amt: 2000},
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
           <Bar dataKey="TheyOwe"fill="#ff4d4d" />
           </BarChart>
       );
   }
}

export default OweChart

