import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TrTd() {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Dessert (100g serving)</th>
            <th align="right">Calories</th>
            <th align="right">Fat&nbsp;(g)</th>
            <th align="right">Carbs&nbsp;(g)</th>
            <th align="right">Protein&nbsp;(g)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <td component="th" scope="row">
                {row.name}
              </td>
              <td align="right">{row.calories}</td>
              <td align="right">{row.fat}</td>
              <td align="right">{row.carbs}</td>
              <td align="right">{row.protein}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
