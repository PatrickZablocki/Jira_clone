// import { useState } from "react";
import "./Home.css";
// import Board from "./Pages/Board/Board";
// import Editable from "./Pages/Cards/Editable";


function Home() {
// const [boards,setBoards] = useState([
//   {
//     id:Date.now() + Math.random()*2,
//     title:"To Do",
//     cards:[
//       {
//         id:Date.now() + Math.random(),
//         title:"Card 1",
//         tasks:[],
//         labels:[{
//           text:"Frontend",
//           color:"red"
//         }],
//         desc:"This is a description",
//         date:"",
//       },
//       {
//         id:Date.now() + Math.random(),
//         title:"Card 2",
//         tasks:[],
//         labels:[{
//           text:"Backend",
//           color:"blue"
//         }],
//         desc:"This is a description",
//         date:"",
//       }
//     ]
//   }
// ])

// const [target,setTarget]=useState({
//   cid:"",
//   bid:"",
// });

// const addCard=(title,bid)=>{
//   const card={
//     id:Date.now() + Math.random(),
//     title,
//     labels:[],
//     tasks:[],
//     date:"",
//     desc:"",
//   };

//   const index=boards.findIndex((item)=>item.id===bid);
//   if(index < 0) return;

//   const tempBoards=[...boards]
//   tempBoards[index].cards.push(card);
//   setBoards(tempBoards);
// };

// const removeCard=(cid,bid)=>{
//   const bIndex=boards.findIndex((item)=>item.id===bid);
//   if(bIndex < 0) return;

//   const cIndex=boards[bIndex].cards.findIndex((item)=>item.id===cid);
//   if(cIndex < 0) return;

//   const tempBoards=[...boards];
//   tempBoards[bIndex].cards.splice(cIndex,1);
//   setBoards(tempBoards);
// };

// const addBoard=(title)=>{
//   setBoards([...boards,{
//     id:Date.now()+Math.random(),
//     title,
//     cards:[]
//   }]);
// };

// const removeBoard=bid=>{
//   const tempBoards=boards.filter(item=>item.id!==bid);

//   setBoards(tempBoards);
// }
// const handleDragEnter=(cid,bid)=>{
// setTarget({
//   cid,
//   bid,
// });
  
// };

//   const handleDragEnd=(cid,bid)=>{
//     let s_bIndex,s_cIndex,t_bIndex,t_cIndex;
    
//     s_bIndex=boards.findIndex((item)=>item.id===bid);
//     if(s_bIndex < 0) return;
    
//     s_cIndex=boards[s_bIndex].cards.findIndex((item)=>item.id===cid);
//     if(s_cIndex < 0) return;
    
//     t_bIndex=boards.findIndex((item)=>item.id===target.bid);
//     if(t_bIndex < 0) return;
    
//     t_cIndex=boards[t_bIndex].cards.findIndex((item)=>item.id===target.cid);
//     if(t_cIndex < 0) return;

//     const tempBoards=[...boards];
//     const tempCard=tempBoards[s_bIndex].cards[s_cIndex]

//     tempBoards[s_bIndex].cards.splice(s_cIndex,1)
//     tempBoards[t_bIndex].cards.splice(t_cIndex,0,tempCard);

//     setBoards(tempBoards);
// };



  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    <div className="home-container">
      {/* Hier beginnt der Header */}
      <header className="header">
        <div className="header-content">
          <nav className="navbar">
            <div className="header-content">
              <a href="/">
                <img
                  className="Logo-Image"
                  src="/LogoImage/Logo.png"
                  alt="Logo from Jira"
                />
              </a>
            </div>
            <ul>
              <li>
                <a href="#">Your Work</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Filters</a>
              </li>
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">People</a>
              </li>
              
            </ul>
            <button className="CreateBtn">Create</button>
          </nav>
          <div className="Search">
            <span class="Search-icon">&#128269;</span>
            <input
              className="Search-content"
              type="search"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="profile-container">
          <button className="settingBtn">
            <span class="icon">⚙️</span>
          </button>
          <button className="LogInBtn">
            <a href="">Sign in</a>
          </button>
          {/* {isDropdownOpen && (
                        <div className="dropdown-menu">
                            <ul>
                                <a className= "dropdown-content" href="">Profil Bearbeiten<li></li></a>
                                <a className= "dropdown-content" href="">Einstellungen<li></li></a>
                                <a className= "dropdown-content" href="">Ausloggen<li></li></a>
                            </ul>
                        </div>
                    )} */}
        </div>
      </header>
      {/* Hier Hört der Header auf */}
      {/* Hier geht die Sidebar los */}
      <div className="content">
        <div className="Sidebar">
          <h2>Planning</h2>
          <ul>
            <li>
              <a href="#">
                <span class="icon">&#x1F4C5;</span>Timeline
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">&#x1F4A1;</span>Backlog
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">&#x1F5C3;</span>Board
              </a>
            </li>
            <li class="line"></li>
            <li>
              <a href="#">
                <span class="icon">&#x271A;</span>Add shortcut
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">⚙️</span>Project settings
              </a>
            </li>
          </ul>
        </div>
        {/* HIer endet die Sidebar */}
        {/* Ab hier beginnt der Main Content */}
        <div className="main-view">
          <div className="main_nav">
            <h2>Backlog</h2>
          </div>
          {/* <div className="main_outer">
            <div className="main_boards">
              
               { boards.map((item)=>(<Board
                key={item.id} board={item}
                removeBoard={removeBoard}
                addCard={addCard}
                removeCard={removeCard}
                setTarget={setTarget}
                target={target}
                handleDragEnd={handleDragEnd}
                handleDragEnter={handleDragEnter}

                />
                ))}
              
              
              <div className="app_boards_board">
                <Editable
                displayClass="app_boards_board_add"
              text="Add Board"
              placeholder="Enter board title"
              onSubmit={(value)=>addBoard(value)}
              />
              </div>
              
              
            </div>
          </div> */}
        </div>
      </div>
      {/* Hier endet der Main content */}
      {/* Hier beginnt der Footer */}
      {/* <footer className="footer">
        <p>© {new Date().getFullYear()} Jira-Clone</p>
      </footer> */}
    </div>
  );
}

export default Home;
