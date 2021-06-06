import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item + ' p-6 max-w-sm mb-2 bg-white rounded-xl shadow-md flex items-center space-x-4'}>
      <img src='https://place-hold.it/100x100' />
      <div>
        <div>
          {props.message}
        </div>
        <div>
          <span>like</span> {props.likesCount}
        </div>
      </div>
    </div>
  )
}

export default Post;