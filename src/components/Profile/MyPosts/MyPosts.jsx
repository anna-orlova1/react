import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const MyPosts = React.memo(props => {
    console.log("Yo baby");
    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

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
});

const maxLength10=maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="pb-4">
            <div>
                <Field 
                name="newPostText" 
                placeholder={"Post messages"}
                component={Textarea} 
                className="rounded-xl w-1/3 p-2 focus:outline-none" 
                rows="5"
                validate={[required, maxLength10]}
                /> 
            </div>

            <div>
                <button className="btn" >Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;