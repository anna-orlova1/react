import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3 className="pb-2 font-bold">My posts</h3>
            <div className="pb-4">
                <div>
                    <textarea onChange={ onPostChange } ref={newPostElement}
                              value={props.newPostText} className="rounded-xl w-1/3 p-2 focus:outline-none" rows="5"/>
                </div>
                <div>
                    <button className="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 rounded p-2 font-serif bg-gray-200 hover:bg-purple-700" onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;