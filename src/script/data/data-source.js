
class DataSource {
    //    constructor(onSuccess, onFailed){
    //     this.onSuccess = onSuccess;
    //     this.onFailed = onFailed;
    //     }
    static searchMeal(keyword) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then(Response => {
            return Response.json();
        })
        .then(responseJson =>{
            if(responseJson.meals){
                return Promise.resolve(responseJson.teams);
            }else{
                return Promise.reject(`${keyword} is not found`);
            }
        })
        }
    //     return new Promise((resolve, reject) => {
    //         const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

    //         if (filteredClubs.length) {
    //             // this.onSuccess(filteredClubs);
    //             resolve(filteredClubs);
    //         } else {
    //             // this.onFailed('${keyword} is not found');
    //             reject(`${keyword} is not found`);
    //         }
    //     });
    // }

}

export default DataSource; 
