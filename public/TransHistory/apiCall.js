/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Ding Ming
 * @license MIT
 * 
 */

 class EasyHTTP {
    // Make an http GET request
    get(url) {
       return new Promise((resolve, reject) => {
           fetch(url)
           .then(res => res.json())
           .then(data => resolve(data))
           .catch(err => reject(err))
       })
    };

    post(url,data) {
       return new Promise((resolve, reject) => {
           fetch(url, {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json',
               },
               body: JSON.stringify(data)
           })
           .then(res => res.json())
           .then(data => resolve(data))
           .catch(err => reject(err))
       })
    };

    put(url,data) {
       return new Promise((resolve, reject) => {
           fetch(url, {
               method: 'put'.toUpperCase(),
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify(data)
           })
           .then(res => res.json())
           .then(data => resolve(data))
           .catch(err => reject(err))
       })
    };

    delete(url) {
       return new Promise((resolve, reject) => {
           fetch(url, {
               method: 'delete'.toUpperCase(),
               headers: {
                   'Content-Type': 'application/json'
               },
           })
           .then(res => res.json())
           .then(() => resolve('Deleted')) //Dont send back data
           .catch(err => reject(err))
       })
    };
}