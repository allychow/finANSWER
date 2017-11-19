    import React, {Component} from 'react'
    import { Icon, Label, Menu, Table } from 'semantic-ui-react'
    import axios from 'axios'
    import { PieChart, Pie, Sector, Cell, Legend, Tooltip} from 'recharts'
    
    class ExpensePieChart extends Component {
    constructor() {
        super();
        this.state = {expenses: [], total: 0};
    }

    render() {
        var data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
        {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
        var COLORS = ['#e67300', '#ff8000', '#ffa64d', '#ffce99'];

        var RADIAN = Math.PI / 180;                    
        var renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        var radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        var x  = cx + radius * Math.cos(-midAngle * RADIAN);
        var y = cy  + radius * Math.sin(-midAngle * RADIAN);
        
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
          );
        }
        // [{ name: 'a', value: [5, 12] }, {name: 'b', value:[3,25]}];
        return (
                <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data} 
                  cx={300} 
                  cy={200} 
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80} 
                  fill="#8884d8"
                  
                >
                
                    {
                      data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                  }
                </Pie>
                <Tooltip/>
              </PieChart>
        );
    }
    }

    export default ExpensePieChart

