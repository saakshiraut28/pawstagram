import React from 'react';

function Signin() {
    return ( <>
        <div class="bg-grey-lighter min-full flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-4 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Log in</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >Log in</button>

                </div>

                <div class="text-grey-dark mt-6">
                    Don't have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Sign up
                    </a>.
                </div>
            </div>
        </div>
    </> );
}

export default Signin;