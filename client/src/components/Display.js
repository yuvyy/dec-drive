import { useState } from "react";
import "./Display.css";
const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const getdata = async () => {
    const fileHashes = [];
    // const fileNames = [];
    const fullFile = [];
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        for (const file of dataArray) {
          // fileNames.push(file.name);
          fileHashes.push(file.hash);
          fullFile.push({name:file.name, hash: file.hash})
        }
      } else {
        dataArray = await contract.display(account);
        for (const file of dataArray) {
          // fileNames.push(file.name);
          fileHashes.push(file.hash);
          fullFile.push({name:file.name, hash: file.hash})
        }
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(fullFile).length === 0;

    if (!isEmpty) {
      const str = fileHashes.toString();
      const str_array = str.split(",");

      for (var i=0; i < fileHashes.length; i++){
        fullFile[i].hash = str_array[i];
      }
      // console.log(str);
      // console.log(str_array);
      const images = fullFile.map((item, i) => {
        // console.log(item.substring(6))
        // console.log(item)
        return (
          <div>
          <div className="fileItem">
          <p className="fileName">{item.name}</p>
          <a href={item.hash} key={i} target="_blank" rel="noreferrer">
          <button className="open-file" onClick={item.hash}>Open file</button></a>
          </div>
          </div>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };
  return (
    <>
      <div className="flex-container">
      <div className="display-box">
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
        style={{width: "200px"}}
      ></input>
      <button className="center button" onClick={getdata}>
        Get Data
      </button>
      </div>
      </div>
      <div className="image-list">{data}</div>
    </>
  );
};
export default Display;
