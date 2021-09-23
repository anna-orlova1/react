import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText );
    }

    return (
        <div className={s.postsBlock}>
            <h3 className="pb-2 font-bold">My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="pb-4">
            <div>
                <Field name="newPostText" component="textarea" className="rounded-xl w-1/3 p-2 focus:outline-none" rows="5"/> 
            </div>

            <div>
                <button className="btn" >Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;