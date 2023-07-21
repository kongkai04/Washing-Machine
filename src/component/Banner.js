import React, { useState,useRef } from "react";


function Banner() {
const [disabled1, setDisabled1] = useState(false);
const [disabled2, setDisabled2] = useState(false);
const [disabled3, setDisabled3] = useState(false);

const [timer1,settimer1] = useState("00:00")
const increment = useRef(null)
const submit1 = (function (e) {
    e.preventDefault();
    setDisabled1(true);
      let time = 65;
      const tik1 = function () {
          const min = String(Math.trunc(time / 60)).padStart(2, 0);
          const sec = String(time % 60).padStart(2, 0);
          settimer1(`${min}:${sec}`);
          
          console.log(time)
          if(time == 60){
              alert("process is finish in 1 minute")
          }else if
          (time == 0){
              alert("done 1")
              clearInterval(increment.current);
              setDisabled1(false);
          }
          time--;
      };
      tik1();
      increment.current = setInterval(tik1, 1000);
});

const [timer2,settimer2] = useState("00:00")
const submit2 = (function (e) {
     e.preventDefault();
     setDisabled2(true);
       let time = 65;
       const tik1 = function () {
           const min = String(Math.trunc(time / 60)).padStart(2, 0);
           const sec = String(time % 60).padStart(2, 0);
           settimer2(`${min}:${sec}`);
           
           console.log(time)
           if(time == 60){
               alert("process is finish in 1 minute")
           }else if
           (time == 0){
               alert("done 1")
               clearInterval(increment.current);
               setDisabled2(false);
           }
           time--;
       };
       tik1();
       increment.current = setInterval(tik1, 1000);
 });


const [timer3,settimer3] = useState("00:00")
 const submit3 = (function (e) {
     e.preventDefault();
     console.log("btn Click 1",e);
     setDisabled3(true);
       let time = 65;
       const tik1 = function () {
           const min = String(Math.trunc(time / 60)).padStart(2, 0);
           const sec = String(time % 60).padStart(2, 0);
           settimer3(`${min}:${sec}`);
           
           console.log(time)
           if(time == 60){
               alert("process is finish in 1 minute")
           }else if
           (time == 0){
               alert("done 1")
               clearInterval(increment.current);
               setDisabled3(false);
           }
           time--;
       };
       tik1();
       increment.current = setInterval(tik1, 1000);
 });


    return(
        <div>
            <section>
        <div className="container">
          <div className="blog-title">
            <h3>Our Machine</h3>
          </div>
          <div className="blog-con">
            <div className="blog-item">
              <img src="https://img.freepik.com/premium-photo/laundry-room-with-washing-machine_566707-2130.jpg" alt="" />
              <h4>Washing machine 1</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates, illo?
              </p>
              <button id="btntimer1" onClick={submit1} disabled={disabled1} name="1" className="blog-btn">Used coin for start</button>
              <label className="label-timer1" id="timer1">{timer1}</label>
            </div>
            <div className="blog-item">
              <img src="https://img.freepik.com/premium-photo/laundry-room-with-washing-machine_566707-2130.jpg" alt="" />
              <h4>Washing machine 2</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates, illo?
              </p>
              <button id="btntimer2" onClick={submit2} disabled={disabled2} name="2" className="blog-btn">Used coin for start</button>
              <label className="label-timer2" id="timer2">{timer2}</label>
            </div>
            <div className="blog-item">
              <img src="https://img.freepik.com/premium-photo/laundry-room-with-washing-machine_566707-2130.jpg" alt="" />
              <h4>Washing machine 3</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates, illo?
              </p>
              <button id="btntimer3" className="blog-btn" onClick={submit3} name="3"  disabled={disabled3}>Used coin for start</button>
              <label className="label-timer3" id="timer3">{timer3}</label>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
    
}
export default Banner;