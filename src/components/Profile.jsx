import React from 'react';
import cats from '../icons/cats.jpg';

function Profile() {
    return ( <>
        <div className="container px-3 py-2 grid border-1 border-black max-w-lg">
            <div className="info-section w-full grid md:grid-cols-3 content-center ustify-items-center">
                <div className="grid place-content-center ">
                    <img src={cats} className='w-24 h-24 rounded-full' />
                </div>
                <div className='grid col-span-2 j'>
                    <div className='flex py-4 w-full justify-between text-xl'>
                        <span className=''>Username</span>
                        <span className='space-x-6'><span>Edit</span>
                        <i class="fa-solid fa-bars"></i></span>
                    </div>
                    <div className='flex py-4 w-full justify-between text-sm '>
                    <span>47 Posts</span> <span>250 Followers</span> <span>250 Followings</span>
                    </div>
                    <div className='flex pt-2 flex-col '>
                        <span>Kitty Cat</span>
                        <span>Bio - Information</span>
                        <span><i class="fa-solid fa-link"></i>Links </span>
                    </div>
                </div>
            </div>
            <div className="flex py-8 justify-center items-center space-x-4">
                    <img src={cats} className='w-15 h-14 rounded-full' />
                    <img src={cats} className='w-15 h-14 rounded-full' />
                    <img src={cats} className='w-15 h-14 rounded-full' />
            </div>
            <div className='py-4 post-section flex justify-center items-center space-x-10'>
                <span><i class="fa-light fa-border-all"></i> Posts</span>
                <span><i class="fa-sharp fa-regular fa-bookmark"></i> Saved</span>
                <span><i class="fa-solid fa-user"></i> Tagged</span>
            </div>
        </div> 
    </> );
}

export default Profile;