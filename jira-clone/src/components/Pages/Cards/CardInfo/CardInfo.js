import "./CardInfo.css";
import Modal from "../../Modal/Modal";
import { Type } from "react-feather";
import Editable from "../Editable";
import { List } from "react-feather";
import { Calendar } from "react-feather";
import { Tag } from "react-feather";
import React, { useState } from "react";
import {CheckSquare} from "react-feather";
import {Trash} from "react-feather";

function CardInfo(props) {
 
const colors = ["#61bd4f", "#f2d600", "#ff9f1a", "#eb5a46", "#c377e0", "#0079bf"];
const [activeColor, setActiveColor] = useState("");
  return (
    <Modal onClose={() => props.onClose()}>
      <div className="card-info">
        <div className="card-info_box">
          <div className="card-info_box_title">
            <Type />
            Title no 1
          </div>
          <div className="card-info_box_body">
            <Editable text={"Your Title"} placeholder="Enter Title" buttonText="Set Title" />
          </div>
        </div>
        <div className="card-info_box">
          <div className="card-info_box_title">
            <List />
            Description
          </div>
          <div className="card-info_box_body">
            <Editable text={"Your description here"} placeholder="Enter Title" buttonText="Set Description" />
          </div>
        </div>
        <div className="card-info_box">
          <div className="card-info_box_title">
            <Calendar />
            Date
          </div>
          <div className="card-info_box_body">
            <input type="date" />
          </div>
        </div>
        <div className="card-info_box">
          <div className="card-info_box_title">
            <Tag />
            Labels
          </div>
          <div className="card-info_box_colors">
            {colors.map((item, index) => (
            <li key={index} style={{backgroundColor: item}} 
            className={item===activeColor ? "active" :""}
            onClick={() => setActiveColor(item)}
            />
            ))}
          </div>
          <div className="card-info_box_body">
          <Editable text={"Your labels"} placeholder="Enter Title" buttonText="Add Label"/>
          </div>
        </div>
        <div className="card-info_box">
          <div className="card-info_box_title">
            <CheckSquare />
            Tasks
          </div>
          <div className="card-info_box_progress-bar">
            <div className="card-info_box_progress" style={{width: "30%"}}/>  
          </div>
          <div className="card-info_box_list">
            <div className="card-info_task">
                <input type="checkbox" />
                <p>Task 1</p>
                <Trash/>
            </div>
            <div className="card-info_task">
                <input type="checkbox" />
                <p>Task 2</p>
                <Trash/>
            </div>
          </div>
          <div className="card-info_box_body">
          <Editable text={"Your labels"} placeholder="Enter task" buttonText="Add Task"/>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CardInfo;
