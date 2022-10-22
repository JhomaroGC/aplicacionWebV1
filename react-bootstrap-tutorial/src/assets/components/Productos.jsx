import React from "react";
import { stockData } from "../data/Productos.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container } from "react-bootstrap";

const Productos = () => {
  return (
    <>
      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <Table striped bordered hover key={key}>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Ticker</th>
                  <th>StockPrice</th>
                  <th>TimeElapsed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{data.company}</th>
                  <th>{data.ticker}</th>
                  <th>{data.stockPrice}</th>
                  <th>{data.timeElapsed}</th>
                </tr>
              </tbody>
            </Table>

            // <div key={key}>
            //   {data.company +
            //     " , " +
            //     data.ticker +
            //     " ," +
            //     data.stockPrice +
            //     ", " +
            //     data.timeElapsed}
            // </div>
          );
        })}
      </div>
    </>
  );
};

export default Productos;
