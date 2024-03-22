import React, { useState, useEffect } from "react";
import axios from "axios";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Table = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=15`
      );
      setData(response.data);
      const totalCount = Number(response.headers["x-total-count"]);
      setTotalPages(Math.ceil(totalCount / 15));
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <>
      <div className="table_container">
        <table>
          <thead>
            <tr id="table_heading">
              <th id="Id">User Id</th>
              <th id="Id">ID</th>
              <th id="Title">Title</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td id="Id_content">{item.userId}</td>
                <td id="Id_content">{item.id}</td>
                <td id="Title_content">{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table_buttons">
        <button onClick={handlePrevPage} disabled={page === 1}>
          <ArrowBackIosNewIcon />
        </button>
        <span>{`Page ${page} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </>
  );
};

export default Table;
