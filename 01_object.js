// const myDetails = {
//     name: "Shivam Mishra",
//     email: "shivam23@navgurukul.org",
//     contactNo: 8299726228,
//     qualification: 12,
//     hobbies: "playing & reading",
//     address: "Amberpur Sidhauli Sitapur Uttar Pradesh"

// }
// myDetails.instraId = "shivam_mishra_16";
// console.log(myDetails);

let obj= {
    name: "shivam mishra",
    role: "Student",
    adress: "Dharamsala",
}
for (const key in obj){{
        const element =obj[key];
       console.log(key, element);
    }
}
