let menu = [
    {
        id: 1, 
        category: "lunch",
        name: "Burger",
        price: "$ 5.7",
        src: "./assets/Burger.jpg",
        desc:"Juicy, big, loaded with toppings of my choice.High quality beef medium to well with cheese and bacon on a multigrain bun.A huge single or triple burger with all the fixings, cheese, lettuce, tomato, onions and special sauce or mayonnaise!"
    },
    {
        id: 2, 
        category: "cake",
        name: "Choco-Vanilla cake",
        price: "$ 15.7",
        src: "./assets/choco-vanilla cake.jpg",
        desc:"Made with rich, velvety chocolate and sweet, creamy vanilla, this cake is the epitome of indulgence. Every bite is a dance of chocolate and vanilla"
    },
    {
        id: 3, 
        category: "cake",
        name: "Chocolate cake",
        price: "$ 17",
        src: "./assets/chocolate-cake.jpg",
        desc:"A soft and tender Chocolate Fudge Cake made with cocoa power and sour cream, covered in a rich and creamy chocolate buttercream."
    },
    {
        id: 4, 
        category: "breakfast",
        name: "Donuts",
        price: "$ 4.3",
        src: "./assets/Donuts.jpg",
        desc:"Best donut with different flavours and cake"
    },
    {
        id: 5, 
        category: "breakfast",
        name: "Grilled Fish",
        price: "$ 12.6",
        src: "./assets/Grilled Fish.jpg",
        desc:"This grilled fish recipe with garlic butter sauce can satiate your food cravings and make your parties even more special"
    },
    {
        id: 6, 
        category: "dinner",
        name: "Indian Thali",
        price: "$ 13.4",
        src: "./assets/Indian Thali.jpg",
        desc:"main-course gravy, dal or curry, sabzi or stir fry, condiments like raita, chutney, pickle, salad, papadum, and side dishes like roti, naan, chapati, paratha, or boiled rice."
    },
    {
        id: 7, 
        category: "lunch",
        name: "Kebab",
        price: "$ 7.87",
        src: "./assets/kebab.jpg",
        desc:"An Iranian, Afghan, Middle Eastern, Eastern Mediterranean, and South Asian dish of pieces of meat, fish, or vegetables roasted or grilled on a skewer"
    },
    {
        id: 8, 
        category: "breakfast",
        name: "Pancake",
        price: "$ 8.6",
        src: "./assets/Pancake.jpg",
        desc:"See the great food we have on our menu. Dine-ins and carryouts. Gluten-free options."
    },
    {
        id: 9, 
        category: "dinner",
        name: "Pizza",
        price: "$ 18.7",
        src: "./assets/pizza.jpg",
        desc:"An Authentic Detroit Style Pizza Prepared with our signature pizza base & our classic house red tomato pizza sauce with Mozzarella Cheese, Roast Chicken."
    },
    {
        id: 10, 
        category: "dinner",
        name: "Steak",
        price: "$ 12.5",
        src: "./assets/Steak.jpg",
        desc:"Fire up your grill and enjoy our menus that feature savory cuts of sirloin, fillet, and rib-eye cooked to perfection over an open flame."
    }
]



window.addEventListener("DOMContentLoaded" , function(){
    const maincontainer = document.querySelector(".maincontainer");
    const allmenubtns = document.querySelector(".menubtns")
    

    displaymenubtns(menu);
    displaymenu(menu);


    function displaymenu(menu){
        let menuitems = menu.map(function(item){
            return ` <div class="menu-items">
                        <article class="item">
                            <div class="img-container">
                                <img src="${item.src}">
                            </div>
                            <div class="item-desc">
                                <div class="item-heading">
                                    <div class="item-name">${item.name}</div>
                                    <div class="item-price">Price : ${item.price}</div>
                                </div>
                                <p class="desc">
                                    ${item.desc}
                                </p>
                            </div>
                        </article>
                    </div>`;
        }).join("");

        maincontainer.innerHTML = menuitems;
        
    }



    function displaymenubtns(menu){

        //  ------- finding all categories available ----------  //
        let allcategory = menu.reduce(function(values,item){
            if(!values.includes(item.category)){
                values.push(item.category);
            }
            return values;
        },["all"])

        // --------- displaying filter buttons according to the categories available  -------------  //
        let filterbtns = allcategory.map(item => {
            return `<button class="menu-btn btns" data-id="${item}">${item}</button>`
        }).join("");
        allmenubtns.innerHTML = filterbtns;

        // ----------  filterting according to categories selected ---------  //

        //  ------ when this const declared on top it contains empty array as buttons are added after calling      function  --------   //
        const menubtns = document.querySelectorAll(".menu-btn");

        menubtns.forEach(btn => {
            btn.addEventListener("click",function(e){
                let category = e.currentTarget.dataset.id;
    
                if(category === "all"){
                    displaymenu(menu);
                } else {
                    let categoryMenu = menu.filter(function(item){
                        if(item.category === category){
                            return item;
                        }
                    })
        
                    displaymenu(categoryMenu);
                }
            })
        });
    }



})





