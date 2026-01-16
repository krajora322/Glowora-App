# Glowora – E-Commerce Platform

## 1. Basics

- **Project Title:** Glowora – Aura of You  
- **Short Description:** A modern full-stack e-commerce platform for cosmetics and beauty products, built with React, Node.js, and MongoDB.  
- **Technologies Used:**  
  - **Frontend:** React.js, React Router DOM, React Context API, Material-UI, Bootstrap, React Icons, React Toastify, React Hot Toast, Vite  
  - **Backend:** Node.js, Express.js, MongoDB, Mongoose, CORS, dotenv  
  - **Deployment & Hosting:** Vercel, MongoDB Atlas  

---

## 2. Demo & Links

- **Live App Link:** [Frontend](https://glowora-app-gamma.vercel.app/)
   
- **Screenshots / GIFs:**  
  - **Home Page**
    
  
  <img width="1879" height="861" alt="image" src="https://github.com/user-attachments/assets/cbe8aeff-d1d6-41c0-b260-9274bf9eac50" />

  - **Product Listing with Filters**
      
  
  <img width="1901" height="871" alt="image" src="https://github.com/user-attachments/assets/a88ee30e-a5c9-487a-8763-a84882f4bf59" />

  - **Shopping Cart**
    
  
  <img width="1885" height="847" alt="image" src="https://github.com/user-attachments/assets/aa80a7d0-180b-46ad-aa44-999be5ff1497" />

---

## 3. Features

### Home Page
- Displays featured products from multiple categories  
- Showcases categories with images and descriptions  
- Displays promotional banners with automatic carousel  
- Highlights platform benefits (free shipping, easy returns, authenticity)  

**User Story:**  
As a shopper, I can quickly see featured products and categories so that I can explore products easily.  

---

### Product Listing & Filtering
- Displays products with images, prices, and ratings  
- Filters products by price range, category, and customer ratings  
- Sorts products by price (High to Low, Low to High)  
- Provides real-time search with dropdown suggestions  
- Allows clearing all filters with one click  

**User Story:**  
As a shopper, I can filter products by price and category so that I see only items within my preference.  

**Edge Cases:**  
- No products match filters → Show "No products found" message  
- Search returns no results → Display empty state with browse suggestion  

---

### Product Details
- Displays detailed product information including brand, price, description, ratings, stock, and reviews  
- Allows adjusting quantity before adding to cart  
- Supports adding to cart or wishlist with one click  

**User Story:**  
As a customer, I can view product details including reviews and stock status so I can make informed purchase decisions.  

---

### Shopping Cart
- View all cart items with product images and details  
- Update item quantities and remove items  
- Move items from cart to wishlist  
- See real-time calculations: subtotal, total, tax, delivery charges, discounts  

**User Story:**  
As a shopper, I can adjust quantities and see price updates in real-time so I know my total payment before checkout.  

**Edge Cases:**  
- Empty cart → Display "Your cart is empty" message  
- Quantity exceeds stock → Show error and limit to available stock  

---

### Wishlist
- Save favorite products for later purchase  
- Move items to cart with one click  
- Shows wishlist count in header  

**User Story:**  
As a user, I can save products to my wishlist so that I can purchase them later.  

**Edge Cases:**  
- Empty wishlist → Display "Your wishlist is empty" message  

---

### Address Management
- Add, edit, delete multiple delivery addresses  
- Set default address for quick checkout  

**User Story:**  
As a customer, I can manage multiple addresses for easier shipping.  

**Edge Cases:**  
- No saved addresses → Prompt to add an address  
- Deleting default → Automatically select another default  

---

### Checkout Process
- Select delivery address and payment method  
- Review order summary including products, quantities, price, and estimated delivery  
- Confirm order and receive tracking ID  

**User Story:**  
As a shopper, I can review my order before confirming to ensure accuracy.  

**Edge Cases:**  
- No address selected → Show error  
- No payment method selected → Show error  
- Order placement fails → Allow retry  

---

### Order Management
- View all past orders with status (Shipped, Delivered, Cancelled)  
- Track payment status (Paid, Unpaid, Refund)  
- Expand/collapse order details  

**User Story:**  
As a customer, I can track all my orders to know when to expect delivery.  

---

### User Profile
- View and edit personal information  
- Manage saved addresses  
- Quick navigation to order history  

**User Story:**  
As a user, I can manage profile and addresses in one place.  

---

### Responsive Design & User Feedback
- Fully responsive on mobile, tablet, and desktop  
- Toast notifications for actions  
- Loading indicators during data fetching  
- Handles network errors and slow loading gracefully  

---

## 4. Quick Start / Installation

### Prerequisites
- Node.js (v20 or higher)  
- MongoDB Atlas account  
- Git  

### Clone & Install
```bash
git clone https://github.com/krajora322/Glowora-App
cd glowora-app

### **Backend Setup**
- cd Backend
- npm install
- cp .env.example .env  
- npm run dev            

## **Frontend Setup**
- cd Frontend
- npm install
- npm start              

## **Environment Setup**
### **Backend .env File**
MONGODB=your_mongodb_connection_string_here
PORT=3000


## **API Reference**
Base URL
Development: http://localhost:5173/

### **Products API**

| Method | Route | Description |
|--------|-------|-------------|
| GET    | /products | Get all products with category details |
| GET    | /products/:productId | Get single product by ID |
| POST   | /products | Create new product (Admin) |


## **Project Structure**
glowora-app/
├── Backend/
│   ├── db/
│   ├── models/
│   ├── index.js
│   ├── package.json
│   └── vercel.json
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
