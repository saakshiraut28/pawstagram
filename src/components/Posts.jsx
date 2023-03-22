import React from 'react';
import cats from '../icons/cats.jpg';

function Posts() {
    return ( <>
        <div class="max-w-xs max-h-xs rounded overflow-hidden shadow-lg">
            <div className='flex w-full space-x-2 px-3 py-2 items-center'>
                <img src={cats} className='w-15 h-10 rounded-full' />
                <span className="username">@username</span>
            </div>
            <div className='image w-full '>
                <img src={cats} className='w-full h-64' />
            </div>
            <div className='flex w-full px-3 py-2'>
                <div className="flex w-1/2 space-x-2">
                    <span><i class="fa-regular fa-heart"></i></span>
                    <span><i class="fa-regular fa-comment"></i></span>
                    <span><i class="fa-regular fa-paper-plane"></i></span>
                </div>
                <div className="flex w-1/2 justify-end">
                    <span><i class="fa-regular fa-bookmark"></i></span>
                </div>
            </div>
            <div className='flex px-3'>
                Liked by @saakshiraut and others.
            </div>
            <div className='flex px-2 py-2 items-center space-x-2'>
                <img src={cats} className='w-6 h-6 rounded-full' />
                <input 
                    type="text"
                    className="block p-1 border-b-2 border-black outline-none w-full mb-4 text-xs"
                    name="comment"
                    placeholder="Share your thoughts."/>
            </div>
        </div>
    </> );
}

export default Posts;