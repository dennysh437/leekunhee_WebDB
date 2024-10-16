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
  createData('USHER01', '양ㅇ수', 'F', 14, '2022', 'SH525', '제주',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
    { date: 'USH2A c.12708T>A:p.Cys4236Ter', customerId: 'USH2A c.12708T>A:p.Cys4236Ter', amount: ' ' },
    { date: ' ', customerId: ' ', amount: ' ' },
    { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
    { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
    { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },
    { date: ' ', customerId: ' ', amount: ' ' },
    { date: '<Image>', customerId: ' ', amount: ' '},
    { date:<img src='Audio/SH525.jpg' width='395px'/>, customerId: <img src='Audio/SH525.jpg' width='395px'/>, amount:''}]),
  createData('USHER02', '김ㅇ원', 'M', 7, '2022', 'SH485', '경기',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'USH2A c.10712C>T:p.Thr3571Met', customerId: 'USH2A c.7120+1475A>G:p.?', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Sister', customerId: 'Affected', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Image>', customerId: ' ', amount: ' '},
      { date:<img src='Audio/SH485.png' width='395px'/>, customerId: <img src='Audio/SH485.png' width='395px'/>, amount:''}]),  
  createData('USHER04', '박ㅇ준A', 'M', 0, '2022', 'SH608', '서울',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'USH2A c.2082T>G:p.Cys934Trp', customerId: 'USH2A c.4858C>T:p.Gln1620Ter', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' }]), 
  createData('USHER03', '정ㅇ철', 'M', 47, '2022', 'SH608', '대전',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'USH2A c.13112_13115del:p.Gln4371ArgfsTer19', customerId: 'USH2A c.2082T>G:p.Cys934Trp', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Wife', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Daughter', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Son', customerId: 'Non-Affected', amount: ' ' }]), 
  createData('USHER05', '박ㅇ희', 'F', 42, '2022', 'SH664', '경기',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'USH2A c.11156G>A:p.Arg3719His', customerId: 'USH2A c.14489C>A:p.Ser1830Ter', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Sister', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Sister', customerId: 'Affected', amount: ' ' },
      { date: 'Brother', customerId: 'Affected', amount: ' ' }]), 
  createData('USHER06', '박ㅇ준B', 'M', 5, '2022', 'SH478', '충북',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'USH2A c.8559-2A>G:p.?', customerId: 'USH2A c.11156G>A:p.Arg3719His', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Brother', customerId: 'Non-Affected', amount: ' ' }]),
  createData('USHER07', '송ㅇ인', 'F', 13, '2022', 'SH677', '충북',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'USH2A c.8559-2A>G:p.?', customerId: 'USH2A c.10593del:p.Ile3532PhefsTer18', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Brother', customerId: 'Non-Affected', amount: ' ' }]),
  createData('USHER08', '박ㅇ현', 'F', 6, '2022', 'SH657', '경남',
    [{ date: '<Variant1>', customerId: '', amount: ' ' },
      { date: 'Inconclusive', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Brother', customerId: 'Non-Affected', amount: ' ' }]),
  createData('USHER09', '방ㅇ우', 'M', 0, '2022', 'SH503', '광주',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'USH2A c.14835del:p.Val4946TrpfsTer4', customerId: 'USH2A c.14134-3169A>G:p.?', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' }]),
  createData('USHER10', '전ㅇ욱', 'M', 0, '2022', 'SH591', '광주',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'STRC c.4816dup:p.Leu1606ProfsTer25', customerId: 'STRC deletion', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: '-', customerId: '', amount: ' ' }]),
  createData('USHER11', '이ㅇ철', 'M', 39, '2023', 'SH707', '대구',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'USH2A c.2802T>G:p.Cys934Trp', customerId: 'USH2A c.4732C>T:p.Arg1578Cys', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' }]),
  createData('USHER12', '김ㅇ경', 'F', 64, '2023', 'SH737', '서울',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'USH2A c.11156G>A:p.Arg3719His', customerId: 'USH2A c.10724G>T:p.Cys3575Phe', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: '-', customerId: '', amount: ' ' },]),
  createData('USHER13', '유ㅇ린', 'F', 15, '2023', 'SH749', '경기',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'CDH23 c.6050-9G>A:p.?', customerId: 'CDH23 c.6050-9G>A:p.?', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' }]),
  createData('USHER14', '김ㅇ정', 'F', 59, '2023', 'SH479', '서울',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'USH2A c.14836_14837delGTinsTG', customerId: 'USH2A c.13964T>C:p.Leu4655Pro', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: '-', customerId: '', amount: ' ' },]),
  createData('USHER15', '이ㅇ호', 'M', 3, '2023', 'SH790', '서울',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'USH2A c.11156G>A:p.Arg3719His', customerId: 'USH2A c.8559-2A>G:p.?', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },]),
  createData('USHER16', '양ㅇ정', 'F', 0, '2023', 'SH779', '서울',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'Inconclusive', customerId: ' ', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: '-', customerId: '', amount: ' ' },]),
  createData('USHER17', '서ㅇ결', 'M', 4, '2023', 'SH790', '경기',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'USH2A c.8559-2A>G:p.?', customerId: 'USH2A c.8096G>C:p.Arg2699Pro', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Sister', customerId: 'Affected', amount: ' ' },]),
  createData('USHER18', '육ㅇ준', 'M', 3, '2023', 'SH807', '경기',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'USH2A c.8559-2A>G:p.?', customerId: 'USH2A c.11389+3A>T:p.?', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Sister', customerId: 'Non-Affected', amount: ' ' },]),
  createData('USHER19', '구ㅇ모', 'M', 20, '2023', 'SH509', '경기',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'CDH23 c.871G>A:p.Gly291Arg', customerId: 'CDH23 c.287A>T:p.Glu96Val', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Brother', customerId: 'Affected', amount: ' ' },]),
  createData('USHER20', '김ㅇ안', 'F', 4, '2024', 'SH773', '제주',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'USH2A c.12708T>A:p.Cys4236Ter', customerId: 'CDH23 c.12708T>A:p.Cys4236Ter', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Brother', customerId: 'Non-Affected', amount: ' ' },]),
  createData('USHER21', '박ㅇ진', 'M', 7, '2024', 'SH924', '경기',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'MYO7A c.3054_3056del:p.Arg1020del', customerId: 'MYO7Ac.4568+1G>A:p.?', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },]),
  createData('USHER22', '김ㅇ신', 'F', 53, '2024', 'SH822', '서울',
    [{ date: '<Variant1>', customerId: ' ', amount: ' ' },
      { date: 'Inconclusive', customerId: '', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('USHER23', '김ㅇ윤', 'F', 0, '2024', 'SH857', '부산',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'USH1G c.164+5G>A:p.?', customerId: 'USH1G c.164+5G>A:p.?', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },]),
  createData('USHER24', '오ㅇ아', 'F', 1, '2024', 'SH964', '경기',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'GPR98 c.3245C>T:p.Pro1082Leu', customerId: 'GPR98 c.7406G>A:p.Trp2469Ter', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },]),
  createData('USHER25', '심ㅇ우', 'F', 3, '2024', 'SH689', '서울',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'GPR98 c.7406G>A:p.Trp2469Ter', customerId: 'GPR98 c.7406G>A:p.Trp2469Ter', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },]),
  createData('USHER26', '이ㅇ주', 'F', 35, '2024', 'SH1025', '서울',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'MYO7A c.52C>T:p.Gln18Ter', customerId: 'MYO7A c.6487G>A:p.Gln2163Ser', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: '-', customerId: ' ', amount: ' ' },]),
  createData('USHER27', '김ㅇ원', 'F', 0, '2024', 'SH1007', '서울',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'MYO7A c.1304T>C:p.Leu435Pro', customerId: 'MYO7A c.5824G>A:p.Gly1942Arg', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },]),
  createData('USHER28', '강ㅇ림', 'F', 53, '2024', 'SH1021', '서울',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'CEP250 c.527G>A:p.Arg176His', customerId: 'CEP250 c.527G>A:p.Arg176His', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },]),
  createData('USHER29', '박ㅇ린', 'F', 0, '2024', 'SH1069', '서울',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'USH2A c.13112_13115del:p.Gln4371ArgfsTer19', customerId: 'USH2A c.1808_1810del:p.Gly603del', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },]),
  createData('USHER30', '노ㅇ민', 'M', 0, '2024', 'SH1129', '인천',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'USH2A c.8559-2A>G:p.?', customerId: 'USH2A c.13208del:p.Gly4403AlafsTer20', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },]),
  createData('USHER31', '김ㅇ은', 'F', 0, '2024', 'SH1130', '경기',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'CDH23 c.3820G>A:p.Glu1274Lys', customerId: 'CDH23 c.6604G>A:p.Asp2202Asn', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: 'Father', customerId: 'Non-Affected', amount: ' ' },
      { date: 'Mother', customerId: 'Non-Affected', amount: ' ' },]),
  createData('USHER32', '도ㅇ요', 'F', 0, '2024', 'SH1137', '-',
    [{ date: '<Variant1>', customerId: '<Variant2>', amount: ' ' },
      { date: 'USH2A c.8559-2A>G:p.?', customerId: 'USH2A c.13112_13115del:p.Gln4371ArgfsTer19', amount: ' ' },
      { date: ' ', customerId: ' ', amount: ' ' },
      { date: '<Enroll Family>', customerId: ' ', amount: ' ' },
      { date: '-', customerId: '', amount: ' ' },]),
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