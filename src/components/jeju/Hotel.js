import {useState,useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function Hotel(){
    const [hotelList,setHotelList]=useState([])
    const [curpage,setCurpage]=useState(1)
    const [totalpage,setTotalpage]=useState(0)
    const [startPage,setStartPage]=useState(0)
    const [endPage,setEndPage]=useState(0)

    useEffect(()=>{
        axios.get("http://localhost/jeju/hotel_list_react", {
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setHotelList(response.data)
        })
    })
    useEffect(()=>{
        axios.get("http://localhost/jeju/hotel_page_react",{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        })
    }, [])
    const pages=(page)=> {
        axios.get("http://localhost/jeju/hotel_list_react",{
            params:{
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setHotelList(response.data)
        })
        axios.get("http://localhost/jeju/hotel_page_react",{
            params:{
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        })
    }
    const pageChange=(page)=>{
        pages(page)
    }
    const pagePrev=()=>{
        pages(startPage-1)
    }
    const pageNext=()=>{
        pages(endPage+1)
    }
    let hotel=hotelList.map((hotel,index)=>
        <li className={index%4==0?'one_quarter first':'one_quarter'}>
            <NavLink to={"/jeju/hotel_detail/"+hotel.hno}>
                <img src={hotel.hotel_image} title={hotel.name} style={{"height":"200px","width":"300px"}}/>
                <span>{hotel.name}</span>
            </NavLink>
        </li>
    )
    let row=[];
    if (startPage>1)
    {
        row.push(<li><a href={"#"} onClick={()=>pagePrev()}>&laquo; Previous</a></li>)
    }
    for(let i=startPage;i<=endPage;i++)
    {
        if (i==curpage)
        {
            row.push(<li className="current"><strong><a href={"#"} onClick={()=>pageChange(i)}>{i}</a></strong></li>)
        }
        else
        {
            row.push(<li><a href={"#"} onClick={()=>pageChange(i)}>{i}</a></li>)
        }
    }
    if(endPage<totalpage)
    {
        row.push(<li><a href={"#"} onClick={()=>pageNext()}>Next &raquo;</a></li>)
    }
    return(
        <div className="wrapper row3">
            <main className="hoc container clear">
                <div className="content">
                    <div id="gallery">
                        <figure>
                            <header className="heading">제주 호텔</header>
                            <ul className="nospace clear">
                                {hotel}
                            </ul>
                        </figure>
                    </div>
                </div>
                <nav className="pagination">
                    <ul>
                        {row}
                    </ul>
                </nav>
            </main>
        </div>
    )
}

export default Hotel