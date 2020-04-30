//显示隐藏
let foods=document.getElementById('foods')
let cart=document.getElementById('cart')
function myShopping(){
foods.style.display="none";
cart.style.display="block"
}
function toFood(){
foods.style.display="block";
cart.style.display="none";
}
//添加

let numI=document.getElementById('numI')
let table=document.getElementsByTagName('table')[1]
var count=0
function add(name,price){
    // let flag=false;
    // var index;
//     for(let i=1;i<table.rows.length;i++){
//         // if(table.rows[i].cells[1].innerHTML==name){
            
//         // } 
// }               
    // if(flag){
    //     table.rows[index].cells[2].innerHTML=Number(table.rows[index].cells[2].innerHTML)
    // }else{
        let row=table.insertRow()
        row.insertCell().innerHTML="<input type='checkbox' class='checkfrist' onclick='checkAlls()'>"
        row.insertCell().innerHTML=name
        row.insertCell().innerHTML=price;
        row.insertCell().innerHTML="<input type='button' value='删除' onclick='dive(this)'>"
        
    // }  
   sumCount()
//    count++
//    numI.innerHTML=count

}
 //数量++

 function sumCount(){
     count++
    numI.innerHTML=count
 }
 
    //删除单行

function dive(dev){  
        var objRow=dev.parentElement.parentElement
        var checkfrist=document.getElementsByClassName('checkfrist')  
    for(var i=0;i<checkfrist.length;i++){      
        if(checkfrist[i].checked){
           table.deleteRow(objRow.rowIndex)
           count--;
        numI.innerHTML=count
        }
    }  
        hhh()
    }
//全选

function checkAll(obj){
    var checkAll=document.getElementById('all')
    var checkfrist=document.getElementsByClassName('checkfrist')  
    for(var i=0;i<checkfrist.length;i++){      
        checkfrist[i].checked=checkAll.checked
    }
    hhh()
}
//反选
function checkAlls(){
    var checkAll=document.getElementById('all');
    var checkfrist=document.getElementsByClassName('checkfrist');  
    var flag=true;
    for(let i=0;i<checkfrist.length;i++){      
        if(!checkfrist[i].checked){
            flag=false; 
        }
         
    }
        if(flag){
        checkAll.checked=true
    }else{
        checkAll.checked=false
    }
   hhh()
}
//结算
function hhh(){
    let sum=0
    let moneyAdd=document.getElementById('moneyAdd')
    let table=document.getElementsByTagName('table')[1]
    var checkfrist=document.getElementsByClassName('checkfrist')  
    for(let i=0;i<checkfrist.length;i++){
    if(checkfrist[i].checked){ 
       sum+=Number(table.rows[i+1].cells[2].innerHTML )
    }
} 
moneyAdd.innerHTML=sum 
}        
function money(){
    let moneyAdd=document.getElementById('moneyAdd')
    let table=document.getElementsByTagName('table')[1]
    var checkfrist=document.getElementsByClassName('checkfrist')  
    for(var i=checkfrist.length-1;i>=0;i--){      
        if(checkfrist[i].checked){
            table.deleteRow(i+1)   
        } 
    }
        if(moneyAdd.innerHTML!=0){
            alert("您所购买的商品共计"+moneyAdd.innerHTML+"元，请结算")
            
        }
        document.getElementById('moneyAdd').innerHTML=0
        
        count=0; 
        numI.innerHTML=count
        
        } 
     
       
          
        
//全部删除
function alldve(){
    let table=document.getElementsByTagName('table')[1]
    if(document.getElementById('all').checked){
    for(let i=table.rows.length-1;i>0;i--){ 
            table.deleteRow(i)
        } 
    } 
    count=0
    numI.innerHTML=count
}
