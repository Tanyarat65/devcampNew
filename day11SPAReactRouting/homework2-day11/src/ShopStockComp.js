import { Link, useParams, Navigate, useNavigate, useLocation } from 'react-router-dom';


export const ShopStockDetail = () =>{
    let location = useLocation();

    console.log(location);
    return(<>
        <h2>Stock Detail  </h2>
        <p>You open Stock {location.state.x.id}</p> 
        <p>You open Stock {location.state.x.name}</p>
        <p>You open Stock {location.state.x.lot}</p>


    </>)
} 

export const ShopStockComp = () =>{

    const navigate =useNavigate();

    const linkNavigate = (e, x) => {
        e.preventDefault();
        // console.log(item)
        // console.log(x)

        // let y = x;
      navigate('/shopstock/detail',{state: x})
    }

    const shopStockList = [
        {
            id: '01',
            name: 'pa resin',
            lot: '202'
        },
        {
            id: '02',
            name: 'pp resin',
            lot: '204'
        },
        {
            id: '03',
            name: 'sus steel',
            lot: '404'
        },
        {
            id: '04',
            name: 'sus steel 2.4',
            lot: '403'
        },
        {
            id: '05',
            name: 'sus steel 1',
            lot: '402'
        }
    ]

    return(<>
        <h2>Shop Stock List</h2>
        <ul>
            {shopStockList.map(x =>
                <>
                    <li><a href='' onClick={(e)=>linkNavigate(e, x)}>{x.id}</a></li>
                </>)}
        </ul>
    </>);

    
}




// export const ShopStockDetail =()=>{
    

//         const location = useLocation();

    
//     return(<>
//             <h2>Stock Detail  </h2>
//             <p>You open Stock {param.id}</p>
        
//         </>)
// }


