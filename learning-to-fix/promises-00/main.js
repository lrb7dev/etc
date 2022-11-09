//creating a Promise
const myPromise = new Promise((resolve, reject) => {

    //think that this value is a external value that you receive
    const externalValue = 'lrb7dev' 

    //condition
    if(externalValue === 'lrb7dev') {
        resolve(`The user ${externalValue} was found!`)
    } else {
        reject(`The user ${externalValue} wasn't found!`)
    }

})

//the response of RESOLVE or REJECT
/**
 * In this case, the response be in RESOLVE, 'cause was successful
*/
myPromise.then((dataResponse) => {
    console.log("1° example, returns RESOLVE: " + dataResponse)
})

//=====================================================================

//this text appears first because the Promise above not return the response yet!
console.log('this text appears first because the Promise above not return the response yet! \n [ASYNC FORM --> PROMISE]')

//chaining of 'thens'...
//creating a Promise
const myPromise2 = new Promise((resolve, reject) => {

    //think that this value is a external value that you receive
    const externalValue = 'lrb7dev'

    //condition
    if (externalValue === 'lrb7dev') {
        resolve(`The user ${externalValue} was found!`)
    } else {
        reject(`The user ${externalValue} wasn't found!`)
    }

})

myPromise2.then((dataResponse) => {
    //to parse the data to another '.then()' we need to use 'return'
    //returns the value with uppercase
    return dataResponse.toUpperCase()
}).then((dataWithUpperCase) => {
    //show the result
    console.log("2° example, CHAINING OF THENS: " + dataWithUpperCase)
    //creating a new const
    const addString = ' --> An additional string <--'
    //concact the variables
    dataWithUpperCase += addString
    //returns the result
    return dataWithUpperCase
}).then((modifiedData) => {
    //shows the new result
    console.log( "2° example, CHAINING OF THENS: " + modifiedData)
})


//========== catch treatment =============
//creating a Promise
const myPromise3 = new Promise((resolve, reject) => {

    //think that this value is a external value that you receive
    const externalValue = 'another_user_name'

    //condition
    if (externalValue === 'lrb7dev') {
        resolve(`The user ${externalValue} was found!`)
    } else {
        reject(`The user ${externalValue} wasn't found!`)
    }

})

//the response of RESOLVE or REJECT
/**
 * In this case, the response be in RESOLVE, 'cause was successful
*/
myPromise3.then((dataResponse) => {
    console.log(dataResponse)
}).catch((err) => {
    console.log('3° example, CATCH TREATMENT: ')
    console.log('3° example, ERROR: ' + err)
})

//=========================================================

//resolving a lot of promises together [WITH .all()]
//when all Promises it's resolved it returns
const resp1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resp1 - Ok [2sec later...]')
    }, 2000)
})

const resp2 = new Promise((resolve, reject) => {
    resolve('resp2 - Ok')
})

const resp3 = new Promise((resolve, reject) => {
    resolve('resp3 - Ok')
})

const resolveAll = Promise.all([resp1, resp2, resp3]).then((data) => {
    console.log('4° example, RESOLVING A LOT OF PROMISES TOGETHER - whith .all(): ', data)
})

//==========================================

//resolving a lot of promises together [WITH .race()]
// the first that be resolved will be returned
const resp4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resp4 - Ok [2sec later...]')
    }, 2000)
})

const resp5 = new Promise((resolve, reject) => {
    resolve('resp5 - Ok')
})

const resp6 = new Promise((resolve, reject) => {
    resolve('resp6 - Ok')
})

const resolveAllWithRace = Promise.race([resp4, resp5, resp6]).then((data) => {
    console.log('5° example, RESOLVING A LOT OF PROMISES TOGETHER - with .race():\n ', data)
})

//================== FETCH REQUEST =================
//fetch API
//NOTE: fetch() <--- returns a Promise

const gitUserName = 'lrb7dev'

//the requisition
fetch(`https://api.github.com/users/${gitUserName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    },
}).then((response) => {
    console.log('6° example, FETCH REQUEST: ', typeof response)
    console.log('6° example, FETCH REQUEST:\n ', response)
    return response.json() //to work easily with the data
}).then(
    (data) => {
        console.log('6° example, FETCH REQUEST (json):\n ', data)
        //then... we can work with the data
        console.log(`
            6° example, FETCH REQUEST (working with the data):
            avatar url : ${data.avatar_url}
            name: ${data.name}
            public repositories: ${data.public_repos}
            following: ${data.following}
            last name: ${dataa.lasst_name}
        `)
    }
).catch((err) => {
    console.log(`ERROR: 6° example, FETCH REQUEST (working with the data): ${err}`)
})