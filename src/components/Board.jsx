import Form from "./Form";
import Stage from "./Stage";
import { useState } from "react";

const Board = () => {
  const [stage1, setstage1] = useState([]);
  const [stage2, setstage2] = useState([]);
  const [stage3, setstage3] = useState([]);

  const addToTask = (task) => {
    setstage1((prev) => [...prev, task]);  // Initially add tasks to stage1
  };

  return (
    <div className="p-4">
      <div className="flex gap-48 justify-around">
        <Form handleSubmit={addToTask} />
      </div>

      <div className="flex h-[90vh] justify-around p-4">
        <Stage
          tasks={stage1}
          setTasks={setstage1}
          stageName="stage1"
          setstage1={setstage1}
          setstage2={setstage2}
          setstage3={setstage3}
        />
        <Stage
          tasks={stage2}
          setTasks={setstage2}
          stageName="stage2"
          setstage1={setstage1}
          setstage2={setstage2}
          setstage3={setstage3}
        />
        <Stage
          tasks={stage3}
          setTasks={setstage3}
          stageName="stage3"
          setstage1={setstage1}
          setstage2={setstage2}
          setstage3={setstage3}
        />
      </div>
    </div>
  );
};

export default Board;


//form or board ka setup -------------------------


//sabse pehla kaam fuctionality ka ye rhega ki form mai sai input lana
//sabse pehle ham ek usestate variable input bnayenge, setinput or usko pehle empty rkhenge ge
// ham form mai ek Onsubmit lgayenge form mai
//default e.prevent deault krdenge jis se bydefault action rukjayga
//agr input khali hoga to kuch nahi krenge if(input.trim()=="" return) to us se return krdenge
// fir ham uske parent mai hamne ek function create krlena hai --in board.jsx
//fir kya krte hai parent mai us funtion ko create krlete hai or PROPS k through form mai \
// Props bhejdenge jo board mai pele se hi hoga useke through <from/ "handlesubmit">
// kyunki hame chahiye thi input ki value jo user dalega 
// to ham kya krte hai handlesubmit k through ham (input) value vo dalega vo ajegi right
//jab ham addtotask function mai input lelenge setstage1((prev) => [...prev, task]);
// or dekhenge ki pichli state uski kya hai or ek array bnayenge
// [..previous state ki copy, or jo nayi value ayi thi vo] dono ek sath krdenge
// 3 state kr jisme alg alg stage k namm se stage1,stage2, stage2 or unki state bhi alg alg 
// sabhi ko render krdete hai <stage/> or props daldenge
//usme ek empty array pass krna na tha bro kyunki vo uski intial stae hai 
// ab Task to same hi hai sabka isliye props mai jab bhejenge <stage/> wale to kya krna sabka naam tasks
//rakhdenge kyunki hame usme iterate kraenge stage.jsx mai 
//acha stage mai ek kaam krna hame map lgana sare items pr jo hmare task honge

// stage ka setup shuru jisme ham drag and drop lgayenge---------------------------------
// element ko draggable banane ke liye aapko us element ko draggable="true" dena padta hai.
// Isse wo element drag kiya ja sakta hai
// Item component mein aapne draggable attribute set kiya hai Item.jsx mai
// hamne usi div mai ek or function bnaya OnDragStart 
// ye kya krega  onDragStart={handleDragStart} event ko trigger krega kyuki hamne iska funtion bnaya hai uper dekh return k 
//ham isme likhenge e.dataTransfer.setData():
//Yeh function use hota hai drag karte waqt data ko temporarily store karne ke liye.
//taskData ek custom name hai jiske andar data ko store kiya gaya hai.
// Aap is name ko kuch bhi rakh sakte ho, yeh bas ek reference name hai 
//jisse aap drop ke waqt data ko retrieve kar sakte ho.
//task: value: Jo task aap drag kar rahe ho, wo value ke form mein
// store hoga (jo aapne Item component mein define kiya hai)

//sourceStage: stageName Yeh stage ka naam hoga jahan se aap task ko drag kar rahe ho.
// Jaise agar task Stage 1 se drag ho raha hai, toh sourceStage mein 'Stage 1' hoga.

//iska kaam khtm ab stage wale mai jab ham task ko uthalenge---------------------------------------------------
// OnDragOver ek event bnalete hai ye tab target hoga jab apne koi task ko hold kiya hoga 
//!important OndragOver mai e.preventDefault dena jruri hota hai kyunki agr yeh call nahi kiya to drag and drop allow nahi hota 

//ab ham task ko drop krenge tab-------------------------------------------------------------
// e.preventDefault(): Yeh line drop hone ke waqt default action ko rokne ke liye hoti hai.
//  Agar yeh nahi hota to item properly drop nahi hota.
// e.dataTransfer.getData("taskData"): 
// Yeh line woh data retrieve karti hai jo humne dragStart event mein set kiya tha (task aur sourceStage).
//jaise localstrage mai hot hai set or get
//JSON.parse(): Yeh method string ko object mein convert karti hai taaki hum task aur sourceStage ko use kar sakein.
// setTasks((prev) => [...prev, task]): Yeh line task ko current stage ke list mein add karne ka kaam karti hai.

// Maan lijiye, aap Stage 1 se "Task 1" ko Stage 2 mein drag aur drop kar rahe ho. Jab onDrop trigger hota hai:
// task = "Task 1"
// sourceStage = "Stage 1"
// Phir "Task 1" ko Stage 2 mein add kar diya jayega.

// Drag event mein task ko set kiya jata hai.
// DragOver event mein target ko valid banaya jata hai.
// Drop event mein task ko nayi stage mein shift kar diya jata hai.



// const taskData = JSON.parse(e.dataTransfer.getData("taskData"));  ye line usko uthaugi jo hamne setdata kiyatha start mai yha pr string ko object mai bhi convert kiya hai

// const task = taskData.task;  
// const sourceStage = taskData.sourceStage;

// // Remove the task from the source stage
// if (sourceStage === "stage1") {
//   setstage1((prev) => prev.filter((item) => item !== task));
// } else if (sourceStage === "stage2") {
//   setstage2((prev) => prev.filter((item) => item !== task));
// } else if (sourceStage === "stage3") {
//   setstage3((prev) => prev.filter((item) => item !== task));
// }

// // Add task to the target stage
// if (stageName === "stage1") {
//   setstage1((prev) => [...prev, task]);
// } else if (stageName === "stage2") {
//   setstage2((prev) => [...prev, task]);
// } else if (stageName === "stage3") {
//   setstage3((prev) => [...prev, task]);
// }
// };
