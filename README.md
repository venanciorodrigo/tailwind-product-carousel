# Tailwind Product Carousel

A lightweight and responsive product carousel component built to demonstrate **Tailwind CSS** combined with semantic **HTML5** and minimal **Vanilla JavaScript**. 

## 🚀 Demo Page

📄 Static Website: https://venanciorodrigo.github.io/tailwind-product-carousel/

🛒 Shopify Store: https://rodrigovenancio.myshopify.com/ 🔐 **Password:** ```Teltex```
> The Shopify store showcases the carousel using **real products from the Shopify product list**, providing a more realistic implementation of the component in a live storefront environment.

---

## 🛠️ Features

* **Utility-First Styling:** Built entirely with Tailwind CSS using the CDN for rapid prototyping.
* **HTML 5**
* **Responsive Design**
* **Vanilla JS**
* **Google Fonts Integration**
* **Shopify Integration Example:** Includes a reusable `product-carousel.liquid` section located in the `shopify/sections` folder for demonstration.

---

## 📂 Getting Started

Since this is a static project using CDNs, there is no installation required. 

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/tailwind-product-carousel.git
    ```
2.  **Open the project:**
    Simply open `index.html` in your favorite web browser.

---

### ⚙️ Technical Notes

* **Tailwind via CDN:** For the purpose of this exercise, we are utilizing the Play CDN:
    ```html
    <script src="https://cdn.tailwindcss.com"></script>
    ```
    > **⚠️ Production Note:** In a real-world environment, it is best practice to use the **Tailwind CLI or PostCSS** flow. This allows you to:
    > * **Purge unused styles:** Significantly reduces the CSS bundle size.
    > * **Theming:** Define a centralized `tailwind.config.js` to manage your design system (colors, spacing, and typography) through variables.
    > * **Scalability:** Avoid "magic numbers" and hardcoded pixel values by leveraging Tailwind’s relative spacing scale (rem) for better accessibility and responsiveness.
* **Images:** All product imagery is sourced from [Unsplash](https://unsplash.com).
* **Fonts:** Custom typography is imported via Google Fonts API in the `<head>` section.
