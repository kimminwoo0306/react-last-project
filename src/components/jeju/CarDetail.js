import {useState,useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router";

function CarDetail(props){
    let{no}=useParams();
    const [carDetail,setCarDetail]=useState({})
    useEffect(()=>{
        axios.get("http://localhost/jeju/car_detail_react",{
            params:{
                no:no
            }
        }).then(response=>{
            console.log(response.data)
            setCarDetail(response.data)
        })
    })
    return (
        <div className="wrapper row3">
            <main className="hoc container clear">
                <div className="content three_quarter first">
                    <table className={"table"}>
                        <tbody>
                        <tr>
                            <td width={"30%"} rowSpan={"7"}>
                                <img src={carDetail.car_image} style={{"width":"100%"}}/>
                            </td>
                            <td colSpan={"2"}>{carDetail.car_name}</td>
                        </tr>
                        <tr>
                            <th width={"20%"}>가격</th>
                            <td width={"50%"}>{carDetail.car_price}</td>
                        </tr>
                        <tr>
                            <th width={"20%"}>타입</th>
                            <td width={"50%"}>{carDetail.car_type}</td>
                        </tr>
                        <tr>
                            <th width={"20%"}>차량 옵션</th>
                            <td width={"50%"}>{carDetail.car_option1}</td>
                        </tr>
                        <tr>
                            <th width={"20%"}>차량 옵션</th>
                            <td width={"50%"}>{carDetail.car_option2}</td>
                        </tr>
                        <tr>
                            <th width={"20%"}>수량</th>
                            <td width={"50%"}>{carDetail.account}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}

export default CarDetail