import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className=" bg-black flex flex-col gap-36">
      
     <div className="page1 bg-black  h-full">

     <div className=" videopage1 flex  gap-5 relative  top-16 ">
     <div> 
     <video class="  videoupdown   w-[95%]  "  autoPlay   muted loop playsInline
   src="video1.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
     </div>
     <div className="videopage1text    flex flex-col relative   justify-center items-center w-[1000px] ">
      <div className="  updown  text-4xl  font-bold  text-yellow-500 relative bottom-10">Join Neutron Esports</div>
        <div className="text-3xl  text-white  font-bold relative bottom-6"> Your Gateway to Fair Play and Big Prizes!</div>
        <div className=" text-xl videopage1textpara text-white font-bold w-[600px] relative  ">Discover the ultimate gaming experience with Neutron Esports, where we organize regular BGMI tournaments and scrims. We prioritize fair gameplay, ensuring all participants have an equal opportunity to showcase their skills. Don’t wait and register your team now and become a part of the electrifying esports action at Neutron Esports Organization!
        </div>
    </div>   
   </div>

   </div>

   <div className=" bg-white h-full">

<div className=" page2 flex gap-9  relative  top-16 ">

<div className=" page2ccc   flex flex-col relative bottom-20  gap-20   justify-center items-center w-[1000px] ">
 <div className="  text-animation  text-7xl  font-bold  text-yellow-500 relative     right-20" id="compete">COMPETE</div>
 <div className="   text-animation  text-7xl  font-bold  text-yellow-500 relative   right-5" id="conquer">CONQUER</div>
 <div className="   text-animation  text-7xl  font-bold  text-yellow-500 relative  left-32 " id="celebrate">CELEBRATE</div>


   
</div>   
<div> 
 <img src="https://wstatic-prod.pubg.com/web/live/main_4e11786/img/1d300c0.png"></img>

</div>

</div>

</div>


<div className=" bg-black h-full">

<div className=" flex flex-wrap justify-center items-center   gap-20  relative  bottom-20  ">
 


<div class=" homecard max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img className="  size-10" src="/tournaments.png"></img>
    <a href="/ongoingtour">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Regular Tournaments</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">

Our organization hosts regular tournaments that bring together competitors from all corners.</p>
    <a href="/ongoingtour" class="inline-flex font-medium items-center text-blue-600 hover:underline">
        Visit Tournaments
        <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>


<div class=" homecard max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<img className="  size-10" src="/scrims.png"></img>
    <a href="/scrims">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Regular Scrims</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">

Our organization conducts regular scrims to sharpen skills and foster teamwork. Join us in the pursuit of excellence!</p>
    <a href="/Scrims" class="inline-flex font-medium items-center text-blue-600 hover:underline">
       Visit Scrims
        <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>


<div class=" homecard max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<img className="  size-10" src="/contact.png"></img>
    <a href="/contact">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Support Team</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">

We provide excellent support and are readily accessible for all your needs. Contact us anytime for assistance!</p>
    <a href="/contact" class="inline-flex font-medium items-center text-blue-600 hover:underline">
        Visit Contact
        <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>


<div class=" homecard  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<img className="  size-10" src="/registration.png"></img>
    <a href="/ongoingtour">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Easy Registration</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">

Our tournaments offer hassle-free registration, ensuring a smooth and efficient process for participants. </p>
    <a href="/ongoingtour" class="inline-flex font-medium items-center text-blue-600 hover:underline">
        Visit Tournaments
        <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>
  

  
<div class=" homecard max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<img className="  size-10" src="/fair-play.png"></img>
    <a href="/ongoingtour">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Fare Gaming</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">We prioritize fair gaming, enforcing rules and standards to ensure a level playing field for all participants.</p>
    <a href="/ongoingtour" class="inline-flex font-medium items-center text-blue-600 hover:underline">
        Visit Tournamets
        <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>
  

<div> 

</div>

</div>

</div>

  
   </div>
   </>
  );
}
