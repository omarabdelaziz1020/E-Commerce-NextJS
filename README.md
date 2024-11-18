# E-Commerce App

A simple e-commerce application built with **Next.js**, **React**, **Redux Toolkit**, and **SCSS**. This app fetches product data from the [DummyJSON API](https://dummyjson.com/docs/products) and allows users to view and manage a shopping cart.

---

## Features

- **Product Listing**: Displays products with image, name, price, and description.
- **Shopping Cart**: Add and remove products, view total price, and persist cart state.
- **Responsive Design**: Fully responsive on desktop, tablet, and mobile.
- **Server-Side Rendering (SSR)**: Uses Next.js to improve performance and SEO.

---

## Installation Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### 2. Install Dependencies

Ensure you have Node.js (LTS) installed, then run:

```bash
npm install
```

### 3. Start the Development Server

Run the following command to start the app:

```bash
npm run dev
```

The app will be available at http://localhost:3000.

### 4. Build for Production (Optional)

To create an optimized production build:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

## Assumptions and Notes
1. **Data Fetching**:
   - The app fetches product data from the DummyJSON API (`https://dummyjson.com/products`) using server-side rendering (SSR).

2. **State Management**:
   - The shopping cart state is managed using **Redux Toolkit** for simplicity and scalability.

3. **Styling**:
   - SCSS is used for styling. Global styles are defined in `globals.scss`, while component-specific styles use CSS Modules.

4. **Image Optimization**:
   - Images are optimized using the `next/image` component, with external images allowed via `remotePatterns` in `next.config.js`.

5. **Routing**:
   - File-based routing in Next.js is used for navigation.

6. **Browser Requirements**:
   - The app is tested in modern browsers (Chrome, Firefox, Edge).


```bash
src/
├── components/         # Reusable UI components (Header, ProductCard, etc.)
├── pages/              # Application pages (Home, Cart)
├── redux/              # Redux state management files (store, cartSlice)
├── styles/             # Global and component-specific styles (SCSS)
```

## Author

- **Omar Abdulaziz**
- [GitHub Profile](https://github.com/omarabdelaziz1020)
