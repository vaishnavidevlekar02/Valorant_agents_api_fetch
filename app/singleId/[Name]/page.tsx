
import Footer from '@/app/Footer';
import Navbar from '@/app/Navbar';
import { notFound } from 'next/navigation';

const getDetails = async (Name: string) => {
  const res = await fetch(`https://valorant-api.com/v1/agents/${Name}`);
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data.data;
};

interface Params {
  params: { Name: string };
}

export default async function Page({ params }: Params) {
  const details = await getDetails(params.Name);

  if (!details) {
    notFound();
  }

  return (
    <>
    <Navbar/>
    <main className="min-h-screen  bg-gradient-to-br from-primary to-primary/70 place-items-center ">
      <div>    <h1 className="text-gradient font-bold text-7xl py-10 mt-14 mt-5 sm:mt-0 text-center">VALORANT AGENT</h1></div>
      <div className='py-10 text-white flex flex-col md:flex-row justify-between items-center gap-4'>
        <div className='md:w-1/2 '>
          <img  src={details.fullPortrait} alt={details.displayName} />
        </div> 

        <div className='md:w-1/2 backInRight'>
            
            <h1 className='text-4xl font-bold tracking-[3.22px] mb-5 font-inter text-white display-name  flashingText'> {details.displayName}</h1>
             
            <p className='text-xl mb-12 md:w-3/4 text-justify leading-8'>{details.description}</p>

            <h1 className='text-2xl font-bold mb-10'>Role:</h1>

            {details.role && (
      <div className='text-white h-[120px] w-[124px] px-4 py-6 rounded-lg border border-red shadow-[#5dadec3b] cursor-pointer shadow-xl'>
        <div>
          <img className='w-[70px] mb-12 mx-auto flashingImg' src={details.role.displayIcon} alt={details.role.displayName} />
          <div className='text-2xl font-montserrat mb-5'>
            <h1>{details.role.displayName}</h1>
          </div>
        </div>
      </div>
    )}
           
        </div>
        
      </div>

      <section className='max-w-7xl mx-auto px-5 my-6 text-white'>
        <div className='text-center'>              
          <h2  className='font-mondterrat mb font-medium'>special </h2>
          <h1 className='text-red text-4xl font-bold font-inter mb-16'>Abilities are </h1>
        </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16'>
                {details.abilities.map((ability:any) => (                 
                  <div className='text-white w-[354px] px-5 py-8 rounded-lg border border-red shadow-[#5dadec3b] cursor-pointer shadow-xl'>               
                    <div  key={ability.slot} >
                     <img  className='w-[196px] mb-12 mx-auto flashingImg' src={ability.displayIcon} alt={ability.displayName} />               
                     <h3 className='text-center my-5 text-xl'>{ability.displayName}</h3>
                     <p className='text-justify'>{ability.description}</p>
                  </div>               
                 </div>
            ))}     
          </div>
      </section> <Footer/>
    </main>
   
    
    </>
    
  );
}
