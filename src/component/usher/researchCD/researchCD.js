import styles from "./researchCD.module.css"
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

import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});


const columns = [
  
  { id: 'code', label: 'Patient\u00a0Code', minWidth: 100, align: 'center'},
  { id: 'name', label: 'Name', minWidth: 100,align: 'center' },
  { id: 'sex', label: 'Sex', minWidth: 20,align: 'center' },
  { id: 'age', label: 'Age', minWidth: 20,align: 'center' },
  { id: 'birth', label: 'Birth', minWidth: 80,align: 'center' },
  { id: 'family', label: 'Family Number', minWidth: 100,align: 'center' },
  { id: 'address', label: 'Address', minWidth: 80,align: 'center' },
  { id: 'phone', label: 'Phone', minWidth: 130,align: 'center' },

];

function createData(code, name, sex, age, birth, family, address, phone, history,history2) {
  return { code, name, sex, age, birth, family, address, phone, history,history2 };
}

const rows = [
  createData('BORBO01', '류ㅇ영', 'M', 16, '071209', 'SH954', '서울', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
    { date: 'SIX1 c.513G>A:p.Trp171Cys', customerId: '-', amount: ' ' },
    { date: ' ', customerId: ' ', amount: ' ' },
    { date: 'Enroll Family', customerId: ' ', amount: ' ' },
    { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
    { date: 'Mother', customerId: 'Affected', amount: ' ' },]),

  createData('BORBO02', '서ㅇ도', 'M', 1, '220927', 'SH986', '경기', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SIX1 c.376_378del:p.Glu126del', customerId: '-', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },]),
    ];



function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell >
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center">{row.code}</TableCell>
        <TableCell align="center">{row.name}</TableCell>
        <TableCell align="center">{row.sex}</TableCell>
        <TableCell align="center">{row.age}</TableCell>
        <TableCell align="center">{row.birth}</TableCell>
        <TableCell align="center">{row.family}</TableCell>
        <TableCell align="center">{row.address}</TableCell>
        <TableCell align="center">{row.phone}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                <div className={styles.header_title2}>
                  Patient data
                </div>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="center">{historyRow.amount}</TableCell>
                      <TableCell align="center">{historyRow.test}</TableCell>

                    </TableRow>
                  ))}
                </TableBody>
         
                
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});


export default function CollapsibleTable() {
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
    <div className={styles.header_title}>
      Patient List
    </div>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
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
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <Row key={row.name} row={row} />
          ))}
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