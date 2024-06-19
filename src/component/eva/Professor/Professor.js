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
  { id: 'year', label: 'Enroll Year', minWidth: 80,align: 'center' },
  { id: 'family', label: 'Family Number', minWidth: 100,align: 'center' },
  { id: 'address', label: 'Address', minWidth: 80,align: 'center' },
  { id: 'phone', label: 'Phone', minWidth: 130,align: 'center' },

];

function createData(code, name, sex, age, year, family, address, phone, history,history2) {
  return { code, name, sex, age, year, family, address, phone, history,history2 };
}

const rows = [
  createData('EVA01', '오ㅇ준', 'M', 17, '2022', 'SH596', '경기', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
    { date: 'SLC26A4 c.2168A>G:p.His723Arg', customerId: 'SLC26A4 c.2168A>G:p.His723Arg', amount: ' ' },
    { date: ' ', customerId: ' ', amount: ' ' },
    { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA02', '김ㅇ영', 'M', 7, '2022', 'SH643', '서울', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.2168A>G:p.His723Arg', customerId: 'SLC26A4 c.2168A>G:p.His723Arg', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA03', '엄ㅇ민', 'M', 2, '2022', 'SH366', '울산', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.2168A>G:p.His723Arg', customerId: 'SLC26A4 c.2168A>G:p.His723Arg', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA04', '강ㅇ우', 'M', 6, '2022', 'SH378', '경기', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.2168A>G:p.His723Arg', customerId: 'SLC26A4 c.2168A>G:p.His723Arg', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),        
  createData('EVA05', '김ㅇ린', 'F', 13, '2022', 'SH418', '서울', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.2168A>G:p.His723Arg', customerId: 'SLC26A4 c.2168A>G:p.His723Arg', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),    
  createData('EVA06', '문ㅇ윤', 'F', 21, '2022', 'SH978', '경북', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.2168A>G:p.His723Arg', customerId: 'SLC26A4 c.919-2A>G:p.?', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA07', '조ㅇ하', 'M', 4, '2022', 'SH442', '대전', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.919-2A>G:p.?', customerId: 'SLC26A4 deletion', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },]),
  createData('EVA08', '문ㅇ군', 'M', 0, '2022', 'SH464', '전북', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.1229C>T:p.Thr410Met', customerId: 'SLC26A4 c.2072T>A:p.Leu676Gln', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA09', '박ㅇ늘', 'M', 0, '2022', 'SH484', '서울', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.2168A>G:p.His723Arg', customerId: 'SLC26A4 c.2168A>G:p.His723Arg', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA10', '추ㅇ호', 'F', 22, '2022', 'SH484', '서울', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.2168A>G:p.His723Arg', customerId: 'SLC26A4 c.2168A>G:p.His723Arg', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA11', '김ㅇ래', 'F', 36, '2022', 'SH496', '서울', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.2168A>G:p.His723Arg', customerId: 'SLC26A4 c.2168A>G:p.His723Arg', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA12', '이ㅇ안', 'F', 2, '2022', 'SH563', '경기', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.1229C>T:p.Thr410Met', customerId: 'SLC26A4 c.919-2A>G:p.?', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA13', '이ㅇ원', 'F', 1, '2022', 'SH584', '대구', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.2168A>G:p.His723Arg', customerId: 'SLC26A4 c.919-2A>G:p.?', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),    
  createData('EVA14', '김ㅇ현A', 'F', 7, '2023', 'SH708', '경기', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.2168A>G:p.His723Arg', customerId: 'SLC26A4 c.916dupG:p.Val306GlyfsTer24', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),   
  createData('EVA15', '염ㅇ동', 'M', 7, '2023', 'SH760', '경기', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.2168A>G:p.His723Arg', customerId: 'SLC26A4 c.919-2A>G:p.?', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA16', '이ㅇ은', 'F', 7, '2023', 'SH784', '부산', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.2168A>G:p.His723Arg', customerId: 'SLC26A4 c.2168A>G:p.His723Arg', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA17', '동ㅇ란', 'F', 7, '2023', 'SH301', '서울', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.2168A>G:p.His723Arg', customerId: 'SLC26A4 c.2168A>G:p.His723Arg', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: 'Son', customerId: 'Affected', amount: ' ' },
      { date: 'Husband', customerId: 'Non-Affected', amount: ' ' },]),
  createData('EVA18', '박ㅇ빈', 'M', 7, '2023', 'SH792', '서울', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.2168A>G:p.His723Arg', customerId: 'SLC26A4 c.919-2A>G:p.?', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: 'Sister', customerId: 'Non-Affected', amount: ' ' },]),
  createData('EVA19', '왕ㅇ희', 'F', 7, '2023', 'SH735', '인천', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.1149+3A>G:p.?', customerId: 'SLC26A4 c.1229C>T:p.Thr410Met', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA20', '한ㅇ율', 'M', 7, '2023', 'SH239', '경기', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.2168A>G:p.His723Arg', customerId: 'SLC26A4 c.1803G>A:p.Lys601=', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA21', '이ㅇ우B', 'M', 7, '2023', 'SH756', '서울', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.2168A>G:p.His723Arg', customerId: 'SLC26A4 c.919-2A>G:p.?', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA22', '김ㅇ아3', 'F', 7, '2023', 'SH856', '충남', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.2168A>G:p.His723Arg', customerId: 'SLC26A4 c.919-2A>G:p.?', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA23', '최ㅇ재', 'M', 7, '2023', 'SH860', '경기', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.2168A>G:p.His723Arg', customerId: 'SLC26A4 c.919-2A>G:p.?', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA24', '안ㅇ연', 'M', 7, '2023', 'SH846', '전남', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.2168A>G:p.His723Arg', customerId: 'SLC26A4 c.2162C>T:p.Thr721Met', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA25', '이ㅇ찬', 'M', 7, '2023', 'SH846', '경남', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.1229C>T:p.Thr410Met', customerId: 'SLC26A4 c.412G>C:p.Val138Leu', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA26', '김ㅇ영', 'F', 7, '2023', 'SH846', '경기', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 ', customerId: 'SLC26A4 ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA27', '김ㅇ우', 'M', 7, '2023', 'SH846', '서울', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.425C>G:p.Pro142Arg', customerId: 'SLC26A4 c.11493A>G:p.?', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA28', '양ㅇ조', 'F', 7, '2023', 'SH846', '세종', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.919-2A>G:p?', customerId: 'SLC26A4 c.2162C>T:p.Thr721Met', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA29', '김ㅇ인', 'M', 7, '2023', 'SH846', '인천', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 c.919-2A>G:p?', customerId: 'SLC26A4 c.2168A>G:p.His723Arg', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA30', '김ㅇ현', 'F', 7, '2023', 'SH846', '경기', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 ', customerId: 'SLC26A4 ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('EVA31', '김ㅇ후', 'M', 7, '2023', 'SH846', '경기', '010-****-0000',
    [{ date: 'variant1', customerId: 'variant2', amount: ' ' },
      { date: 'SLC26A4 ', customerId: 'SLC26A4 ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: 'Enroll Family', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),

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
        <TableCell align="center">{row.year}</TableCell>
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