// Data source: LinkedIn
const data = [
    {'company': 'Microsoft' , 'size': 91259, 'revenue': 60420},
    {'company': 'IBM' , 'size': 400000, 'revenue': 98787},
    {'company': 'Skype' , 'size': 700, 'revenue': 716},
    {'company': 'SAP' , 'size': 48000, 'revenue': 11567},
    {'company': 'Yahoo!' , 'size': 14000 , 'revenue': 6426 },
    {'company': 'eBay' , 'size': 15000, 'revenue': 8700},
  ];
   
  // Create the data 2D-array (vectors) describing the data
  let vectors = new Array();
  for (let i = 0 ; i < data.length ; i++) {
    vectors[i] = [ data[i]['size'] , data[i]['revenue']];
  }
   
  const kmeans = require('node-kmeans');
  kmeans.clusterize(vectors, {k: 4}, (err,res) => {
    if (err) console.error(err);
    else console.log('%o',res);
  });