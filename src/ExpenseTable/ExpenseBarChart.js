import React, {Component} from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import axios from 'axios'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
  
class ExpenseBarChart extends Component {
   constructor() {
       super();
       this.state = {expenses: [], total: 0};
   }

   render() {
       var data = [
           {name: 'Groceries', CurrentSpend: 20.65, TargetSpend: 25, amt: 2400},
           {name: 'Takeout', CurrentSpend: 45.1, TargetSpend: 10, amt: 2210},
           {name: 'Clothing', CurrentSpend: 132.45, TargetSpend: 50, amt: 2290},
           {name: 'Shoes', CurrentSpend: 226.01,TargetSpendpv: 100, amt: 2000},
           {name: 'Bubble Tea', CurrentSpend: 15.33, TargetSpend: 0, amt: 2181},
           {name: 'Utilities', CurrentSpend: 95.67, TargetSpend: 80, amt: 2181},
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
           <Bar dataKey="CurrentSpend" fill=" #ff9999" />
           <Bar dataKey="TargetSpend"fill=" #ff4d4d" />
           </BarChart>
       );
   }
}

export default ExpenseBarChart

