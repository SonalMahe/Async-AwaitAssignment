//Part 1: Refactoring Your Own Promise with Async/Await  -
//Study Energy Level//-


const checkStudyEnergy = () => {
    return new Promise((resolve, reject) => {
        let energyLevel = Math.random();

        if (energyLevel > 0.5) {
            resolve("Energy level is high! Ready to study.");
        } else {
            reject("Energy level is low. Take a break first.")
        }
    });
}

// const output = async () => {
//     try {
//         const message = await checkStudyEnergy();
//         console.log(message);
//     } catch (error) {
//         console.log(error);
//     }
// };
// output();

// checkStudyEnergy()
//     .then((message) => {
//             console.log(message);
//         })

//    .catch((error) => {
//     console.log("Error:" + error);
// });



// // part 2.Fetching Data from an API- (using country details API)-

// const fetchCountryData = async () => {
//     try {
//         const response = await fetch(`https://restcountries.com/v3.1/name/${"Hungary"}`);
//         if (!response.ok) {
//             throw new Error("Response was not ok !")
//         }

//         const data = await response.json();
//         console.log("Country:-", data[0].name.official);
//         console.log("Capital:- ", data[0].capital);
//         console.log("Region:-", data[0].region)

//     } catch (error) {
//         console.log(error);

//     }
// };
// fetchCountryData();



// // const result = await (`https://restcountries.com/v3.1/name/${countryname}`)
// //     .then((response) => response.json())
// //     .then((data) => {
// //         console.log(" 🌍 Country :-" , data[0].name.official)
// //         console.log(" 🏛️ Capital :-", data[0].capital[0])
// //         console.log(" 🌐 Region :-", data[0].region)
// //     })
// //     .catch((error) => {
// //         console.log('error fetching data:', error);
// //     })
// // };

// // fetchCountryData("sweden");
// // fetchCountryData("italy");
// // fetchCountryData("france");




//Part3.Combining the Promises and Fetch with Async/Await  -
const runStudyandFetch = async () => {
    try {
        const message = await checkStudyEnergy();
        console.log(message);
        
        const response = await fetch((`https://restcountries.com/v3.1/name/${"Hungary"}`) );
        const data = await response.json();
        console.log("Country:- ", data[0].name.official);
        console.log("Capital:- ", data[0].capital);

    } catch (error) {
        console.log("Error fetching data", error);
    }
};
runStudyandFetch();
