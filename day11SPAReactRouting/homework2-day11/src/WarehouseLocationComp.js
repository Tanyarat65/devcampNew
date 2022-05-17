import {Link, useParams} from "react-router-dom";

export const WarehouseLocationComp = () =>{
    const warehouseList =[
        {
            id:'01',
            warehouseName:'yusen1',
            // location:'https://goo.gl/maps/5VcboWobpXRSzfsF9',
            Latitude:'13.59009172904267',
            Longitude:'100.8356486718457',
            telNo:'0847047993',
            faxNo:'022224444',

        },
        {
            id:'02',
            warehouseName:'yusen2',
            // location:'https://goo.gl/maps/5VcboWobpXRSzfsF9',
            Latitude:'13.59009172904267',
            Longitude:'100.8356486718457',
            telNo:'0847047993',
            faxNo:'022224444',

        },
        {
            id:'03',
            warehouseName:'yusen3',
            // location:'https://goo.gl/maps/5VcboWobpXRSzfsF9',
            Latitude:'13.59009172904267',
            Longitude:'100.8356486718457',
            telNo:'0847047993',
            faxNo:'022224444', 

        },
        {
            id:'04',
            warehouseName:'yusen4',
            // location:'https://goo.gl/maps/5VcboWobpXRSzfsF9',
            Latitude:'13.59009172904267',
            Longitude:'100.8356486718457',
            telNo:'0847047993',
            faxNo:'022224444', 

        },
        {
            id:'05',
            warehouseName:'yusen5',
            // location:'https://goo.gl/maps/5VcboWobpXRSzfsF9',
            Latitude:'13.59009172904267',
            Longitude:'100.8356486718457',
            telNo:'0847047993',
            faxNo:'022224444', 

        }]

        return(<>

            <h2>Warehouse List</h2>
            <ul>
                {warehouseList.map(w =><>
                    <li>
                        <Link to={`${w.id}/${w.warehouseName}/${w.Latitude}/${w.Longitude}/${w.telNo}/${w.faxNo}`}>
                            {w.warehouseName}
                        </Link></li>

                </>)}
            </ul>
        </>)
}
export const WarehouseDetail = () => {
    let param2 = useParams();
    console.log(param2)

    return(<>
        <h2>Warehouse Detail  หมายเหตุณ์ใช้ useParams</h2>
        <p>You open Warehouse {param2.id}</p>
        <p>Warehouse Name : 
            {param2.warehouseName}</p>
            {param2.warehouseName} <br/>
            {/* {param2.location} <br/> */}
            {param2.Latitude} <br/>
            {param2.Longitude} <br/>
            {param2.telNo} <br/>
            {param2.faxNo}
    </>)
}
