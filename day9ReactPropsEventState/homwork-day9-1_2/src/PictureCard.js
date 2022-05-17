import React,{useState} from 'react';
import {Container, Row, Col } from 'react-bootstrap';

const PictureCard = (props) => {
    const [like, setLike] = useState(props.likeCount);

    const onclickLike = () =>{
        setLike(like+1);
        console.log(like);
    };


    const [comment, setComment] = useState(props.commentCount);

    const commentCount = (ev) =>{
        if(ev.key === 'Enter'){
        setComment(comment+1);
        alert(ev.target.value);}
    };
    console.log(comment);



// console.log(props);
    return(
        <>
            
            
                <Col sm className='size'>
                    <p>ID: {props.id}</p>
                    <img src={props.img} alt="" />
                    <p>Creat By: {props.name}</p>
                    {like > 0 && <p>Like: {like}</p>}
                    <p>Comment: {comment}</p>
                    <input type="button" value="Like" onClick={onclickLike} /><br/>
                    <input type="text" onKeyDown={commentCount} />
                    {/* <input type="text" /> */}
                </Col>
            
        

        </>
    );
};



export default PictureCard;