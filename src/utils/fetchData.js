export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2096513b92msh31962324c099fccp1abbb1jsned02b7cd892a",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};





export const fetchData = async (url,options) =>{
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}