import React from 'react';
// logo
import LogoImg from '../assets/logo.png';
// nike img
import women from '../assets/img/nike.png';

// import framer hooks
import { useMotionValue, useTransform, motion } from 'framer-motion';

const Card = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    const colors = [
        { value: '#185bca', url:"" },
        { value: '#272425', url:"" },
        { value: '#617453' , url:""},
        { value: '#f2c758',url:"" },
        { value: '#ffffff',url:"" },
    ];

    return (
    // card wrapper
    <div style={{ perspective: 2000 }}>
        {/* card */}
        <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className='w-[426px] min-h-[400 px]  rounded-[30px] border-[4px] border-black px-[40px] py-[24px] cursor-grab relative'
        >

        {/* card logo */}
        <div className='mb-6'>
            <img src={LogoImg} className=' h-[20px] w-[50px]'/>
        </div>

        {/* card title */}
        <h1 className='text-5xl mb-6 font-extrabold'>Nike</h1>


        {/* card subtitle */}
        <p className='max-w-[300px] text-[#000000] mb-6'>
            Your order made our day. We hope that makes yours ! Your support
            means the world, We would love if you share a snap on social media.
            Please tag us.
        </p>


        {/* btn & price wrapper */}
        <div className='flex items-center gap-x-[20px] mb-12 shadow-slate-900 '>
            <button className='bg-[#5082e8]  text-white font-medium py-[8px] px-[20px] rounded-lg'>
            Order Now
            </button>
            <div className='text-[24px] font-bold text-[#000000]'>$135.00</div>
        </div>


        {/* colors */}
        <ul className='flex gap-x-[10px]'>
            {colors.map((color, index) => {
            return (
                <li
                key={index}
                style={{ backgroundColor: color.value }}
                className='w-8 h-8 rounded-full cursor-pointer'
                ></li>
            );
            })}
        </ul>


        {/* card image */}
        <motion.div style={{ x, y, rotateX, rotateY, z: 100000 }} className='absolute top-12 -right-64 w-[620px]'>
            <img src={women} alt='' draggable='false' />
        </motion.div>
        </motion.div>
    </div>
    );
};

export default Card;