import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import SelectAdultComponnent from './selectAdultComponnent'
import SelectDeliveryManComponnent from './SelectDeliveryManComponnent'
import MapComponnent from './MapComponnent'
import Axios from 'axios';
import useStateWithCallback from 'use-state-with-callback';
import SelectDateAndCityComponnent from './selectDateAndCityComponnent';

const Controler = () => {

    const [date, setDate] = useState(new Date());

    const allAdults = [{ a: "a" }, { a: "b" }]
    const [adults, setAdults] = useState([]);
    const [selectAdults, setSelectAdults] = useState([]);
   
    const allDeliveryMans = [{ a: "a" }, { a: "b" }]
    const [deliveryMans,setDeliveryMans] = useState([]);
    const [selectdeliveryMans, setSelectdeliveryMans] = useState([]);

    const[isSaveAdult,setIsSaveAdult]=useState(false);
    const[isSaveDeliveryMan,setIsSaveDeliveryMan]=useState(false);

    const[mapURL,setmapURL]=useState("");


    const addAdult = (item) => {
        var array = [...adults]; // make a separate copy of the array
        var index = array.indexOf(item)
        if (index !== -1) {
          array.splice(index, 1);
          setAdults(array)
        }
        setSelectAdults([...selectAdults,item]);
    }
    const removeAdult = (item) => {
        var array = [...selectAdults]; // make a separate copy of the array
        var index = array.indexOf(item)
        if (index !== -1) {
          array.splice(index, 1);
          setSelectAdults(array)
        }
        setAdults([...adults,item]);
    }
    const addDeliveryMan = (item) => {
        var array = [...deliveryMans]; // make a separate copy of the array
        var index = array.indexOf(item)
        if (index !== -1) {
          array.splice(index, 1);
          setDeliveryMans(array)
        }
        setSelectdeliveryMans([...selectdeliveryMans,item]);
    }
    const removeDeliveryMan = (item) => {
        var array = [...selectdeliveryMans]; // make a separate copy of the array
        var index = array.indexOf(item)
        if (index !== -1) {
          array.splice(index, 1);
          setSelectdeliveryMans(array)
        }
        setDeliveryMans([...deliveryMans,item]);
    }
    const getAllAdults=()=>
    {
    Axios.get('http://localhost:3333/adult/fetchAllAdults').
    then(res=>{
        setAdults(res.data);
        setSelectAdults([]);
        getAllDeliveryMans();
    });
    }
    const getAllAdultsByCity=(city)=>
    {
    Axios.post('http://localhost:3333/adult/fetchAllAdultsByCity',{city}).
    then(res=>{
        setAdults(res.data);
        setSelectAdults([]);
        getAllDeliveryMans();
    });
    }
    const getAllDeliveryMans=()=>
    {
    Axios.get('http://localhost:3333/deliveryMan/fetchAllDeliveryMans').
    then(res=>{
        setDeliveryMans(res.data);
        setSelectdeliveryMans([]);
    });
    }
    const saveAdult=()=>
    {
      setIsSaveAdult(true);
    }
    const saveDeliveryMan=()=>
    {
      setIsSaveDeliveryMan(true)
    }
    const creatDelivery=()=>
    {
      setIsSaveDeliveryMan(false)
      console.log("date"+date);
      setIsSaveAdult(false);
      const numOfDeliveryMan=selectdeliveryMans.length;
      const adultsS=selectAdults;
      let addresss=[];
      let id=[];
      adultsS.forEach(function (adult, i) {
        addresss.push( adult.street + " " + adult.buildingNumber + ", " + adult.city);
      });
      adultsS.forEach(function (adult, i) {
        id.push(adult.id);
      });
      Axios.post('http://localhost:3333/tools/Kmeans',{k:numOfDeliveryMan,addresss:addresss,id:id}).
      then(res=>{
        setmapURL(res.data)
    });

    }
    const saveDelivery=()=>
    {
      setIsSaveDeliveryMan(false)
      setIsSaveAdult(false);
      const numOfDeliveryMan=selectdeliveryMans.length;
      const adultsS=selectAdults;
      let addresss=[];
      let adult_id=[];
      let city=[];
      adultsS.forEach(function (adult, i) {
        addresss.push( adult.street + " " + adult.buildingNumber + ", " + adult.city)
      });
      adultsS.forEach(function (adult, i) {
        adult_id.push(adult.id);
        city.push(adult.city);
      });
      let deliveryManID=[];
      selectdeliveryMans.forEach(function (deliveryMan, i) {
        deliveryManID.push(deliveryMan.id)
      });
      console.log(date);
      Axios.post('http://localhost:3333/tools/Kmeans_save',{k:numOfDeliveryMan,addresss:addresss,adult_id:adult_id,deliveryManID:deliveryManID,date:date,city:city}).
      then(res=>{
        console.log(res.data);
    });
    }
    React.useEffect(() => {
      if (isSaveAdult && isSaveDeliveryMan)
        creatDelivery();
    }, [isSaveAdult,isSaveDeliveryMan]);

    const printDate=()=>
    {
      console.log(date);
    }
    return (
        <div>
         <SelectDateAndCityComponnent setDate={setDate} getAllAdultsByCity={getAllAdultsByCity}/>
         <SelectAdultComponnent adults={adults} selectAdults={selectAdults} addAdult={addAdult} removeAdult={removeAdult} saveAdult={saveAdult}/>
         <SelectDeliveryManComponnent deliveryMans={deliveryMans} selectdeliveryMans={selectdeliveryMans} addDeliveryMan={addDeliveryMan} removeDeliveryMan={removeDeliveryMan} saveDeliveryMan={saveDeliveryMan}/>
         <MapComponnent mapURL={mapURL} saveDelivery={saveDelivery}/>
        </div>
    )
}

export default Controler
