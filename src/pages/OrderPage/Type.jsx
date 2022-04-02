import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Products from '../OrderPage/Products';
import ErrorBanner from '../../components/ErrorBanner';
export default function Type({orderType}) {
    const [items,setItems] = useState([]);
    const [error,setError] = useState(false);
    useEffect(()=>{
        loadItems(orderType)
    },[orderType])//orderType이 바뀔때마다 loadItems를 call해줌

    const loadItems = async(orderType)=>{
        try{
            let response = await axios.get(`http://localhost:4000/${orderType}`) //localhost 4000에 요청을 보낼때 orderType도 넣어서 보냄
            setItems(response.data); //해당 product의 정보들이 담겨저서 setItems됨.
        }catch(error){
            setError(true);
        }
    }

    const ItemComponent = orderType ==="products"?Products:null; //itemcomponent는 ordertype이 products이면 products 그렇지않으면 null값을 넣음.
    const optionItems = items.map((item)=>(
        <ItemComponent  //product의 정보들
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        /> 
    ));
    if(error){
        return<ErrorBanner message="에러가 발생했습니다."/>;
    }
  return (
    <div>{optionItems}</div>
  )
}
