"use client";
import { useEffect, useState } from "react";
import getData from "../app/lib/actions/Data";
import AgentCard from "./components/AgentCard";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Navbar from "./Navbar";
//import {assets} from "../app/Imgpho/assests"

export default function Home() {
  const [agents, setAgents] = useState([]);

 // console.log("Path to valorantgrp image:", assets.valorantgrp);


  useEffect(() => {
    getData().then((data) => {
      setAgents(data.data);
    }).catch((error) => {
      console.error('Error fetching agents:', error);
    });
  }, []);

  return (
    <>
    <Navbar/>
    
    
    <main className=" min-h-screen bg-gradient-to-br from-primary to-primary/70 place-items-center p-10 justify-center">
       {/* <Navbar/> */}
      <div className=' py-10 text-white flex flex-col md:flex-row justify-between items-center gap-4 mt-20 mb-20 '>
        <div className='md:w-1/2 mt-12 mb-12'>
          {/* //<img  src="https://www.talkesport.com/wp-content/uploads/valorant-agents-1.png" alt="" className="w-full h-auto" /> */}
          <img 
          src="/valorant-agents-1.png"
           alt="Valorant Agents" 
           className= 'flashingImage' 
           />

        </div> 

        <div className='md:w-1/2 mt-12 mb-12 backInRight  '>

        <h1 className="text-gradient font-bold text-5xl display-name mb-14 mt-5 sm:mt-0 text-center flashingText">VALORANT AGENTS</h1>
            
           
        </div>
        
      </div>

      <div className="text-white font-bold text-3xl text-center mb-12"> <h1>AGENTS:</h1></div>
     
        
      
    <div className="container mx-auto">
      {/* <h1 className="text-gradient font-bold text-7xl  mb-14 mt-5 sm:mt-0 text-center">VALORANT AGENTS</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-4">
        {agents.map((agent: any) => (
          <AgentCard key={agent.uuid} agent={agent} />
        ))}
      </div>
    </div>
   
  </main>
   <Footer/>
    </>
   
  );
}

