import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { collapseClasses, Stack } from "@mui/material";
import { Box } from "@mui/system";
import ReactPaginate from "react-paginate";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function createData(memo, date, id) {
  return { memo, date, id };
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    listStyle: "none",
  },
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "25px",
    height: "25px",
    marginLeft: "5px",
    marginRight: "5px",
    backgroundColor: "white",
    border: `1px solid ${grey[500]}`,
    borderRadius: 8,
    "&:hover": {
      cursor: "pointer",
    },
  },
  pageLink: {},
  activePage: { backgroundColor: "red", fontWeight: 700 },
  activeLinkPage: {
    backgroundColor: "blue",
  },
});

const MemoData = [
  createData("오늘 온다고 해놓고 쌩깠음1", "2021.11.01", 1),
  createData("오늘 온다고 해놓고 쌩깠음2", "2021.11.01", 2),
  createData("오늘 온다고 해놓고 쌩깠음3", "2021.11.01", 3),
  createData("오늘 온다고 해놓고 쌩깠음4", "2021.11.01", 4),
  createData("오늘 온다고 해놓고 쌩깠음5", "2021.11.01", 5),
  createData("오늘 온다고 해놓고 쌩깠음6", "2021.11.01", 6),
  createData("오늘 온다고 해놓고 쌩깠음7", "2021.11.01", 7),
  createData("오늘 온다고 해놓고 쌩깠음8", "2021.11.01", 8),
  createData("오늘 온다고 해놓고 쌩깠음9", "2021.11.01", 9),
  createData("오늘 온다고 해놓고 쌩깠음10", "2021.11.01", 10),
];

const PrevPageIcon = (
  <>
    <Box sx={{ width: "50px", "&:hover": { cursor: "pointer" } }}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </Box>
  </>
);

const NextPageIcon = (
  <>
    <Box sx={{ width: "50px", "&:hover": { cursor: "pointer" } }}>
      <FontAwesomeIcon icon={faChevronRight} />
    </Box>
  </>
);

const ClientMemoGrid = () => {
  const classes = useStyles();
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentItems, setCurrentItems] = useState(MemoData.slice(0, 4));
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % MemoData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(MemoData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(MemoData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
  return (
    <Stack spacing={1}>
      <Box sx={{ pl: 3, pr: 3 }}>
        <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
          <TableContainer component={Box}>
            <Table
              sx={{ minWidth: 530 }}
              aria-label="simple table"
              size="small"
            >
              <TableHead>
                <TableRow>
                  <TableCell>메모</TableCell>
                  <TableCell align="right">작성일</TableCell>
                  <TableCell align="right">액션</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentItems.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.memo}
                    </TableCell>
                    <TableCell align="right">{item.date}</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
          <ReactPaginate
            breakLabel="..."
            nextLabel={NextPageIcon}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={PrevPageIcon}
            renderOnZeroPageCount={null}
            className={classes.root}
            pageClassName={classes.page}
          />
        </Box>
      </Box>
    </Stack>
  );
};

export default ClientMemoGrid;
