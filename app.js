const play= document.querySelector('#play');
const forward=document.querySelector('#forword');
const back=document.querySelector('#backword');
const heart=document.querySelector('.heart');
const loop=document.querySelector('.loop');
const volume=document.querySelector('.controles-range');


heart.addEventListener('click',()=>{
   heart.classList.toggle('heart-color');
});
function secTominsec(time)
{
    let minutes=Math.floor(time/60);
    let sec=Math.floor(time%60);
    let stime=String(minutes).padStart(2,0);
    let etime=String(sec).padStart(2,0);
    return `${stime}:${etime}`;
}
let currentsong;
function playsong(song)
{
     currentsong=song;
     currentsong.volume=volume_val;
     currentsong.addEventListener('timeupdate',function(){
     document.querySelector('.start-val').innerText=secTominsec(currentsong.currentTime);
     document.querySelector('.end-val').innerText=secTominsec(currentsong.duration);
     document.querySelector('.music-range').value=(currentsong.currentTime/currentsong.duration)*100;
     if(currentsong.currentTime==currentsong.duration)
     {
      play.classList.remove('fa-circle-pause'); //paused
      isPlaying=false; 
      if(isloopclicked)
      {
         let currentval=current;
         forwardfun();
         if(currentval==current)
         {
            current=0  
         }
         playsong(arr[current].ele);
         isPlaying=true;
         play.classList.add('fa-circle-pause'); // play
      }
     }
  });
     changeColor(current);
     song.play(); 
     return true;
}
document.querySelector('.music-range').addEventListener('input',function(){
    if (currentsong!=undefined)
    {
      currentsong.currentTime=(document.querySelector('.music-range').value/100)*currentsong.duration;
    }
})

function pausedsong(song)
{
     song.pause();
     //changeColor(current);
     return true;
}

let privious;
function changeColor(idx)
{ 
     let box=document.querySelectorAll('.lib-box');
     if(!(box[idx].classList.contains('green-dark')))
     {
        box[idx].classList.add('green-dark');
     }
     if(privious==undefined)
     {
      privious=box[idx];
     }
     else{
        if(privious!=box[idx])
        {
           privious.classList.remove('green-dark');
           privious=box[idx];  
        }
     }
   }

let volume_val=1;
volume.addEventListener('input',function(){
   if(currentsong!=undefined)
   {
      currentsong.volume=volume.value/100;
      volume_val=volume.value/100;
   }
});

let arr=[];
 let isPlaying=false;
 let current=0;
play.addEventListener('click',()=>{
   if(!isPlaying)
   {
        isPlaying=true;
        play.classList.add('fa-circle-pause'); //play
        play.classList.toggle('green');
        playsong(arr[current].ele);
   }
   else{
        isPlaying=false;
        play.classList.remove('fa-circle-pause'); //paused
        play.classList.toggle('green');
        pausedsong(arr[current].ele);
   }
});


     document.querySelector('#hangburder').addEventListener('click',function(){
        document.querySelector('.side-bar').style.left="0";
     });

     document.querySelector('#cross').addEventListener('click',function(){
      document.querySelector('.side-bar').style.left="-200%";
   })

   let isloopclicked=false;
   loop.addEventListener('click',function(){
       if(!isloopclicked)
       {
         isloopclicked=true;
         loop.style.opacity="1";
         document.querySelector('.loop-notification').classList.toggle('visible');
         document.querySelector('.loop-notification').innerText="Loop activate";
         setTimeout(()=>{
            document.querySelector('.loop-notification').classList.toggle('visible');
         },1000);
       }
       else 
       {
          isloopclicked=false;
          loop.style.opacity="0.5";
          document.querySelector('.loop-notification').innerText="Loop Disabled";
          document.querySelector('.loop-notification').classList.toggle('visible');
         setTimeout(()=>{
            document.querySelector('.loop-notification').classList.toggle('visible');
         },1000);
       }
   })
  

   function forwardfun()
{
   let currentval=current;
   if (!isPlaying)
    {
        if(current<arr.length-1)
        {
           current++;
        }
        if (isloopclicked && currentval==current)
        {
         current=0;
        }
    }
    else{
       pausedsong(arr[current].ele);
       if(current<arr.length-1)
        {
          current++;
        }
        if (currentval==current && isloopclicked)
        {
         current=0;
        }
        playsong(arr[current].ele);
    }
}
function backfun()
{
   let currentval=current;
   if (isPlaying)
     {
        pausedsong(arr[current].ele);
        if(current>0)
        {
         current--;
        }
        if (isloopclicked && currentval==current)
        {
            current=arr.length-1;
        }
        playsong(arr[current].ele);
     }else
     {
       if(current>0)
       {
           current--;
       }
       if (isloopclicked && currentval==current)
        {
            current=arr.length-1;
        }
      }
}

forward.addEventListener('click',forwardfun);
back.addEventListener('click',backfun); 

  function playboxsong(idx)
  {
      if(isPlaying)
      {
         pausedsong(arr[current].ele);
         play.classList.remove('fa-circle-pause');//pasued
         setTimeout(()=>{
            play.classList.add('fa-circle-pause'); //play
            current=idx;
            playsong(arr[current].ele);
            changeColor(idx);
         },250);
      }
      else 
      {
          current=idx;
          setTimeout(()=>{
            isPlaying=true;
            playsong(arr[current].ele);
            play.classList.add('fa-circle-pause');
            changeColor(idx);
          },250);
      }
  }


   function generateArr(arr)
   {
      let lib_box=document.querySelectorAll('.lib-box');  
      let footer=document.querySelector('.footer');
      let parent=document.querySelector('.lib-boxes');
      for (box of lib_box)
      {
         parent.removeChild(box);
      }
      parent.removeChild(footer);
      let idx=0;
      for (box of arr)
      {
         let div=document.createElement('div');
         div.setAttribute('class','lib-box');
         div.classList.add('space-between');
         div.classList.add('pointer');
         div.setAttribute('id',idx);
         idx++;
         let subdiv=document.createElement('div');
         subdiv.setAttribute('class','lib-box-para');
         let top=document.createElement('p');
         let bottom=document.createElement('p');
         top.innerText=box.name;
         bottom.innerText=box.bot;
         top.setAttribute('class','para');
         bottom.setAttribute('class','para-bottom');
         let icon=document.createElement('i');
         icon.setAttribute('class','fa-regular fa-circle-play');
         subdiv.appendChild(top);
         subdiv.appendChild(bottom);
         div.appendChild(icon);
         div.appendChild(subdiv);
         div.addEventListener('click',()=>{
             playboxsong(div.getAttribute('id'));
         });
         parent.appendChild(div);
      }
      parent.appendChild(footer);
   }

   const controles=document.querySelector('.music-player');
   const cardarr=document.querySelectorAll('.card');
   const Big_div=document.querySelector('.card-container-big');
   function callmetosetarr(name)
   {
      for (let i=0;i<nameofArr.length;i++)
      {
          if(name==nameofArr[i].name)
          {
            console.log("FOUND");
            current=0;
            arr=nameofArr[i].arrName;
            document.querySelector('.music-player .album img').setAttribute('src',arr[0].img);
            document.querySelector('.music-player .album .album-top-para').innerText=arr[0].name;
            document.querySelector('.music-player .album .album-bottom-para').innerText=arr[0].bot;
            document.querySelector('.changed-name').innerText=arr[0].name;
            document.querySelector('.card-container-big-img').setAttribute('src',arr[0].img);

            Big_div.setAttribute('class','card-container-big');
            Big_div.classList.add(arr[0].color);

            generateArr(arr);
            if(isPlaying)
            {
               pausedsong(currentsong);
               play.classList.remove('fa-circle-pause'); //paused
               setTimeout(()=>{
                  play.classList.add('fa-circle-pause'); // play
                  playsong(arr[current].ele);
               },250);
               //playsong(arr[current].ele);
               return ;
            }
          }
      }
      console.log(name);
   }
   Big_div.classList.add('display-none');
   let isDivpresent=false;
   for (let i=0;i<cardarr.length;i++)
   {
       cardarr[i].addEventListener('click',()=>{
         music_player_controler();
         if (!isDivpresent)
         {
            Big_div.classList.remove('display-none');
            isDivpresent=true;
         }
         document.querySelector('#search-box').value="";
         Engin.classList.remove('cold-move');
         document.querySelector('.sticky-nav').classList.remove('margin-top-for-nav');
         const h2=document.querySelectorAll('.main-content h2');
         for (h2s of h2)
         {
      
          h2s.style.display="";
         }
         const cards=document.querySelectorAll('.card');
         for (let card of cards)
         {
            card.style.display="";
         }
         callmetosetarr(cardarr[i].getAttribute('id'));
       });
   }

   function music_player_controler()
   {
      controles.classList.add('up');
   }

   // search engin Code ///

   let trigger=document.querySelector('#search-button');
   const Engin=document.querySelector('.search-engin');
   Engin.classList.toggle('search-engin-engage');
   trigger.addEventListener('click',function(){
      Engin.classList.toggle('cold-move');
      document.querySelector('.sticky-nav').classList.toggle('margin-top-for-nav');
       document.querySelector('.main-content').scrollTop='0';
   })
   document.querySelector('#search-button-two').addEventListener('click',function(){
      Engin.classList.toggle('cold-move');
      document.querySelector('.sticky-nav').classList.toggle('margin-top-for-nav');
       document.querySelector('.main-content').scrollTop='0';
   })
   function search_result()
   {
      const input=document.querySelector('#search-box').value.toUpperCase();
      const para=document.querySelectorAll('.card-title');
      const cards=document.querySelectorAll('.card');
      const h2=document.querySelectorAll('.main-content h2');
      for (h2s of h2)
      {
      
         h2s.style.display="none";
      }
      for (let i=0;i<para.length;i++)
      {
         let val=para[i].innerText.toUpperCase();
         if (val)
         {
             if(val.indexOf(input)>-1)
             {
                cards[i].style.display="";
             }
             else 
             {
               cards[i].style.display="none";
             }
         }
      }
   }