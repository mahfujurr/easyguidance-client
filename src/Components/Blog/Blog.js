import React from 'react';

const Blog = () => {
    return (
        <div className='  px-5 md:px-10 lg:px-24 text-center pb-12'>
            <h1 className='text-5xl   font-bold pt-5 mb-12'>
                Blog
            </h1>
            <h1 className='my-6 text-3xl font-bold '>
                what is `cors`?
            </h1>
            <p className='font-semibold'>
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
            </p>
            <div class="inline-flex justify-center items-center w-full">
                <hr className="my-8 w-64 h-1 bg-teal-900 rounded border-0 dark:bg-gray-700" />

            </div>
            <h1 className='my-6 text-3xl font-bold'>
                Why are you using `firebase`? What other options do you have to implement authentication?
            </h1>
            <p className='font-semibold'>
            The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints. 

            </p>
            <div class="inline-flex justify-center items-center w-full">
                <hr className="my-8 w-64 h-1 bg-teal-900 rounded border-0 dark:bg-gray-700" />

            </div>
            <h1 className='my-6 text-3xl font-bold'>
                How does the private route work?
            </h1>
            <p className='font-semibold'>
                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated
            </p>
            <div class="inline-flex justify-center items-center w-full">
                <hr className="my-8 w-64 h-1 bg-teal-900 rounded border-0 dark:bg-gray-700" />

            </div>

            <h1 className='my-6 text-3xl font-bold'>
                What is Node? How does Node work?
            </h1>
            <p className='font-semibold'>
                Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

                Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
            </p>
        </div>
    );
};

export default Blog;