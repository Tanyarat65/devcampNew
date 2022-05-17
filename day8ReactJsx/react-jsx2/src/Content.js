import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';

const picture =[
    {
        id: 195,
        img:"https://picsum.photos/id/1051/367/267",
        name:"Ales Krivec",
        likeCount: 1,
        commentCount:14

    },
    {
        id: 195,
        img:"https://picsum.photos/200/300?random=2",
        name:"Thorel",
        likeCount: 1,
        commentCount:14
    },
    {
        id: 195,
        img:"https://picsum.photos/200/300?random=1",
        name:"Joshua",
        likeCount: 1,
        commentCount:14
    },
    {
        id: 195,
        img:"https://picsum.photos/200",
        name:"Blur",
        likeCount: 1,
        commentCount:14
    },
    {
        id: 195,
        img:"https://picsum.photos/200",
        name:"Escamilla",
        likeCount: 1,
        commentCount:14
    },
    {
        id: 195,
        img:"https://picsum.photos/id/1012/367/267",
        name:"Scott Webb",
        likeCount: 1,
        commentCount:14
    },
    {
        id: 195,
        img:"https://picsum.photos/id/1014/367/267",
        name:"Oscar Keys",
        likeCount: 1,
        commentCount:14
    },
    {
        id: 195,
        img:"https://picsum.photos/id/1010/367/267",
        name:"Samantha Sophia",
        likeCount: 1,
        commentCount:14
    },
    {
        id: 195,
        img:"https://picsum.photos/id/1011/367/267",
        name:"Roberto Nickson",
        likeCount: 1,
        commentCount:14
    },
    {
        id: 195,
        img:"https://picsum.photos/200/300?random=3",
        name:"Oscar Keys",
        likeCount: 1,
        commentCount:14
    },
    {
        id: 195,
        img:"https://picsum.photos/id/1020/367/267",
        name:"AdamKnox",
        likeCount: 1,
        commentCount:14
    },
    {
        id: 195,
        img:"https://picsum.photos/id/1035/367/267",
        name:"Jared",
        likeCount: 1,
        commentCount:14
    },
    {
        id: 195,
        img:"https://picsum.photos/200/300?random=4",
        name:"Jeramy",
        likeCount: 1,
        commentCount:14
    },
    {
        id: 195,
        img:"https://picsum.photos/200/300?random=5",
        name:"Jeramy",
        likeCount: 1,
        commentCount:14
    },
    {
        id: 195,
        img:"https://picsum.photos/200/300?random=6",
        name:"Jeramy",
        likeCount: 1,
        commentCount:14
    }
];

class ContentComponent extends React.Component{
    render () {
        const arrPic = picture.map(x =>
            {return(
            <>
            <Col sm>
               
                <img src={x.img} alt="" />
                <p>{x.name}</p>
                <p>Link : {x.likeCount}</p>
                <p>Comment : {x.commentCount}</p>
               
            </Col>
            </>)}
            );
        return (
        <>
        <Container>
        <Row>
            {arrPic}
        </Row>
        </Container>
        </>
        )
    }
}

export default ContentComponent;