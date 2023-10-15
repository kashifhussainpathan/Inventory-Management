import "./home.css";
import React, { useState } from "react";
import { salesState } from "../../actions/sale.action";
import InventoryReport from "../../components/reports/InventoryReport";
import SalesReport from "../../components/reports/salesReport";

const Home = () => {
  const sales = salesState("sales");
  const [reportType, setReportType] = useState("");
  const [showReport, setShowReport] = useState(false);

  return (
    <div className="home">
      <h1>Inventory Management</h1>

      <div className="home-report-inputs">
        <select
          onChange={(e) => setReportType(e.target.value)}
          value={reportType}
        >
          <option value="">Report Type</option>
          <option value="sales">Sales Reports</option>
          <option value="inventory">Inventory Reports</option>
        </select>
        <button onClick={() => setShowReport(true)}>Generate Report</button>
      </div>

      <div className="home-repots">
        {showReport && reportType === "inventory" && <InventoryReport />}

        {showReport && reportType === "sales" && <SalesReport />}
      </div>
    </div>
  );
};

export default Home;
