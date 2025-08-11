
function dataDisplayonScreen (){

const main = document.getElementById('main')

  
let innerHTML = '';

item.forEach( item => {

  innerHTML +=
   `
<div id='item'>

 <a href="${item.Link}"> <img  id="thumbnail"  src="${item.thumbnail}" alt="" > </a>

   <div id="ChlLogo"> 
    <img id="profile"src="${item.channelImg}" alt="">
<a href="${item.Link}" id ='link'> <p id='titleWrap'>${item.title}</p> </a>
  </div>

  <p id="profileName">${item.channelName}</p>

  <div id ="viewDate" ">
    <p>${item.Views_And_Date.views}</p>
    <p>${item.Views_And_Date.date}</p> 
  </div>

</div>
  
  `

});

main.innerHTML = innerHTML;

};

// dataDisplay.innerHTML = VideoSeg;
dataDisplayonScreen ();


 const btn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");
   const body = document.body;

    btn.addEventListener("click", () => {
      sidebar.classList.toggle("show");
      body.classList.toggle("sidebar-open")
    });


  
    