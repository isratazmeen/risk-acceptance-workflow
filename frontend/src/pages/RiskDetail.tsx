import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const RiskDetail: React.FC = () => {
  const { id } = useParams();
  const [risk, setRisk] = useState<any>(null);

  useEffect(() => {
    axios.get(`/risk/${id}`).then(res => setRisk(res.data));
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`/risk/${id}`);
    alert("Risk deleted");
  };

  if (!risk) return <p>Loading...</p>;

  return (
    <div>
      <h2>{risk.name}</h2>
      <span>Status: {risk.status}</span>
      <span>Score: <strong>{risk.score}</strong></span>
      <button onClick={handleDelete}>Delete</button>
      <button>Edit</button>
    </div>
  );
};

export default RiskDetail;
