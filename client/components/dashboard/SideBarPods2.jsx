import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function SideBarPods({ clusterName, nodeNumber }) {
  // const navigate = useNavigate();
  // const handleLoginClick = (nodeIndex) => {
  //   navigate("/nodedashboard");
  // };

  // const nodes = Array.from({ length: nodeNumber }, (_, i) => i + 1);

  return (
    <div className="sidebar">
      <div class="sidebarMenu">
        <a href="/selectcluster">Cluster first-cluster</a>
        <a href="/nodedashboard">Node 2</a>
        <div class="dropdown">
          <button class="dropbtn">
            Node 5<i class="fa fa-caret-down" style={{ marginLeft: "5px" }}></i>
          </button>
          <div class="dropdown-content">
            {/* <a href="/">Node 2</a> */}
            <a href="/nodedashboard">Node 1</a>
            <a href="/nodedashboard">Node 2</a>
            <a href="/nodedashboard">Node 3</a>
            <a href="/nodedashboard">Node 4</a>
            <a href="/nodedashboard">Node 5</a>
            <a href="/nodedashboard">Node 6</a>
            <a href="/nodedashboard">Node 7</a>
            <a href="/nodedashboard">Node 8</a>
            <a href="/nodedashboard">Node 9</a>
            <a href="/nodedashboard">Node 10</a>
          </div>
          <button class="dropbtn">
            Pod 5<i class="fa fa-caret-down" style={{ marginLeft: "5px" }}></i>
          </button>
          <div class="dropdown-content">
            {/* <a href="/">Node 2</a> */}
            <a href="/poddashboard">All Pods</a>
          </div>
        </div>
      </div>
    </div>
  );
}
