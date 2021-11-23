import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import ClearIcon from "@mui/icons-material/Clear";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import ReactPaginate from "react-paginate";
import { makeStyles } from "@mui/styles";
import { grey, red, pink, blue } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

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

const ClientListGrid = () => {
  const classes = useStyles();
  const [fetchData, setFetchData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const API_URL = "http://localhost:7733/api/client";

  const getData = async () => {
    await axios({
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      responseType: "json",
      url: API_URL,
    })
      .then((res) => {
        //alert(res.data.message);
        console.log(JSON.stringify(res.data));
        setFetchData(res.data);
        setCurrentItems(fetchData.slice(0, 19));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getData();

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % fetchData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(fetchData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(fetchData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
  return (
    <Stack spacing={1}>
      <Box sx={{ pl: 2, pr: 2 }}>
        <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
          <TableContainer component={Box}>
            <Table
              sx={{ width: "100%" }}
              aria-label="simple table"
              size="small"
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: "15%" }}>전화번호</TableCell>

                  <TableCell sx={{ width: "85%" }} align="center">
                    액션
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentItems.map((item) => (
                  <TableRow
                    key={item._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.clientNumber}
                    </TableCell>

                    <TableCell align="right">
                      <Stack
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            flex: 4,
                          }}
                        >
                          <input type="text" style={{ width: "90%" }} />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            flex: 1,
                            justifyContent: "space-around",
                          }}
                        >
                          <ClearIcon sx={{ color: grey[500] }} />
                          <FavoriteBorderIcon sx={{ color: grey[500] }} />
                        </Box>
                      </Stack>
                    </TableCell>
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

export default ClientListGrid;
