const axios = require('axios');
var DeliveryController=require('../controllers/Delivery-controller');

//const  DeliveryManHome = require('../../client/src/components/pages/DeliveryManIndex');
const Map=require('./MapImage')

function GetLatLongFromAddress(address) {
    return new Promise((resolve, reject) => {
        //const address = "מנחם בגין 77, פתח תקווה"
        const location = address + ", ישראל";
        const KEY = '5rRMSAOyU11mGgkbAlWk3C1y1y0nT2Gv';
        axios({
            method: "post", url: "http://www.mapquestapi.com/geocoding/v1/address", params: {
                location: location,
                key: KEY,
                maxResults: 1,
                options: { thumbMaps: false }
            }
        }).
            then((res) => {
                resolve([res.data.results[0].locations[0].latLng.lat, res.data.results[0].locations[0].latLng.lng]);
                //   return res.data
                // console.log([res.data.results[0].locations[0].latLng.lat,res.data.results[0].locations[0].latLng.lng]);
               // return ([res.data.results[0].locations[0].latLng, res.data.results[0].locations[0].latLng])
            }).catch(e => reject(e)); //console.log(e));
    })

}


 function adressListToCeordinate(address)
 {
    const forLoop = async _ => {
    //    address = ["בן גוריון 16, רמת גן", "מנחם בגין 77, פתח תקווה","אלנבי 5,תל אביב","דוד אלעזר 36, יבנה"];
        let ceordinateList = [];
        for (let i = 0; i < address.length; i++) {
            const fruit = address[i]
            const numFruit = await GetLatLongFromAddress(fruit)
            ceordinateList.push(numFruit);
        }
        return ceordinateList;
    }
    return new Promise((resolve, reject) => {
        forLoop().then(res=>{
            console.log(res)
            resolve(res);
        });
    });
}
    
module.exports = {
Kmeans:function (req, resp)
{
    const kmeans = require('node-kmeans');
    const k=req.body.k;
    const addresss=req.body.addresss;
    const id=req.body.id;
    newVector=[]//קאורדינטה ומספר הקבוצה שלה
    adressListToCeordinate(addresss).then(vector=>{
        let AddressAndCeo=[];
        for(let j=0;j<addresss.length;j++)
            AddressAndCeo.push([id[j],addresss[j],vector[j]])
    kmeans.clusterize(vector, { k: k }, (err, res) => {
        if (err){ console.error(err); return err;}
        else{ 
            console.log(res);
            for (let i = 0; i < k; i++) {
                for(let j=0;j<res[i].clusterInd.length;j++)
                    newVector.push([AddressAndCeo[res[i].clusterInd[j]],[i]])
            }
            const mapUrl=Map.DownloadHomePageMap(newVector,k);
            console.log(mapUrl);
            resp.status(200).send(mapUrl);
    }
    });
    //resp.writeHead(200, "ok", { 'Content-Type': 'text/plain'});
    //resp.send({1:1});
   // res.send(newVector);
})
},
Kmeans_save:function (req, resp)
{
    const kmeans = require('node-kmeans');
    const k=req.body.k;
    const date=req.body.date;
    const deliveryManList=req.body.deliveryManID;
    const addresss=req.body.addresss;
    const adult_id=req.body.adult_id;
    const city=req.body.city;
    newVector=[]//קאורדינטה ומספר הקבוצה שלה
    adressListToCeordinate(addresss).then(vector=>{
        let AddressAndCeo=[];
        for(let j=0;j<addresss.length;j++)
            AddressAndCeo.push([adult_id[j],addresss[j],vector[j]/**/,city[j]/**/])
    kmeans.clusterize(vector, { k: k }, (err, res) => {
        if (err){ console.error(err); return err;}
        else{ 
            console.log(res);
            for (let i = 0; i < k; i++) {
                for(let j=0;j<res[i].clusterInd.length;j++)
                {
                    newVector.push([AddressAndCeo[res[i].clusterInd[j]],[i]])
                    const num={
                        date: date,
                        myDeliveryMan:deliveryManList[i],
                        myAdult: AddressAndCeo[res[i].clusterInd[j]][0],
                        city:AddressAndCeo[res[i].clusterInd[j]][3],//
                        areaGroup: i,
                        isDone:false
        
                    };
                    DeliveryController.createCrud(num);
                    console.log(date)
                }
            
                }

            const mapUrl=Map.DownloadHomePageMap(newVector,k);
            console.log(mapUrl);
            resp.status(200).send(mapUrl);
    }
    });
    //resp.writeHead(200, "ok", { 'Content-Type': 'text/plain'});
    //resp.send({1:1});
   // res.send(newVector);
})
},
getMapDeliveryMan:function(req, res)
{
    const addressAndIsDone=[];
    const deliveries =req.body.deliveries;
    console.log("deliveries")
    console.log(deliveries)
    deliveries.forEach(function (delivery, i) {
        addressAndIsDone.push([delivery.adult.street+" "+delivery.adult.buildingNumber+" ,"+delivery.adult.city,delivery.isDone])
     });
     console.log(addressAndIsDone);
    const mapUrl=Map.DownloadMap(addressAndIsDone);
    console.log(mapUrl);
    res.status(200).send(mapUrl);
}
}

//Kmeans();
