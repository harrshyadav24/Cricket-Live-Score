// API Key
// 283ec25b-8962-4118-b58e-501f688ad71f

async function getMatchData(){
    return await fetch("https://api.cricapi.com/v1/series_info?apikey=283ec25b-8962-4118-b58e-501f688ad71f&offset=0&id=76ae85e2-88e5-4e99-83e4-5f352108aebc")
    .then(data => data.json())
    .then(data => {
        if (data.status != "success") {
            return;
        } 
        const matchList = data.data.matchList
        if (!matchList) {
            return [];
        }
        const relevantData = matchList.map(match => `${match.name}, ${match.status}`)
        // const relevantData = matchList.filter(match => match.series_id == "76ae85e2-88e5-4e99-83e4-5f352108aebc").map(match => `${match.name}, ${match.status}`)

        console.log(relevantData)

        document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join('')

        return relevantData;
    })
    .catch(e => console.log(e));
}

getMatchData();

// data.matchList[0].name