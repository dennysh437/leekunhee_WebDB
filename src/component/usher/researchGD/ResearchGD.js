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
  variant2,
  img1,
  img2,
  sheet,
  img2large=false
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
    variant2,
    img1,
    img2,
    sheet,
    img2large,
  };
}

const rows = [
  createData(
    "USHER02",
    "김ㅇ원",
    "M",
    7,
    "2022",
    "SH485",
    "경기",
    "USH2A c.10712C>T:p.Thr3571Met",
    "USH2A c.7120+1475A>G:p.?",
    "/genome/SH485_Img1.png",
    "/genome/SH485_Img2.png",
    "/genome/SH485_Sheet.xlsx"
  ),

  createData(
    "USHER01",
    "양ㅇ수",
    "F",
    14,
    "2022",
    "SH525",
    "제주",
    "USH2A c.12708T>A:p.Cys4236Ter",
    "USH2A c.12708T>A:p.Cys4236Ter"
  ),

  createData(
    "USHER03",
    "박ㅇ준A",
    "M",
    0,
    "2022",
    "SH608",
    "서울",
    "USH2A c.2082T>G:p.Cys934Trp",
    "USH2A c.4858C>T:p.Gln1620Ter"
  ),

  createData(
    "USHER04",
    "정ㅇ철",
    "M",
    47,
    "2022",
    "SH608",
    "대전",
    "USH2A c.13112_13115del:p.Gln4371ArgfsTer19",
    "USH2A c.2082T>G:p.Cys934Trp"
  ),

  createData(
    "USHER05",
    "박ㅇ희",
    "F",
    42,
    "2022",
    "SH664",
    "경기",
    "USH2A c.11156G>A:p.Arg3719His",
    "USH2A c.14489C>A:p.Ser1830Ter"
  ),

  createData(
    "USHER06",
    "박ㅇ준B",
    "M",
    5,
    "2022",
    "SH478",
    "충북",
    "USH2A c.8559-2A>G:p.?",
    "USH2A c.11156G>A:p.Arg3719His"
  ),

  createData(
    "USHER07",
    "송ㅇ인",
    "F",
    13,
    "2022",
    "SH677",
    "충북",
    "USH2A c.8559-2A>G:p.?",
    "USH2A c.10593del:p.Ile3532PhefsTer18"
  ),

  createData(
    "USHER08",
    "박ㅇ현",
    "F",
    6,
    "2022",
    "SH657",
    "경남",
    "Inconclusive",
    "Inconclusive"
  ),

  createData(
    "USHER09",
    "방ㅇ우",
    "M",
    0,
    "2022",
    "SH503",
    "광주",
    "USH2A c.14835del:p.Val4946TrpfsTer4",
    "USH2A c.14134-3169A>G:p.?"
  ),

  createData(
    "USHER10",
    "전ㅇ욱",
    "M",
    0,
    "2022",
    "SH591",
    "광주",
    "STRC c.4816dup:p.Leu1606ProfsTer25",
    "STRC deletion"
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

    {/* Image 1 */}
    {row.img1 && (
      <div className={styles.imageContainer}>
        <img
          src={row.img1}
          alt="Genome Image 1"
          className={styles.mainImage}
        />
      </div>
    )}

    {/* Variant 2 */}
    <div className={styles.variantSection}>
      <div className={styles.variantTitle}>Variant 2</div>
      <div className={styles.variantContent}>
        {row.variant2}
      </div>
    </div>

    {/* Image 2 */}
    {row.img2 && (
      <div className={styles.imageContainer}>
        <img
         src={row.img2}
         alt="Genome Image 2"
         className={
          row.img2large
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