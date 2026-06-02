import styles from "./researchGD.module.css";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

const columns = [
  { id: "code", label: "Patient Code", minWidth: 100, align: "center" },
  { id: "name", label: "Name", minWidth: 100, align: "center" },
  { id: "sex", label: "Sex", minWidth: 30, align: "center" },
  { id: "age", label: "Age", minWidth: 30, align: "center" },
  { id: "year", label: "Enroll Year", minWidth: 80, align: "center" },
  { id: "family", label: "Family Number", minWidth: 100, align: "center" },
  { id: "address", label: "Address", minWidth: 80, align: "center" },
];

function createData(
  code,
  name,
  sex,
  age,
  year,
  family,
  address,
  variant1,
  img1,
  sheet,
  img1large=false
) {
  return {
    code,
    name,
    sex,
    age,
    year,
    family,
    address,
    variant1,
    img1,
    sheet,
    img1large,
  };
}

const rows = [
  createData(
    "BORBO07",
    "염ㅇ율",
    "F",
    10,
    "2022",
    "SH693",
    "경기",
    "SIX1 c.386_391del:p.Tyr129_Cys130del",
    "/genome/SH693_Img1.png",
    "/genome/SH693_Sheet.xlsx"
  ),

  createData(
    "BORBO01",
    "최ㅇ서",
    "F",
    15,
    "2022",
    "SH527",
    "경기",
    "EYA1 c.1319G>A:p.Arg440Gln",
  ),
  
  createData(
    "BORBO02",
    "최ㅇ서",
    "F",
    22,
    "2022",
    "SH536",
    "서울",
    "EYA1 inversion c reciprocal deletion",
  ),

  createData(
    "BORBO03",
    "박ㅇ우",
    "M",
    14,
    "2022",
    "SH435",
    "충남",
    "Inconclusive",
  ),

  createData(
    "BORBO04",
    "진ㅇ호",
    "M",
    31,
    "2022",
    "SH587",
    "서울",
    "EYA1 c.1623_1623dup:p.Gln543AsnfsTer90",
  ),

  createData(
    "BORBO05",
    "주ㅇ진",
    "M",
    8,
    "2022",
    "SH468",
    "서울",
    "EYA1 c.1081C>T:p.Arg361Ter",
  ),

  createData(
    "BORBO06",
    "허ㅇ롱	",
    "F",
    31,
    "2022",
    "SH529",
    "대구",
    "SIX1 c.501G>C:p.Gln167His",
  ),

  createData(
    "BORBO08",
    "윤ㅇ라",
    "F",
    11,
    "2022",
    "SH613",
    "인천",
    "SIX1 c.397_389del:p.Glu133del",
  ),

  createData(
    "BORBO09",
    "박ㅇ원",
    "F",
    0,
    "2022",
    "SH716",
    "서울",
    "SIX1 c.1598-2A>C:p.?",
  ),

  createData(
    "BORBO10",
    "고ㅇ정",
    "F",
    51,
    "2022",
    "SH719",
    "서울",
    "Inconclusive",
  )

];

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>

        <TableCell align="center">{row.code}</TableCell>
        <TableCell align="center">{row.name}</TableCell>
        <TableCell align="center">{row.sex}</TableCell>
        <TableCell align="center">{row.age}</TableCell>
        <TableCell align="center">{row.year}</TableCell>
        <TableCell align="center">{row.family}</TableCell>
        <TableCell align="center">{row.address}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={10}
        >
<Collapse in={open} timeout="auto" unmountOnExit>
  <Box margin={2}>
    <Typography variant="h6" gutterBottom>
      Genome Data
    </Typography>

    {/* Variant 1 */}
    <div className={styles.variantSection}>
      <div className={styles.variantTitle}>Variant 1</div>
      <div className={styles.variantContent}>
        {row.variant1}
      </div>
    </div>

    {row.img1 && (
      <div className={styles.imageContainer}>
        <img
         src={row.img1}
         alt="Genome Image 1"
         className={
          row.img1large
            ? styles.subImage
            : styles.mainImage
         }
        />
      </div>
    )}

    {/* Sheet Download */}
    {row.sheet && (
      <div className={styles.downloadBox}>
        <a
          href={row.sheet}
          download
          className={styles.downloadButton}
        >
          Download Genome Sheet
        </a>
      </div>
    )}
  </Box>
</Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function ResearchGD() {
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
        Genome Database
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <Row key={row.code} row={row} />
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