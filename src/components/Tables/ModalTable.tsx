import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useStateContext } from '@/assets/contexts/contextProvider';


function createData(
    STT: number,
    Chỉ_số: string,
    Giá_trị: number,
    Đơn_vị: string,
    Trạng_thái: string,
  ) {
    return { STT, Chỉ_số, Giá_trị, Đơn_vị, Trạng_thái};
  }

  const rows = [
    createData(1, 'Chỉ số 1', 6.0, 'Đơn vị 1', 'ON'),
    createData(2, 'Chỉ số 2', 8.2, 'Đơn vị 2', 'OFF'),
    createData(3, 'Chỉ số 3', 5.5, 'Đơn vị 3', 'ON'),
    createData(4, 'Chỉ số 4', 7.1, 'Đơn vị 4', 'OFF'),
    createData(5, 'Chỉ số 5', 6.8, 'Đơn vị 5', 'ON'),
    createData(6, 'Chỉ số 6', 4.9, 'Đơn vị 6', 'ON'),
    createData(7, 'Chỉ số 7', 3.5, 'Đơn vị 7', 'OFF'),
    createData(8, 'Chỉ số 8', 7.4, 'Đơn vị 8', 'ON'),
    createData(9, 'Chỉ số 9', 9.1, 'Đơn vị 9', 'OFF'),
    createData(10, 'Chỉ số 10', 6.2, 'Đơn vị 10', 'ON'),
    createData(11, 'Chỉ số 11', 5.8, 'Đơn vị 11', 'OFF'),
    createData(12, 'Chỉ số 12', 7.6, 'Đơn vị 12', 'ON'),
    createData(13, 'Chỉ số 13', 4.7, 'Đơn vị 13', 'OFF'),
    createData(14, 'Chỉ số 14', 8.0, 'Đơn vị 14', 'ON'),
    createData(15, 'Chỉ số 15', 6.3, 'Đơn vị 15', 'OFF'),
];

const offStatus = (input: string) : string => {
    return input === 'OFF' ? 'red' : '';
}


  
const ModalTable = () => {

    return (
        <div className='w-full md:w-1/2'>
        <TableContainer style={{ height: '400px'}}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">STT</TableCell>
                <TableCell align="center">Chỉ số</TableCell>
                <TableCell align="center">Giá trị</TableCell>
                <TableCell align="center">Đơn vị</TableCell>
                <TableCell align="center">Trạng thái</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.STT}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row" style={{ color: offStatus(row.Trạng_thái) }}>
                    {row.STT}
                  </TableCell>
                  <TableCell align="center" style={{ color: offStatus(row.Trạng_thái) }}>{row.Chỉ_số}</TableCell>
                  <TableCell align="center" style={{ color: offStatus(row.Trạng_thái) }}>{row.Giá_trị}</TableCell>
                  <TableCell align="center" style={{ color: offStatus(row.Trạng_thái) }}>{row.Đơn_vị}</TableCell>
                  <TableCell align="center" style={{ color: offStatus(row.Trạng_thái) }}>{row.Trạng_thái}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
        
      );

}

export default ModalTable