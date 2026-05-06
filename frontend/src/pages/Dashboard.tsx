import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<any>({});
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    axios.get("/stats").then(res => setStats(res.data));
    axios.get("/stats/chart").then(res => setChartData(res.data));
  }, []);

  return (
    <div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Card><Card.Body>Total Risks: {stats.totalRisks}</Card.Body></Card>
        <Card><Card.Body>Accepted: {stats.accepted}</Card.Body></Card>
        <Card><Card.Body>Rejected: {stats.rejected}</Card.Body></Card>
        <Card><Card.Body>Pending: {stats.pending}</Card.Body></Card>
      </div>

      <BarChart width={600} height={300} data={chartData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="risks" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Dashboard;
