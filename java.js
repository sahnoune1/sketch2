const btn1=document.createElement("button");
btn1.classList.add("butt");
btn1.textContent="give me the grid number"
document.body.appendChild(btn1);

// const btn2=document.createElement("button");
// btn2.classList.add("butt");
// btn2.textContent="give me the grid number"
// document.body.appendChild(btn2);


const output=document.createElement("div");
output.classList.add("output");
document.body.appendChild(output);

btn1.addEventListener("click",()=>{
    let node = document.querySelector('.output');
    node.innerHTML = "";
    console.log(node.innerHTML);
    let num=prompt("five me the number");
if (num<0 || num>64){
    alert("enter  anumber between 0 and 64");
    return;
}
else{
    const tot=num*num
    for (let i=0;i<tot;i++){
        const ele=document.createElement("div");
        output.appendChild(ele);
        ele.textContent=``;
        ele.classList.add("box");
        ele.addEventListener("mouseover", func);
    }
    // output.style.setProperty(`grid-template-rows`,
    // `repeat(${num},5fr)`);
    output.style.setProperty(`grid-template-columns`,
    `repeat(${num},5fr)`);
}
    
});

// btn2.addEventListener("click",()=>{
   
//   })
  




// createGrid();





// function number (){
    
    
//     return(num);

// }


// function createGrid (){
   
// }







function func (e){
    const ele=e.target;
    ele.style.backgroundColor="black";
}



// butt.addEventListener("click",update);
// console.log(total);


// function update(){
//     let num=prompt("gice me the grid number");
//     grid[0]=num;
//     grid[1]=num;

// }


// function createGrid(total){
  
//     for (let i=0;i<total;i++){
//         const ele=document.createElement("div");
//         grido.append(ele);
//         ele.textContent=`${i+1}`;
//         ele.classList.add("box");
//         ele.addEventListener("mouseover", func);
        
//     }
//     grido.style.setProperty(`grid-template-columns`,
//     `repeat(${total},1fr)`);
// }



// function func(e)
// {  
//     const el=e.target;
//     el.style.backgroundColor ="lightgreen";
   
// }

