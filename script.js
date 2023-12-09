let arr = [{
    dp: "https://images.unsplash.com/photo-1588358641419-458f7616cbf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGdpcmwlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    story: "https://images.unsplash.com/photo-1549570652-97324981a6fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGdpcmwlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
},
{
    dp: "https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    story: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGdpcmwlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    story: "https://images.unsplash.com/photo-1588358641419-458f7616cbf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGdpcmwlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
},
{
    dp: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmwlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    story: "https://images.unsplash.com/photo-1590074247122-baef7a2e2b53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGdpcmwlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
}];
let clutter = "";
let mainStory = document.querySelector("#mainStory");
function storymake(){
    arr.forEach(function (elm, idx) {
    clutter += `<div id="story">
                    <img id="${idx}"src ="${elm.dp}">
                </div>`
})
mainStory.innerHTML=clutter;
}
storymake();
function storyView(){
    mainStory.addEventListener("click",function(dets){
    document.querySelector("#fullScreen").style.display="block";
    document.querySelector("#fullScreen").style.backgroundImage=`url(${arr[dets.target.id].story})`;
    setTimeout(function(){
        document.querySelector("#fullScreen").style.display="none";
    },2000)
})
}
storyView();







