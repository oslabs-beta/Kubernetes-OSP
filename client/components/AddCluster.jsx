import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarDash from "./NavbarDash.jsx";

export default function AddCluster({ username }) {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/selectcluster");
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <NavbarDash username={username} />
      <div className="entirepage">
        <div className="loginContainer">
          <div id="loginform">
            <h1 className="title">Add Your EKS Cluster</h1>
            <div className="formGroup">
              <input
                type="text"
                id="accessKeyId"
                placeholder="Access Key ID"
                name="accessKeyId"
              />
            </div>
            <div className="formGroup">
              <input
                type="text"
                id="secretAccessKey"
                placeholder="Secret Access Key"
                name="secretAccessKey"
              />
            </div>
            <div className="formGroup">
              <input
                type="text"
                id="sessionToken"
                placeholder="Session Token"
                name="sessionToken"
              />
            </div>
            <div className="formGroup">
              <input
                type="text"
                id="region"
                placeholder="Region"
                name="region"
              />
            </div>
            
            <div className="readMore">
              <button onClick={toggleModal}>Read More</button>
            </div>
            <div className="submit">
              <button onClick={handleLoginClick}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="modal">
          <div className="modalContent">
            <span className="closeButton" onClick={toggleModal}>
              &times;
            </span>
            <h2>How to add your EKS Clusters </h2>
            <p>
              1- go to your AWS account
            </p>
            <p>
              2- regret ever joining this field
            </p>
          </div>
        </div>
      )}
    </>
  );
}

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import NavbarDash from "./NavbarDash.jsx";

// // import { useNavigate } from "react-router-dom";
// // import "../styles.css";

// export default function AddCluster({username}) {
//   const navigate = useNavigate();
//   const handleLoginClick = () => {
//     navigate("/selectcluster");
//   };
//   return (
//     <>
//     <NavbarDash username={username}/>
//     <div className="entirepage">
//     <div className="loginContainer">
//       <div id="loginform">
//         <h1 className="title">Add Your EKS Cluster</h1>
//         <div className="formGroup">
//           <input type="text" id="username" placeholder="Access Key ID" name="username" />
//         </div>
//         <div className="formGroup">
//           <input type="text" id="password" placeholder="Secret Access Key" name="password" />
//         </div>
//         <div className="formGroup">
//           <input type="text" id="password" placeholder="Session Token" name="password" />
//         </div>
//         <div className="formGroup">
//           <input type="text" id="password" placeholder="Region" name="Region" />
//         </div>
//         <div className="submit">
//           <button onClick={handleLoginClick}>Submit</button>
//         </div>
//       </div>
//     </div>
//     </div>
//     </>
//   );
// }
