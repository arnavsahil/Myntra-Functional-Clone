let bagItemObjects;
onLoad();
function onLoad(){
    loadBagItemObjects();
    displayBagItems();
}

function loadBagItemObjects(){
    console.log(bagItems);
    bagItemObjects = bagItems.map(itemId => {
        for(let i=0;i<bagItems.length;i++){
            if(itemId == items[i].id){
                return items[i];
            }
        }
    })
    console.log(bagItemObjects);
}

function displayBagItems(){
    //console.log(bagItems);
    let bagItemsContainerElement = document.querySelector('.bag-items-container');
    bagItemsContainerElement.innerHTML = `
                <div class="bag-item-container">
                    <div class="item-left-part">
                        <img class="bag-item-image" src="../images/4.jpg" alt="bag-item-page">
                    </div>
                    <div class="item-right-part">
                        <div class="company">ADIDAS</div>
                        <div class="item-name">Men Printed Polo Collar Indian Cricket ODI Jersey</div>
                        <div class="price-container">
                            <span class="current-price">₹ 999</span>
                            <span class="original-price">₹ 1499</span>
                            <span class="discount-percentage">(35% OFF)</span>
                        </div>
                        <div class="return-period">
                            <span class="return-period-days">14 days</span>     return available
                        </div>
                        <div class="delivery-details">Delivery by
                            <span class="delivery-details-days">10 Oct 2023</span>
                        </div>
                    </div>
    
                    <div class="remove-from-cart">
                        <span class="material-symbols-outlined">
                            close
                            </span>
                    </div>
                </div>`;
}

function generateItemHTML(item){
    return ;
}
//pehle toh bagItems ki id nikalna h then later convert bagItemid to object to print them.
