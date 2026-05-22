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
  sheet
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
  };
}

const rows = [
  createData(
    "EVA07",
    "조ㅇ하",
    "M",
    4,
    "2022",
    "SH442",
    "대전",
    "SLC26A4 c.919-2A>G:p.?",
    "SLC26A4 deletion",
    "/genome/SH442_Img1.png",
    "/genome/SH442_Img2.png",
    "/genome/SH442_Sheet.xlsx"
  ),

  createData(
    "EVA01",
    "오ㅇ준",
    "M",
    17,
    "2022",
    "SH596",
    "경기",
    "SLC26A4 c.2168A>G:p.His723Arg",
    "SLC26A4 c.2168A>G:p.His723Arg"
  ),

  createData(
    "EVA02",
    "김ㅇ영",
    "M",
    7,
    "2022",
    "SH643",
    "서울",
    "SLC26A4 c.2168A>G:p.His723Arg",
    "SLC26A4 c.2168A>G:p.His723Arg"
  ),

  createData(
    "EVA03",
    "엄ㅇ민",
    "M",
    2,
    "2022",
    "SH366",
    "울산",
    "SLC26A4 c.2168A>G:p.His723Arg",
    "SLC26A4 c.2168A>G:p.His723Arg"
  ),

  createData(
    "EVA04",
    "강ㅇ우",
    "M",
    6,
    "2022",
    "SH378",
    "경기",
    "SLC26A4 c.2168A>G:p.His723Arg",
    "SLC26A4 c.2168A>G:p.His723Arg"
  ),

  createData(
    "EVA05",
    "김ㅇ린",
    "F",
    13,
    "2022",
    "SH418",
    "서울",
    "SLC26A4 c.2168A>G:p.His723Arg",
    "SLC26A4 c.2168A>G:p.His723Arg"
  ),

  createData(
    "EVA06",
    "문ㅇ윤",
    "F",
    21,
    "2022",
    "SH978",
    "경북",
    "SLC26A4 c.919-2A>G:p.?",
    "SLC26A4 c.2168A>G:p.His723Arg"
  ),

  createData(
    "EVA08",
    "문ㅇ군",
    "M",
    0,
    "2022",
    "SH464",
    "전북",
    "SLC26A4 c.1229C>T:p.Thr410Met",
    "SLC26A4 c.2072T>A:p.Leu676Gln"
  ),

  createData(
    "EVA09",
    "박ㅇ늘",
    "M",
    0,
    "2022",
    "SH484",
    "서울",
    "SLC26A4 c.2168A>G:p.His723Arg",
    "SLC26A4 c.2168A>G:p.His723Arg"
  ),

  createData(
    "EVA10",
    "추ㅇ호",
    "F",
    22,
    "2022",
    "SH496",
    "서울",
    "SLC26A4 c.2168A>G:p.His723Arg",
    "SLC26A4 c.2168A>G:p.His723Arg"
  ),
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
          className={styles.subImage}
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