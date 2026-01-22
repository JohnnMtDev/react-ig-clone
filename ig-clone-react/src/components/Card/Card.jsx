import React from 'react'
import data from './data.json'
import './card-style.css'




export const Card = () => {
// icons like dislike
    const likeIcon = <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M725.333333 192c-89.6 0-168.533333 44.8-213.333333 115.2C467.2 236.8 388.266667 192 298.666667 192 157.866667 192 42.666667 307.2 42.666667 448c0 253.866667 469.333333 512 469.333333 512s469.333333-256 469.333333-512c0-140.8-115.2-256-256-256z" fill="#F44336"></path></g></svg>


    const dislikeIcon = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.609 5.49953V15.6595C15.609 16.0595 15.489 16.4495 15.269 16.7795L12.539 20.8395C12.109 21.4895 11.039 21.9495 10.129 21.6095C9.14904 21.2795 8.49904 20.1795 8.70904 19.1995L9.22904 15.9295C9.26904 15.6295 9.18904 15.3595 9.01904 15.1495C8.84904 14.9595 8.59904 14.8395 8.32904 14.8395H4.21904C3.42904 14.8395 2.74904 14.5195 2.34904 13.9595C1.96904 13.4195 1.89904 12.7195 2.14904 12.0095L4.60904 4.51953C4.91904 3.27953 6.26904 2.26953 7.60904 2.26953H11.509C12.179 2.26953 13.119 2.49953 13.549 2.92953L14.829 3.91953C15.319 4.29953 15.609 4.87953 15.609 5.49953Z" fill="#292D32"></path> <path d="M18.7894 17.6084H19.8194C21.3694 17.6084 21.9994 17.0084 21.9994 15.5284V5.47844C21.9994 3.99844 21.3694 3.39844 19.8194 3.39844H18.7894C17.2394 3.39844 16.6094 3.99844 16.6094 5.47844V15.5384C16.6094 17.0084 17.2394 17.6084 18.7894 17.6084Z" fill="#292D32"></path> </g></svg>
//
            
    return (

        <div className='grid'>
            {data.map(item => (

                <div key={item.id} className="card">    
                    <img
                        src={item.url} 
                        alt={item.title}
                    />
                   

                <div className="buttons">
                        <div className='like'>
                            <button>{likeIcon}</button>
                            {item.likes}
                        </div>

                        <div className='dislike'>
                            {item.dislikes}
                            <button>{dislikeIcon}</button>
                        </div>
                </div>
        </div>
            ))}
        </div>
    )
}
