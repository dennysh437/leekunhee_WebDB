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
  { id: 'year', label: 'Enroll Year', minWidth: 80,align: 'center' },
  { id: 'family', label: 'Family Number', minWidth: 100,align: 'center' },
  { id: 'address', label: 'Address', minWidth: 80,align: 'center' },

];

function createData(code, name, sex, age, year, family, address, history) {
  return { code, name, sex, age, year, family, address, history};
}

const rows = [
  createData('BORBO01', '최ㅇ서', 'F', 15, '2022', 'SH527', '경기',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'EYA1 c.1319G>A:p.Arg440Gln', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Image>', customerId: ' ', amount: ' '},
      {date:<img src='Audio/SH527.jpg' width='395px'/>, customerId: <img src='Audio/SH527.jpg' width='395px'/>, amount:''}]),  
  createData('BORBO02', '김ㅇ림', 'F', 22, '2022', 'SH536', '서울',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'EYA1 inversion c reciprocal deletion', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Affected', amount: ' ' },
      { date: 'Brother', customerId: 'Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Affected', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Image>', customerId: ' ', amount: ' '},
      {date:<img src='Audio/SH536.jpg' width='395px'/>, customerId: <img src='Audio/SH536.jpg' width='395px'/>, amount:''}]),
  createData('BORBO03', '박ㅇ우', 'M', 14, '2022', 'SH435', '충남',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'Inconclusive', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Affected', amount: ' ' },
      { date: 'Brother', customerId: 'Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Affected', amount: ' ' },]),
  createData('BORBO04', '진ㅇ호', 'M', 31, '2022', 'SH587', '서울',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'EYA1 c.1623_1623dup:p.Gln543AsnfsTer90', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Brother', customerId: 'Non-Affected', amount: ' ' },]),  
  createData('BORBO05', '주ㅇ진', 'M', 8, '2022', 'SH468', '서울',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'EYA1 c.1081C>T:p.Arg361Ter', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),  
  createData('BORBO06', '허ㅇ롱', 'F', 31, '2022', 'SH529', '대구',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'SIX1 c.501G>C:p.Gln167His', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Mother', customerId: 'Affected', amount: ' ' },
      { date: 'Sister', customerId: 'Affected', amount: ' ' },]),
  createData('BORBO07', '염ㅇ율', 'F', 10, '2022', 'SH693', '경기',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'SIX1 c.386_391del:p.Tyr129_Cys130del', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Mother', customerId: 'Affected', amount: ' ' },]),
  createData('BORBO08', '윤ㅇ라', 'F', 11, '2022', 'SH613', '인천',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'SIX1 c.397_389del:p.Glu133del', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: '-', customerId: '', amount: ' ' },]),      
  createData('BORBO09', '박ㅇ원', 'F', 0, '2023', 'SH716', '서울',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'SIX1 c.1598-2A>C:p.?', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Mother', customerId: 'Affected', amount: ' ' },]),      
  createData('BORBO10', '고ㅇ정', 'F', 51, '2023', 'SH719', '서울',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'Inconclusive', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('BORBO11', '신ㅇ', 'F', 0, '2023', 'SH729', '서울',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'Inconclusive', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('BORBO12', '김ㅇ윤', 'F', 4, '2023', 'SH734', '부산',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'EYA1 cryptic large inversion', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Affected', amount: ' ' },]),
  createData('BORBO13', '주ㅇ율', 'F', 8, '2023', 'SH751', '전남',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'EYA1 c.1081C>T:p.Arg361Ter', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Brother', customerId: 'Affected', amount: ' ' },]),
  createData('BORBO14', '성ㅇ윤', 'F', 1, '2023', 'SH803', '경기',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'ANKRD11 c.2409_2412del:p.Glu805ArgfsTer57', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('BORBO15', '박ㅇ한', 'M', 17, '2023', 'SH114', '전북',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'EYA1 c.1220G>A:p.Arg407Gln', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('BORBO16', '강ㅇ균', 'M', 6, '2023', 'SH752', '인천',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'EYA1 c.1276G>A:p.Gly426Ser', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Brother', customerId: 'Affected', amount: ' ' },]),
  createData('BORBO17', '이ㅇ영', 'F', 12, '2023', 'SH215', '울산',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'EYA1 Deletion', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('BORBO18', '양ㅇ수', 'F', 7, '2023', 'SH843', '제주',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'EYA1 c.1715G>A:p.Trp572Ter', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Sister', customerId: 'Affected', amount: ' ' },]),
  createData('BORBO19', '한ㅇ헌', 'M', 2, '2023', 'SB940', '전남',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'SIX1 c.373G>A:p.Glu125Lys', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Affected', amount: ' ' },]),
  createData('BORBO20', '박ㅇ균', 'M', 66, '2023', 'SB468', '전남',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'SIX1 c.307dup:p.Leu103ProfsTer51', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('BORBO21', '심ㅇ석', 'M', 31, '2024', 'SH969', '경기',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'EYA1 c.802C>T:p.Gln268Ter', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Mother', customerId: 'Affected', amount: ' ' },
      { date: 'Uncle', customerId: 'Affected', amount: ' ' },
      { date: 'Cousin', customerId: 'Affected', amount: ' ' },
      { date: 'Aunt', customerId: 'Affected', amount: ' ' },
      { date: 'Cousin', customerId: 'Affected', amount: ' ' },]),
  createData('BORBO22', '류ㅇ영', 'M', 16, '2024', 'SH954', '서울',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'SIX1 c.513G>T:p.Trp171Cys', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Affected', amount: ' ' },]),
  createData('BORBO23', '서ㅇ도', 'M', 1, '2024', 'SH986', '경기',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'SIX1 c.376_378del:p.Glu126del', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },]),
  createData('BORBO24', '박ㅇ윤', 'F', 14, '2024', 'SH1073', '경남',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'SIX1 c.329G>T:p.Arg110Leu', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('BORBO25', '김ㅇ하C', 'M', 0, '2024', 'SH1087', '서울',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'PTPN11 c.1510A>G:p.Met504Val', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },]),
  createData('BORBO26', '박ㅇ림', 'M', 0, '2024', 'SH1089', '충북',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: '22q11.2 Deletion', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },]),
  createData('BORBO27', '팡ㅇ진', 'M', 12, '2024', 'SH1128', '전남',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'In Analysis', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },]),
  createData('BORBO28', '박ㅇ율', 'M', 13, '2024', 'SH1131', '인천',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'In Analysis', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
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