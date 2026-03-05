// 👉 Page load hote hi cart load karo


// Now you can use window and document in Node




let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function handleAddToCart(product) {


    const exist = cart.find(item => item.id === product.id);

    if (exist) {
        exist.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();   // 🔥 localStorage me save
    renderCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
} function renderCart() {
    let container = document.querySelector(".cart-container");
    if (!container) return;

    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = "<h2>Your cart is empty 🛒</h2>";
        return;
    }

    let total = 0;

    cart.forEach(product => {

        total += product.price * product.quantity;

        let div = document.createElement("div");
        div.style.display = "flex";
        div.style.gap = "20px";
        div.style.border = "1px solid #ccc";
        div.style.padding = "10px";
        div.style.margin = "10px 0";
        div.style.backgroundColor = "#1e293b";
        div.style.border = "1px solid #334155";
        div.style.borderRadius = "10px";
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.gap = "50px";

        let img = document.createElement("img");
        img.src = product.image;
        img.width = 100;

        let title = document.createElement("p");
        title.textContent = product.title;

        let price = document.createElement("p");
        price.textContent = "₹" + product.price + " x " + product.quantity;

        let removeBtn = document.createElement("button");

        removeBtn.style.backgroundColor = "#ef4444";
        removeBtn.style.color = "white";
        removeBtn.style.border = "none";
        removeBtn.style.padding = "8px 14px";
        removeBtn.style.borderRadius = "6px";
        removeBtn.style.cursor = "pointer";
        removeBtn.style.transition = "0.3s";
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "auto";
        
    removeBtn.addEventListener("mouseover", () => {
        removeBtn.style.backgroundColor = "#dc2626";
    });

     removeBtn.addEventListener("mouseout", () => {
        removeBtn.style.backgroundColor = "#ef4444";
    });

        removeBtn.addEventListener("click", () => {
            cart = cart.filter(item => item.id !== product.id);
            saveCart();
            renderCart();
        });

        div.append(img, title, price, removeBtn);
        container.appendChild(div);
    });
    

    let totalDiv = document.createElement("h3");
    totalDiv.style.color = "#facc15";
totalDiv.style.fontWeight = "bold";
    totalDiv.textContent = "Total: ₹" + total;
    let coupon=document.createElement("div"); 
    let searchInput = document.createElement("input");

searchInput.type = "text";
searchInput.placeholder = "Search product...";
searchInput.classList.add("search-box");

    let applyBtn=document.createElement("button");
    applyBtn.textContent="Apply Coupon";
searchInput.style.padding = "8px";
searchInput.style.borderRadius = "6px";
searchInput.style.border = "1px solid #334155";
searchInput.style.backgroundColor = "#0f172a";
searchInput.style.color = "white";
searchInput.style.width= "40%";
applyBtn.style.backgroundColor = "#facc15";
applyBtn.style.border = "none";
applyBtn.style.padding = "8px 12px";
applyBtn.style.borderRadius = "6px";
    coupon.append(searchInput,applyBtn);
    container.appendChild(coupon);
    container.appendChild(totalDiv);
}
// 👉 Page refresh ke baad bhi cart show ho
window.addEventListener("DOMContentLoaded", () => renderCart());