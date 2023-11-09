// 1.Resume 

let resume = {
  
    "Name" : "Robin",
    "Age" : "26",

    "Address" : {
        "Place":"xyx",
        "State":"Kerala",
        "Pin" : "6866"
    },

    "Email" :"rob9n@gmail.com",
    "Github" : "robin123-io",
    "linkedIn" :"robinlinkedin9889",

   "Education" :[ {
       "SSLC" : "St.Joesph HSS",
       "HSE" : "St.Joesph HSS",
       "Degree" :"B-Tech",
       "Stream" : "Mechanical Engineering",
       "Course" : "FSD",
       "Institute" : "GUVI", 
   },],
"Hobbies" : ["Watching Movies","Fishing"],

}

// 2. Iterate for loop, for in , for of ,foreach loops

let json  = {

    "Name" : "Robin",
    "Age" : "26",
    "city": "thdupzha",
  "skills": ["JavaScript", "HTML", "CSS","Redux","React","MongoDB", "NodeJS","Express JS", "DSA" ]

}

let obj = Object.keys(json)
console.log(obj)

// A . forEach

json.skills.forEach((el)=>{
    console.log(el)
   
})

// B . for in


for(let k in json.skills){

    console.log(json.skills[k])
}

// C .for of

for(let k of json.skills){
    console.log(k)
}

// D .for


for(let i=0;i<json.skills.length;i++){
    console.log(json.skills[i])
}




// RECURSION

let sum = 0
let recur = (n)=>{
      

    if(n==0){
        return sum
    }

    sum = sum+n
 return recur(n-1)
//  console.log(n)
//  return sum = sum+n
// console.log(recur(n-1))
// sum = sum+n
}
console.log(recur(10))
// recur(5)