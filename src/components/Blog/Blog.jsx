import React from 'react';

const Blog = () => {
    return (
        <>
            {/* Banner Section */}
            <div className='bg-cyan-200 text-center py-24'>
                <h1 className='font-bold text-2xl'>Blog</h1>
            </div>
            <div className='w-11/12 md:w-8/12 mx-auto my-20'>
                <div className='mb-10'>
                    <h1 className='text-xl font-bold mb-8'>When should you use context API?</h1>
                    <p>
                    In a simple word, Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                    For Example, when we face state management and props drilling problems, context API can solve this problem easily.
                    <br />
                    <br />
                    When you need to tell a child component about a change in the state notified by the principal and root components, we pass state from one component to another until we reach the child component. We need to inform it about the change.
                    <br />
                    <br />
                    The problem with this:
                    At some point, when we end up passing from one to another component and so on. We have a phenomenon known as Prop Drilling. The components we used in between the component that changed the state and the one that needs to know about that doesn't use the props for themself. They are just passing it until it reaches the child component we want to inform.
                    <br />
                    <br />
                    Those poor components end up like a bridge that passes data through React props.
                    The props drilling problem occurs when you pass a prop somewhere down the tree. When a project grows, data passing through props becomes chaotic, making the code more vulnerable and complex. To tackle this problem, we use Context API.

                    </p>
                </div>
                <div className='mb-10'>
                    <h1 className='text-xl font-bold mb-8'>What is a custom hook?</h1>
                    <p>
                    Custom Hooks allow us to access the React ecosystem in terms of hooks, which means we have access to all the known hooks like useState, useMemo, useEffect, etc.
                    <br />
                    <br />
                    Why Should You Use It?
                    When we want to share logic between two JavaScript functions, we extract it to a third function. Both components and Hooks are functions, so this works for them too!
                    Suppose that during development you encounter a situation where you had to use useEffect and useState.
                    <br />
                    <br />
                    After a while, you realize that you need to use the same logic of useEffect and useState in another component as well.
                    You can duplicate code, but probably tell yourself that there must be a better way, So what will you do? Custom Hooks to the rescue.

                    <br />
                    <br />
                    There are several advantages to using Custom Hooks:
                    <br />
                    <br />
                    <li><strong>Reusability</strong> — we can use the same hook again and again, without the need to write it twice.</li>
                    <li><strong>Clean Code</strong> — extracting all the component logic into a hook will provide a cleaner codebase.</li>
                    <li><strong>Maintainability</strong> — easier to maintain. if we need to change the logic of the hook, we only need to change it once.</li>
                    <li><strong>Great Community</strong> — there is a good chance somebody already created the hook you're thinking of. The web is filled with a ton of Custom Hooks! you can find a hook for your need and use it as-is or even better — you can use it as a starting point and make it awesome!</li>
                    </p>
                </div>
                <div className='mb-10'>
                    <h1 className='text-xl font-bold mb-8'>What is useRef?</h1>
                    <p>
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional compThe useRef returns a mutable ref object. This object has a property called .current. 
                    <br />
                    <br />
                    The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. onent.
                    <br />
                    <br />
                    There are two main uses of useRef that are explained in the following sections: Accessing the DOM nodes or React elements and keeping a mutable variable.
                    </p>
                </div>
                <div className='mb-10'>
                    <h1 className='text-xl font-bold mb-8'>What is useMemo?</h1>
                    <p>
                    useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.
                    <br />
                    <br />
                    The useMemo is a hook used in the functional component of react that returns a memoized value. In Computer Science, memoization is a concept used in general when we don't need to recompute the function with a given argument for the next time as it returns the cached result. A memoized function remembers the results of output for a given set of inputs. For example, if there is a function to add two numbers, and we give the parameter as 1 and 2 for the first time the function will add these two numbers and return 3, but if the same inputs come again then we will return the cached value i.e 3 and not compute with the add function again. In react also, we use this concept, whenever in the React component, the state and props do not change the component and the component does not re-render, it shows the same output. The useMemo hook is used to improve performance in our React application.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Blog;