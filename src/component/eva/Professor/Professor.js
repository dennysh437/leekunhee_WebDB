import styles from "./Professor.module.css"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


const columns = [
  { id: 'code', label: 'Patient\u00a0Code', minWidth: 100, align: 'center'},
  { id: 'name', label: 'Name', minWidth: 130,align: 'center' },
  { id: 'sex', label: 'Sex', minWidth: 20,align: 'center' },
  { id: 'age', label: 'Age', minWidth: 20,align: 'center' },
  { id: 'birth', label: 'Birth', minWidth: 130,align: 'center' },
  { id: 'hospital', label: 'Hospital', minWidth: 130,align: 'center' },
  { id: 'address', label: 'Address', minWidth: 130,align: 'center' },
  { id: 'phone', label: 'Phone', minWidth: 130,align: 'center' },
];

function createData(code, name, sex, age, birth, hospital, address, phone) {
  return {code, name, sex, age, birth, hospital, address, phone };
}

const rows = [
  createData(80516842, '이우찬', 'M', 4, '200213', 'SNUH', '경남', '010-0000-0000'),
  createData(75680602, '김태영', 'F', 18, '060321', 'SNUH', '경기', '010-0000-0000'),
  createData(75308777, '김근우', 'M', 15, '090402', 'SNUH', '서울', '010-0000-0000'),
  createData(75308777, '김근우1', 'M', 15, '090402', 'SNUH', '서울', '010-0000-0000'),
  createData(75308777, '김근우2', 'M', 15, '090402', 'SNUH', '서울', '010-0000-0000'),
  createData(75308777, '김근우3', 'M', 15, '090402', 'SNUH', '서울', '010-0000-0000'),
  createData(75308777, '김근우4', 'M', 15, '090402', 'SNUH', '서울', '010-0000-0000'),
  createData(75308777, '김근우5', 'M', 15, '090402', 'SNUH', '서울', '010-0000-0000'),
  createData(75308777, '김근우6', 'M', 15, '090402', 'SNUH', '서울', '010-0000-0000'),
  createData(75308777, '김근우7', 'M', 15, '090402', 'SNUH', '서울', '010-0000-0000'),
  createData(75308777, '김근우8', 'M', 15, '090402', 'SNUH', '서울', '010-0000-0000'),
  createData(75308777, '김근우9', 'M', 15, '090402', 'SNUH', '서울', '010-0000-0000'),
  createData(75308777, '김근우10', 'M', 15, '090402', 'SNUH', '서울', '010-0000-0000'),
  createData(75308777, '김근우11', 'M', 15, '090402', 'SNUH', '서울', '010-0000-0000'),
  createData(75308777, '김근우12', 'M', 15, '090402', 'SNUH', '서울', '010-0000-0000'),
  createData(80255147, '양은조', 'F', 3, '201015', 'SNUH', '세종', '010-0000-0000'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}