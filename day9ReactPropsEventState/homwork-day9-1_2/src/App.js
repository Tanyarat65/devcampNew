import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//เรียกใช้ bootstrap
import PictureCard from './PictureCard.js';
import { Container, Row } from 'react-bootstrap';


function App() {
  const picture =[
    {
        id: 195,
        img:"https://picsum.photos/id/1051/367/267",
        name:"Ales Krivec",
        likeCount: 0,
        commentCount:14

    },
    {
        id: 196,
        img:"https://picsum.photos/200/300?random=2",
        name:"Thorel",
        likeCount: 0,
        commentCount:14
    },
    {
        id: 197,
        img:"https://picsum.photos/200/300?random=1",
        name:"Joshua",
        likeCount: 0,
        commentCount:14
    },
    {
        id: 198,
        img:"https://picsum.photos/200",
        name:"Blur",
        likeCount: 0,
        commentCount:14
    },
    {
        id: 199,
        img:"https://picsum.photos/200",
        name:"Escamilla",
        likeCount: 0,
        commentCount:14
    },
    {
        id: 242,
        img:"https://picsum.photos/id/1012/367/267",
        name:"Scott Webb",
        likeCount: 0,
        commentCount:14
    },
    {
        id: 295,
        img:"https://picsum.photos/id/1014/367/267",
        name:"Oscar Keys",
        likeCount: 0,
        commentCount:14
    },
    {
        id: 395,
        img:"https://picsum.photos/id/1010/367/267",
        name:"Samantha Sophia",
        likeCount: 0,
        commentCount:14
    },
    {
        id: 495,
        img:"https://picsum.photos/id/1011/367/267",
        name:"Roberto Nickson",
        likeCount: 0,
        commentCount:14
    },
    {
        id: 595,
        img:"https://picsum.photos/200/300?random=3",
        name:"Oscar Keys",
        likeCount: 0,
        commentCount:14
    },
    {
        id: 695,
        img:"https://picsum.photos/id/1020/367/267",
        name:"AdamKnox",
        likeCount: 0,
        commentCount:14
    },
    {
        id: 795,
        img:"https://picsum.photos/id/1035/367/267",
        name:"Jared",
        likeCount: 0,
        commentCount:14
    },
    {
        id: 895,
        img:"https://picsum.photos/200/300?random=4",
        name:"Jeramy",
        likeCount: 0,
        commentCount:14
    },
    {
        id: 565,
        img:"https://picsum.photos/200/300?random=5",
        name:"Jeramy",
        likeCount: 0,
        commentCount:14
    },
    {
        id: 566,
        img:"https://picsum.photos/200/300?random=6",
        name:"Jeramy",
        likeCount: 0,
        commentCount:14
    }];

    return(
      <>
      <Container>
        <Row>
        {picture.map((x) => (
          <PictureCard
          key={x.id}
          id={x.id}
          img={x.img}
          name={x.name}
          likeCount={x.likeCount}
          commentCount={x.commentCount}
          />
        ))}
        </Row>
      </Container>
      </>
    );

}

export default App;