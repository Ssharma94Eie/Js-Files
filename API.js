// import apiClient from "./API.js";
// this.client = apiClient(getCookie('uToken'));

// import moment from 'moment';

// export default function apiClient(token) {
//   return {
//     token: token,

//     getAllMerchantSubscription: function() {
//       let url = global.API_SERVER_URL + 'merchant-subscription';
       
//       var paramObj = {
//         "readIn.userToken" : "token",
//       };
      
//       // var body = "";
//       // if (image) {
//       //   body = new FormData();
//       //   body.append("userInput.groupPic", image);
//       // }

//       var urlParameters = getAsUriParameters(paramObj);
//       return fetch(url + '?' + urlParameters, {
//         credentials: 'include',
//         mode: 'cors',
//         method: 'GET',
//         // body: body,
//       }).then((response) => {
//         if (response.ok) {
//           return response.json();
          
//         }
//         throw new Error("Error");
//       });
//     },



//   };
// }

// function sendReq(url, opts={}, onProgress, onSucc, onError) {
//     var xhr = new XMLHttpRequest();
//     xhr.open(opts.method || 'get', url);
//     for (var k in opts.headers||{})
//         xhr.setRequestHeader(k, opts.headers[k]);
//     xhr.onload = e => onSucc(e.target.responseText);
//     xhr.onerror = onError;
//     if (xhr.upload && onProgress)
//         xhr.upload.onprogress = onProgress; // event.loaded / event.total * 100 ; //event.lengthComputable
//     xhr.send(opts.body);
// }

// function getAsUriParameters(data) {
//    var url = '';
//    for (var prop in data) {
//       url += encodeURIComponent(prop) + '=' + 
//           encodeURIComponent(data[prop]) + '&';
//    }
//    return url.substring(0, url.length - 1)
// }

// function getCookie(name) {
//   var value = "; " + document.cookie;
//   var parts = value.split("; " + name + "=");
//   if (parts.length == 2)
//     return parts
//       .pop()
//       .split(";")
//       .shift();
// }
