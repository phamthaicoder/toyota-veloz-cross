// // const tokenAccess = 

// fetch('https://ssa-api.toyotavn.com.vn/api/TokenAuth/Authenticate', {
//     method: "POST",
//     headers: new Headers({
//         'Abp.TenantId': '1005',
//         'Content-Type': 'application/json'
//     }),
//     raw: {
//         "userNameOrEmailAddress": "API_LEAD_HAKUHOKO",
//         "password": "XLjm8W#~94"
//     },
//     mode: "no-cors",
// })
// .then(response => response.json())
// .then(result => console.log(result))
// .catch(error => console.log('error', error));

// $.ajax({
//     url: "https://ssa-api.toyotavn.com.vn/api/TokenAuth/Authenticate",
//     type: 'POST',
//     headers: {
//         'Abp.TenantId': '1005',
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         "charset":"utf-8",
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
//     },
//     data: {
//         mode: 'same-origin',
//         raw:
//         {
//             "userNameOrEmailAddress": "API_LEAD",
//             "password": "123123"
//         },
//         mode: 'no-cors'
//     },
//     success: function(res) {
//         console.log(res);
//     }
// })
// let header := w.Header()
// header.Add("Access-Control-Allow-Origin", "*")
// header.Add("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
// header.Add("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     //   mode: 'cors', // no-cors, *cors, same-origin
//     //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     //   credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             // "Access-Control-Allow-Origin": "*",
//             'Abp.TenantId': '1005',
//             'Content-Type': 'application/json',
//         },
//         mode: 'no-cors',
//     //   redirect: 'follow', // manual, *follow, error
//     //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     console.log(url);
//     return response; // parses JSON response into native JavaScript objects
//   }

//   postData('https://ssa-api.toyotavn.com.vn/api/TokenAuth/Authenticate', {
//             mode: 'raw',
//             raw:
//             {
//                 "userNameOrEmailAddress": "API_LEAD_HAKUHOKO",
//                 "password": "XLjm8W#~94"
//             }
//         })
// .then(reponseBis => reponseBis)
// .then(dataBis => console.log(dataBis));;

// function login () {


// let tokenUrl;
// tokenUrl = 'https://ssa-api-test.toyotavn.com.vn/api/TokenAuth/Authenticate';
// fetch(tokenUrl, {
//     method: "POST",
//     headers: new Headers({
//         'Abp.TenantId': '1005',
//         'Content-Type': 'application/json'
//     }),
//     body: {
//         mode: 'raw',
//         raw:
//         {
//             "userNameOrEmailAddress": "API_LEAD",
//             "password": "123123"
//         }
//     }
// })
// .then(response => response.text())
// .then(result => console.log(result))
// .catch(error => console.log('error', error));

// }

// login ()

// axios.post('https://ssa-api.toyotavn.com.vn/api/TokenAuth/Authenticate', {
//     mode: 'raw',
//     raw:
//     {
//         "userNameOrEmailAddress": "API_LEAD",
//         "password": "XLjm8W#~94"
// }
// },

// {
//     headers: {
//          'Abp.TenantId': '1005',
//     'Content-Type': 'application/json'
//         }
   
// })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer TokenAccess");
myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "date": "2022-07-06",
//   "time": "11:02",
//   "model": "Innova",
//   "leadSource": "TMV - Online (Website)",
//   "whenCustomerWantToBuy": "Trong vòng 10 ngày",
//   "dealer": "TPT",
//   "firstName": "Nguyễn Trần",
//   "phoneNumber": "09660212482",
//   "email": "",
//   "username": "",
//   "campaign": ""
// });

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
// //   body: raw,
//   redirect: 'follow'
// };

// fetch("https://ssa-api.toyotavn.com.vn/api/services/app/SalesCustomerWeb/GetListLeadSources", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));




var settings = {
    "url": "https://ssa-api.toyotavn.com.vn/api/services/app/SalesCustomerWeb/GetListLeadSources",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "Bearer TokenAccess"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });