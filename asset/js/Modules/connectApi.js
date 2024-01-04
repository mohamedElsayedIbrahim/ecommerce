function ConnectApi(){
    this.get = async (url)=>{
        let response = await fetch(url);
        return response.json();
    }
}


let connectApi = new ConnectApi();
export default  connectApi;