import React, { useState } from 'react'
import { FaSearch, FaDownload, FaPlay } from 'react-icons/fa';
import { bannerAssets } from "../../assets/dummydata"

const Banner = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showVideo, setShowVideo] = useState(false);

    const { bannerImage, orbitImages = [], video } = bannerAssets;

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    return (
        <div className='relative'>
            <div className='bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-white py-16 px-4 sm:px-8 relative overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-amber-900/20 to-amber-700/10' />

                <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10'>
                    {/* LEFT CONTENT */}
                    <div className='flex-1 space-y-8 relative md:pr-8 lg:pr-20 text-center md:text-left'>
                        <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-bold leading-tight font-serif drop-shadow-md'>
                            We're Here <br />
                            <span className='text-amber-400 bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text'>
                                For Food & Delivery
                            </span>
                        </h1>

                        <p className='text-lg md:text-lg lg:text-xl font-playfair italic sm:text-xl text-amber-100 max-w-xl opacity-90 mx-auto md:mx-0'>
                            Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
                        </p>

                        <form onSubmit={handleSearch} className='relative max-w-2xl mx-auto md:mx-0 group'>
                            <div className='relative flex items-center bg-amber-900/30 rounded-xl border-2 border-amber-500 shadow-2xl hover:bg-amber-400/50 transition-all duration-300'>
                                <div className='pl-6 pr-3 py-4'>
                                    <FaSearch className='text-xl text-amber-400/80' />
                                </div>
                                <input
                                    type='text'
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder='Discover your next favorite meal...'
                                    className='w-full py-4 pr-6 bg-transparent outline-none placeholder-amber-200/70 text-lg font-medium tracking-wide'
                                />
                                <button type='submit' className='mr-4 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-300 rounded-lg font-semibold text-amber-900 hover:from-amber-300 hover:to-amber-200 transition-all duration-300 shadow-lg hover:shadow-amber-300/20'>
                                    Search
                                </button>
                            </div>
                        </form>
                        <div className='flex flex-wrap gap-4 justify-center md:justify-start mt-6'>
                            <button className='group flex items-center gap-3 bg-amber-800/30 hover:bg-amber-800/50 px-6 py-3 rounded-xl transition-all duration-300 border-2 border-amber-700/50 hover:border-amber-400 backdrop-blur-sm'>
                                <FaDownload className='text-xl text-amber-400 group-hover:animate-bounce' />
                                <span className='text-lg'>Download App</span>
                            </button>

                            <button onClick={() => setShowVideo(true)} className='group flex items-center gap-3 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 px-6 py-3 rounded-xl transition-all duration-300 shadow hover:shadow-amber-300/30'>
                                <FaPlay className='text-xl text-amber-900' />
                                <span className='text-lg text-amber-900 font-semibold'>Watch Video</span>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT IMAGES CONTAINER WITH ORBITAL IMAGES */}
                    <div className='flex-1 relative mt-10 md:mt-0 flex items-center justify-center'>
                        <div className='relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] flex items-center justify-center'>
                            {/* ORBIT RING WITH DISHES (BEHIND MAIN IMAGE) */}
                            <div className='absolute inset-0 w-full h-full animate-orbit pointer-events-none'>
                                {orbitImages.map((img, index) => {
                                    const positions = [
                                        'top-0 left-0 -translate-x-2 -translate-y-2 sm:-translate-x-4 sm:-translate-y-4',
                                        'top-0 right-0 translate-x-2 -translate-y-2 sm:translate-x-4 sm:-translate-y-4',
                                        'bottom-0 left-0 -translate-x-2 translate-y-2 sm:-translate-x-4 sm:translate-y-4',
                                        'bottom-0 right-0 translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4'
                                    ];
                                    return (
                                        <div
                                            key={index}
                                            className={`absolute ${positions[index % positions.length]} w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-2xl border-2 sm:border-4 border-amber-600/40 bg-amber-950/90 p-1 pointer-events-auto hover:scale-110 transition-transform duration-300`}
                                        >
                                            <img
                                                src={img}
                                                alt={`Orbit dish ${index + 1}`}
                                                className='w-full h-full object-cover rounded-full animate-counter-orbit'
                                            />
                                        </div>
                                    );
                                })}
                            </div>

                            {/* MAIN CENTER IMAGE (IN FRONT) */}
                            <div className='relative z-10 w-[240px] h-[240px] sm:w-[310px] sm:h-[310px] md:w-[350px] md:h-[350px] rounded-full p-1.5 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 shadow-[0_15px_40px_rgba(0,0,0,0.6)]'>
                                <img
                                    src={bannerImage}
                                    alt="Banner"
                                    className='w-full h-full rounded-full border-4 sm:border-[6px] border-amber-500/60 object-cover object-top'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* VIDEO MODAL */}
            {showVideo && (
                <div
                    className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4'
                    onClick={() => setShowVideo(false)}
                >
                    <div
                        className='relative w-full max-w-3xl bg-[#2D1B0E] rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/40 p-2 sm:p-4'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowVideo(false)}
                            className='absolute top-3 right-3 z-10 text-amber-300 hover:text-white bg-black/70 hover:bg-black/90 rounded-full w-9 h-9 flex items-center justify-center text-2xl transition-all'
                        >
                            &times;
                        </button>
                        <div className='p-2'>
                            <h3 className='text-xl font-bold text-amber-300 mb-3 text-center'>
                                Experience Foodie-Frenzy
                            </h3>
                            {video ? (
                                <video
                                    src={video}
                                    controls
                                    autoPlay
                                    className='w-full max-h-[65vh] rounded-xl shadow-lg'
                                />
                            ) : (
                                <div className='py-12 text-center text-amber-200'>
                                    <p>Video currently unavailable.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Banner