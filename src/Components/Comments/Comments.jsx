import { useEffect, useState } from 'react';
import Comment from './Comment';
import {GetComment} from '../service/ApiService'

const Comments = () =>{
    const [comments , setComments] = useState();
    useEffect(() =>{
      GetComment.handleComment({setComments});
      },[])
    return(   
        <div style={{display:"flex", flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {comments?.map((comments) => <Comment key={comments.id} comments={comments}/>)}
        </div>  
    );
}

export default Comments;