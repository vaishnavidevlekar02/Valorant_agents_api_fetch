import Link from 'next/link';
import React from 'react';
import {Slide,Fade} from 'react-awesome-reveal';


const AgentCard = ({ agent }) => {
  return (
    <div className="relative group w-full max-w-[300px] h-[350px] rounded-lg overflow-hidden shadow-lg mx-auto border-2 border-black-300 transition-transform duration-300 card-hover">
      <img className="w-full h-full object-cover" src={agent.fullPortrait} alt={agent.displayName} />
      <div className="absolute left-0 top-0 w-full h-full bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-6 justify-center p-4">
        <Slide cascade>
          <h2 className="text-white text-center text-xl font-bold">{agent.displayName}</h2>
          <Fade cascade damping={0.05}>
            <p className="text-white text-center mt-2">{agent.description}</p>
          </Fade>
          <div>
            <Link href={`/singleId/${agent.uuid}`}><button className="border text-white border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">View More Details</button></Link>
                         
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default AgentCard;


