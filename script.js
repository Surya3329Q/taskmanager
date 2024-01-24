let addBtn = document.querySelector(".addbtn");
let taskAdder = document.querySelector(".task-adder");
let taskColors = document.querySelector(".colorPart");
let activeBtn = document.querySelector(".active");
let textArea = document.querySelector(".ta");
let ticketCont = document.querySelector(".ticket-Container");
let delBtn = document.querySelector(".delbtn");

let colorsArray =["red" ,"yellow" , "green" , "blue"];

let delFlag = false;

addBtn.addEventListener("click", function () {
    taskAdder.classList.toggle("hidden");
})

taskColors.addEventListener("click", function (event) {

    let ele = event.target;
    //   console.log(ele.classList)
    if (ele.classList[0] == "box") {
        activeBtn.classList.remove("active");
        ele.classList.add("active");
        activeBtn = ele;
    }
})

textArea.addEventListener("keydown" , function(event){
   if(event.key == "Enter"){

      let task = textArea.value ;
      let activeColor =  activeBtn.classList[1];

      // creating new tickets 

      let newTicket = document.createElement("div");
      newTicket.classList.add("ticket");
      newTicket.innerHTML=` <div class="ticket-color ${activeColor}"></div>
      <div class="ticket-task">${task}</div>`

    //   delete function of ticket 

      newTicket.addEventListener("dblclick",function(){

        if(delFlag == true){
            ticketCont.removeChild(newTicket);
        }

      })

      // color swapping function of ticket 

      let ticketColorContainer = newTicket.querySelector(".ticket-color");

      ticketColorContainer.addEventListener("click",function(){
            
        let intialColor = ticketColorContainer.classList[1];

          let colorIndex = colorsArray.indexOf(intialColor);
        //   console.log(colorIndex);
        let nextColorIndex = (colorIndex +1)%4 ;

        ticketColorContainer.classList.remove(intialColor);
        ticketColorContainer.classList.add(colorsArray[nextColorIndex]);
        

      })

     
       ticketCont.appendChild(newTicket);

      textArea.value="";
      taskAdder.classList.toggle("hidden");
   }
})


delBtn.addEventListener("click",function(){
    if(delFlag == false){
        delBtn.style.color = 'red';
    }else{
        delBtn.style.color = 'black';
    }

    delFlag = !delFlag;
})