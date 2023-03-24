import {useState,useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router";

function HotelDetail(props){
    let{hno}=useParams();
    const [hotelDetail,setHotelDetail]=useState({})
    useEffect(()=>{
        axios.get("http://localhost/jeju/hotel_detail_react",{
            params:{
                hno:hno
            }
        }).then(response=>{
            console.log(response.data)
            setHotelDetail(response.data)
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
                                <img src={hotelDetail.hotel_image} style={{"width":"100%"}}/>
                            </td>
                            <td colSpan={"2"}>{hotelDetail.name}<span style={{"color":"orange"}}>&nbsp;&nbsp;평점:{hotelDetail.star}</span></td>
                        </tr>
                        <tr>
                            <th width={"20%"}>등급</th>
                            <td width={"50%"}>{hotelDetail.grade}</td>
                        </tr>
                        <tr>
                            <th width={"20%"}>주소</th>
                            <td width={"50%"}>{hotelDetail.addr}</td>
                        </tr>
                        <tr>
                            <th width={"20%"}>시간</th>
                            <td width={"50%"}>{hotelDetail.time}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}

export default HotelDetail