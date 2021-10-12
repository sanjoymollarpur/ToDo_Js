let container = document.getElementById('con1');
let container1 = document.getElementById('con');
let cardonly11=document.getElementById('cardonly-con');

let flag=1;
if(flag){
    container.style.display='none';
    cardonly11.style.display='none';
}

const obj=[[]];
showCards();

function toggle(index){
    container.style.display='initial';
    container1.style.filter="blur(3px)";
    cardonly11.style.filter="blur(3px)";
    //container1.style.zIndex='-1';
    
    if(index=='bb1'){
       // document.getElementById('addbtn').style.display='none';
        document.getElementById('addbtn1').style.display='initial';
    }
    else{
        document.getElementById('addbtn1').style.display='none';
        let a = document.createElement('a');
        a.id='a'+`${index}`;
        a.innerText="Add";
        a.onclick = function(){
            mycode(index);
            console.log(index); }
        let pp1=document.getElementById('pp1');
        console.log(a,pp1);
        pp1.appendChild(a);
        let txtid=document.getElementById(`card-${index}`);
        console.log("card",txtid);
       // txtid.style.zIndex='1';
        //txtid.style.display='none';
        container.style.zIndex='1';
        
        //document.getElementById('addbtn').style.display='initial';
    }
}
function mycode(index){
    console.log("mycode",index);
    let pp1=document.getElementById('pp1');
    let str='a'+index;
    let pp2=document.getElementById(str);
    console.log("gggg",str, pp2);
    //pp1.removeChild(pp2);
    let addtext1=document.getElementById('addtext');
    console.log('add ',addtext1.value);
    pp1.removeChild(pp2);


    let txtid=document.getElementById(`txt-${index}`);
    console.log("array", txtid.children.length);
    let len=txtid.children.length;
       const span1=document.createElement('span');
       span1.id=`txt1-${index}${len}`;
       span1.setAttribute("class","txt1");
       span1.innerText=addtext1.value;

       const span2=document.createElement('span');
       span2.id=`${index}${len}`;
       let index1=`${index}${len}`
       span2.setAttribute("class","txt2");
       span2.innerText="Mark Done";
        span2.onclick=function(){
               txtDelete(index1);
        }
       const div1=document.createElement('div');


    html1= `
        <div><span class="txt1" id="txt1-${index}"> ${addtext1.value} </span>
        <span class="txt2" id="${index}" onclick="txtDelete(this.id)"> Mark done </span>
        </div>`;
        console.log(span1);
    div1.appendChild(span1);
    div1.appendChild(span2);
    txtid.appendChild(div1);
    
   //txtid.innerHTML=html1;
   addtext1.value="";
    toggle1();
}

function txtDelete(index){
    let txt11=document.getElementById(`txt1-${index}`);
    let txt12=document.getElementById(`${index}`);
    console.log(txt11,txt12);
    txt11.style.textDecoration="line-through";
    txt12.style.display="none";
    txt11.style.color='red';
    
}


function toggle1(){
    container.style.display='none';
    container1.style.filter="blur(0px)";
}

function showCards() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="card" id="card-${index}">
        <p class="para para1" onclick="cardNote(this.id)" id="${index}">
         ${element}
        </p>
        
        <hr class="card-block" style="background-color: black; height: 2px;" >
        <div class="card-block para txtc-${index}"  id="txt-${index}">
        
        </div>
        <div class="addDelete card-block">
            <a href="" id="${index}" onclick="deleteNote(event,this.id)" class="c4"><i class="fa fa-trash-o" ></i></a>
            <a href="" id="${index}" onclick="cardpopup1(event,this.id)" class="c4"><i class="fa fa-plus "></i></a>
          
        </div>
        
        </div>`
    });
    let notesElm = document.getElementById('grid1');
    if(notesObj.length!=0)
    {
        
        notesElm.innerHTML=html;
    }else{
        notesElm.innerHTML=`No Items in the todo list`;
        // notesElm.style.color='white';
        // notesElm.style.fontSize='25px'
    }   
}

function cardNote(index){
    console.log(index);
    let cardGoPage=document.getElementById(`card-${index}`);
    let msg=cardGoPage.firstElementChild.innerHTML;
    console.log(msg);
    container1.style.display='none';
    cardonly11.style.display='initial';
    //cardGoPage.style.display='initial';
    let cardonly=document.getElementById('cardonly');
    cardonly.appendChild(cardGoPage);
   // let cardBlock=document.getElementsByClassName('card-block');
    //console.log(cardBlock);
    //cardBlock.style.display='initial';
    document.getElementById('heading2').innerHTML=msg;
}


function backMainPage(){
    console.log("back");
    window.history.back();
   // cardonly11.style.display='none';
    //container1.style.display='inherit';
   
}


function deleteNote(e,index) {
    e.preventDefault();
    console.log("I am deleting", index);
 
   let notes = localStorage.getItem("notes");
   if (notes == null) {
     notesObj = [];
   } else {
     notesObj = JSON.parse(notes);
   }
 
   notesObj.splice(index, 1);
   localStorage.setItem("notes", JSON.stringify(notesObj));
   showCards();
}

function inputTextFun() {
    let inputtext = document.getElementById('addtext');
    console.log(inputtext);
    let notes=localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];
    }else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(inputtext.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    inputtext.value="";
    showCards();
    console.log(inputtext.value);
    toggle1();
}

function cardpopup1(e,index){
    e.preventDefault();
    console.log(index);
    
    toggle(index);
}
function goBackPage(e){
    e.preventDefault();
    window.history.back();
}