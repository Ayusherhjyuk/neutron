import React from 'react'
<link rel="stylesheet" href="style.css" />

const Footer = () => {

const currentyear= new Date().getFullYear();

  return (
    <footer className='bg-black text-cyan-50 flex items-center justify-center px-4 h-10' > 
        <p>Copyright&copy; {currentyear} Neutron Esports-- All Copyrights reserved</p>

        <div className=' social  flex gap-3 relative left-[300px]'> 
        <div>Join Us--</div>  
        < a href='https://www.instagram.com/neutron_esports_?igsh=MWg2dWMzOTNxNzJhMg=='><div className=' size-7'><img src="/instagram.png" alt="" /></div></a>

       <a href="https://m.youtube.com/@Neutron_esports/streams"><div className=' size-7'><img src="/youtube.png" alt="" /></div></a>

        < a href='https://discord.com/invite/EH8GH3XNY4?fbclid=PAZXh0bgNhZW0CMTEAAaZbRwN_88cecpSYhcCc0KetNNusLq5F6tdU5ao50T4oyHIvFpooXScZB20_aem_Zp9bs6-Z5DFAGHyOY-CTMg'><div className='size-7'><img src="/discord.png" alt="" /></div></a>
        </div>
        </footer>
  )
}


export default Footer