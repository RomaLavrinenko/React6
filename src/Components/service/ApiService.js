import axios from "axios"

export const GetAlbom = {
    handleAlbom: (props) =>{
        axios('https://jsonplaceholder.typicode.com/albums')
        .then((response) => {
            props.setAlbum(response.data)
        }); 
    },
};

export const GetComment = {
    handleComment: (props) =>{
        axios('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
            props.setComments(response.data)
        }); 
    },
};

export const GetTodo = {
    handleTodo: (props) =>{
        axios('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            props.setTodo(response.data)
        }); 
    },
};

export const GetPosts = {
    handlePosts: (props) =>{
        axios(`https://jsonplaceholder.typicode.com/posts/${props}`)
        .then((response) => {
            console.log(response.data);
        }); 
    },
};




