const { default: profileReducer, addPostActionCreator, deletePost } = require("./profile-reducer");
import React from 'react';

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 11 },
        { id: 3, message: 'Blabla', likesCount: 11 },
        { id: 4, message: 'Dada', likesCount: 11 }
    ]
};

it('length of posts should be incremented', () => {
    //1.Test data
    let action = addPostActionCreator("AnnaOrl");

    //2. action
    let newState = profileReducer(state, action);

    //3.expectation
    expect(newState.posts.length).toBe(5);
});


it('message of new post should be correct', () => {
    let action = addPostActionCreator("AnnaOrl");

    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe("AnnaOrl");
});

it('length of posts should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it('after deleting length should not be decremented if it is incorrect', () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});