# Project 0x01-ES6_promise

This repository contains several projects that demonstrate various concepts related to Promises, Async/Await, and Error Handling using Node.js.

## Project List

1. **0. Keep every promise you make and only make promises you can keep**
   - Description: Returns a Promise using the given prototype function `getResponseFromAPI()`.
   - File: `0-main.js`
   
2. **1. Don't make a promise...if you know you can't keep it**
   - Description: Returns a Promise based on a boolean argument `success`.
   - File: `1-main.js`

3. **2. Catch me if you can!**
   - Description: Appends three handlers to the given function `handleResponseFromAPI(promise)`.
   - File: `2-main.js`

4. **3. Handle multiple successful promises**
   - Description: Collectively resolves all promises and logs `body firstName lastName` to the console.
   - Files: `3-main.js`, `3-all.js`, `utils.js`

5. **4. Simple promise**
   - Description: Returns a resolved promise with an object containing `firstName` and `lastName`.
   - Files: `4-main.js`, `4-user-promise.js`

6. **5. Reject the promises**
   - Description: Returns a Promise rejecting with an Error and a specific message.
   - Files: `5-main.js`, `5-photo-reject.js`

7. **6. Handle multiple promises**
   - Description: Calls two functions and returns an array with the status and value/error of each promise.
   - Files: `6-main.js`, `6-final-user.js`, `4-user-promise.js`, `5-photo-reject.js`

8. **7. Load balancer**
   - Description: Returns the value of the promise that resolves first among two provided promises.
   - Files: `7-main.js`, `7-load_balancer.js`

9. **8. Throw error / try catch**
   - Description: Divides two numbers and throws an error if the denominator is zero.
   - Files: `8-main.js`, `8-try.js`

10. **9. Throw an error**
    - Description: Executes a math function and captures the result or error message.
    - Files: `9-main.js`, `9-try.js`,

