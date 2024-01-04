import connectApi from "../modules/connectApi.js";
import template from "../modules/templete.js";

(async function(){
if (document.getElementById('product')) {
   let getProductFromApi = await connectApi.get('https://fakestoreapi.com/products?limit=6');
   template.viewProductCard(document.getElementById('content'),getProductFromApi);
}
})();