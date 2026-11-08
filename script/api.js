//peticion de la api
const API_URL = 'http://localhost:8080/api/thesaurus/products';
export async function getData() {
    try{
        const response = await fetch(API_URL);
        const data= await response.json();
        return data;
    }catch(error){
        console.error('Error fetching data:', error);
    }
}

export async function serchProducts(name){
    try{
        const encodedName = encodeURIComponent(name);
        const response= await fetch(API_URL+`/search?name=${encodedName}`);
        const data= await response.json();
        return data;
    }catch(error){
        console.error('Error fetching data:', error);
    }
}