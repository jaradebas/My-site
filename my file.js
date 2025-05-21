document.addEventListener("DOMContentLoaded", function () {
    // Inject Styles
    const style = document.createElement("style");
    style.textContent = `
        body {
            font-family: 'Segoe UI', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        header {
            background-color: #d32f2f;
            color: white;
            padding: 20px;
            text-align: center;
        } 

        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            padding: 20px;
            max-width: 900px;
            margin: 20px auto;
        }

        .gallery img {
            width: 100%;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }

        .gallery p {
            text-align: center;
            margin-top: 8px;
            font-weight: 600;
        }

        .container {
            max-width: 700px;
            margin: 30px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }

        h2 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
        }

        label {
            display: block;
            margin-top: 15px;
            margin-bottom: 5px;
            font-weight: 600;
        }

        input, select, textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 16px;
        }

        textarea {
            resize: vertical;
        }

        button {
            margin-top: 20px;
            width: 100%;
            padding: 12px;
            background-color: #388e3c;
            color: white;
            font-size: 18px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
        }

        button:hover {
            background-color: #2e7d32;
        }

        @media (max-width: 600px) {
            .container {
                margin: 10px;
                padding: 15px;
            }

            button {
                font-size: 16px;
            }
        }
    `;
    document.head.appendChild(style);

    // Header
    const header = document.createElement("header");
    header.innerHTML = `<h1>Pinoy Bahay Foods</h1><p>Lutong Bahay, Sarap Bahay!</p>`;
    document.body.appendChild(header);

    // Dish Image Gallery
    const gallery = document.createElement("div");
    gallery.className = "gallery";

    const dishes = [
        { name: "Bicol Express", img: "bicol.jpg" },
        { name: "Pork Sinigang", img: "sinigang.jpg" },
        { name: "Pork Humba", img: "humba.jpg" },
        { name: "Chicken Adobo", img: "adobo.jpg" },
        { name: "Chicken Tinola", img: "tinola.jpg" },
        { name: "Pochero", img: "pochero.jpg" }
    ];

    dishes.forEach(dish => {
        const card = document.createElement("div");

        const img = document.createElement("img");
        img.src = dish.img;
        img.alt = dish.name;

        const caption = document.createElement("p");
        caption.textContent = dish.name;

        card.appendChild(img);
        card.appendChild(caption);
        gallery.appendChild(card);
    });

    document.body.appendChild(gallery);

    // Order Form
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = `
        <h2>Order Now</h2>
        <form id="foodOrderForm">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" required>

            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required>

            <label for="address">Delivery Address</label>
            <textarea id="address" name="address" rows="3" required></textarea>

            <label for="dish">Select a Dish</label>
            <select id="dish" name="dish" required>
                <option value="">--Choose--</option>
                <option value="Pork Adobo">Pork Adobo</option>
                <option value="Pork Sinigang">Pork Sinigang</option>
                <option value="Pork Humba">Pork Humba</option>
                <option value="Chicken Adobo">Chicken Adobo</option>
                <option value="Chicken Tinola">Chicken Tinola</option>
                <option value="Pochero">Pochero</option>
            </select>

            <label for="quantity">Quantity</label>
            <input type="number" id="quantity" name="quantity" min="1" value="1" required>

            <label for="payment">Mode of Payment</label>
            <select id="payment" name="payment" required>
                <option value="">--Select--</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="GCash">GCash</option>
                <option value="Bank Transfer">Bank Transfer</option>
            </select>

            <label for="notes">Additional Notes</label>
            <textarea id="notes" name="notes" rows="3" placeholder="e.g., no rice, extra sauce..."></textarea>

            <button type="submit">Place Order</button>
        </form>
    `;
    document.body.appendChild(container);

    // Submit Handler
    const form = document.getElementById("foodOrderForm");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const dish = document.getElementById("dish").value;
        const quantity = document.getElementById("quantity").value;

        alert(`Thanks ${name}! Your order of ${quantity} ${dish}(s) has been placed.`);
        form.reset();
    });
});
