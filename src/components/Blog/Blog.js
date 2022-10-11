import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold my-7 text-green-600'>-----Welcome To My Blog-----</h1>
            <div className='w-3/4 mx-auto lg:w-1/2 lg:mx-auto'>
                {/* Question-1  */}
                <div className='border-4 py-3 px-7 mb-7 drop-shadow-lg'>
                    <h1 className='text-2xl font-bold mb-3'>What are the purpose of React Router?</h1>
                    <p className='ml-5 text-justify'>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.</p>
                </div>

                {/* Question-2  */}
                <div className='border-4 py-3 px-7 mb-7 drop-shadow-lg'>
                    <h1 className='text-2xl font-bold mb-3'>How does Context API Works?</h1>
                    <p className='ml-5 text-justify'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                </div>

                {/* Question-3  */}
                <div className='border-4 py-3 px-7 mb-7 drop-shadow-lg'>
                    <h1 className='text-2xl font-bold mb-3'>What are the Use of useRef in ReactJs?</h1>
                    <p className='ml-5 text-justify'>The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react. The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object. This object has a property called current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The current property could be initialized to the passed argument initialValue like useRef(initialValue). The object can persist a value for a full lifetime of the component.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;