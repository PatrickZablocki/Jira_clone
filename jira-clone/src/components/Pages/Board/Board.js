import React, { useState } from "react";
import "./Board.css";
import JiraCard from "../Cards/JiraCard";
import { MoreHorizontal } from "react-feather";
import Editable from "../Cards/Editable";
import DropdownCard from "../DropdownCards/DropdownCard";

function Board(props) {
  
  const [showDropdownCard, setShowDropdownCard] = useState(false);
  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">
          {props.board?.title} <span>{`${props.board?.cards?.length}`}</span>
        </p>
        <div
          className="board_top_more"
          onClick={() => setShowDropdownCard(true)}
        >
          <MoreHorizontal />
           {showDropdownCard && (
            <DropdownCard onClose={() => setShowDropdownCard(false)}>
              <div className="board_dropdown">
                <p onClick={()=>props.removeBoard(props.board?.id)}>Delete Board</p>
              </div>
            </DropdownCard>
          )}
        </div>
      </div>
      <div className="board_cards ">
        {props.board?.cards?.map((item=><JiraCard
        key={item.id}
        card={item}
        removeCard={props.removeCard} 
        boardId={props.board?.id}
        handleDragEnd={props.handleDragEnd}
        handleDragEnter={props.handleDragEnter}
        />
        
        
        ))}
        
        
        <Editable
          displayClass="board_cards_add"
          text="Add Card"
          placeholder="Enter Card Title"
          onSubmit={(value) => props.addCard(value, props.board?.id)}
        />
      </div>
    </div>
  );
}

export default Board;
{/* <JiraCard/>
                <JiraCard/>
                <JiraCard/>
                <JiraCard/>
                <JiraCard/>
                <JiraCard/> */}