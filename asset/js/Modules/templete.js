function Template(){
    this.viewProductCard= (element,data)=>{
        let cartoona=''
        for (const iterator of data) {
            let {image,title,price,id} =iterator;
            cartoona+=`
            <div class="col-md-4">
            <div class="bg-secondary-subtle rounded-2">

                <div>
                    <img src="${image}" alt="product" class="w-100">
                </div>
                <div class="p-3">
                    <div class="my-2">
                        <h3 class="text-primary text-capitalize">${title.slice(0,20)}...</h3>
                    </div>
                    <div class="d-flex justify-content-between">
                        <span class="fs-3">${price}$</span>
                        <button data-id=${id} class="btn btn-dark">
                            <i class="fa-solid fa-cart-plus fa-2x"></i>
                        </button>
                    </div>
                </div>

                </div>

            </div>
            `;
        }

        element.innerHTML = cartoona;
    }
}

let template = new Template();


export default template;