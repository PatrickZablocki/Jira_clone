import React, { useState } from "react";
import { CheckSquare, MoreHorizontal } from "react-feather";
import Chip from "../Chip/Chip";
import "./JiraCard.css";
import { Clock } from "react-feather";
import DropdownCard from "../DropdownCards/DropdownCard";
import CardInfo from "./CardInfo/CardInfo";

function JiraCard(props) {
  const [showDropdownCard, setShowDropdownCard] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    {showModal && <CardInfo card={props.card} onClose={() => setShowModal(false)} />
        }
      <div
        className="jira-card"
        draggable
        onDragEnd={() => props.handleDragEnd(props.card?.id, props.boardId)}
        onDragEnter={() => props.handleDragEnter(props.card?.id, props.boardId)}
        onClick={() => setShowModal(true)}
      >

        <div className="jira-card_top">
          <div className="jira-card_labels">
            {props.card?.labels?.map((item, index) => (
              <Chip
                props={item}
                key={index}
                text={item.text}
                color={item.color}
              />
            ))}
          </div>
          <div
            className="jira-card_top_more"
            onClick={() => setShowDropdownCard(true)}
          >
            <MoreHorizontal />
            {showDropdownCard && (
              <DropdownCard onClose={() => setShowDropdownCard(false)}>
                <div className="jira-card_dropdown">
                  <p
                    onClick={() =>
                      props.removeCard(props.card?.id, props.boardId)
                    }
                  >
                    Delete Card
                  </p>
                </div>
              </DropdownCard>
            )}
          </div>
        </div>
        <div className="jira-card-title">{props.card?.title}</div>

        <div className="jira-card-footer">
          {props.card?.date && (
            <p>
              <Clock />
              {props.card?.date}
            </p>
          )}
          <p>
            <CheckSquare />
            1/4
          </p>
        </div>
      </div>
    </>
  );
}

export default JiraCard;
