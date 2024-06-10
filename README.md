# ReactiveCommerce - Aesthetic Ecommerce Website 🛒
Explore a standard React application structure featuring advanced routing, state management, and a component-based architecture, ensuring seamless scalability and maintainability.

## Languages and Tools Used 🚀
[![My Skills](https://skillicons.dev/icons?i=js,react,html,css,bootstrap)](https://skillicons.dev)

- [x] **React**: Component-based architecture for building reusable UI components.
- [x] **JavaScript**: Core language for implementing dynamic behavior.
- [x] **React-Bootstrap**: UI components built with Bootstrap for React.
- [x] **React Router**: Declarative routing for React applications.
- [x] **React-Slick**: Carousel component for React.
- [x] **CSS**: Styling for the application.

---

## Key Features 🌟
### Home 🏠
- A beautifully designed main page featuring categories, sales, deals, new arrivals, and big discounts sections.
- Interactive elements for moving items to the shopping cart.

### Shopping Cart 🛍️
- Display and manage items in the shopping cart.
- Dynamic updates to reflect changes in the cart.

---

## React Features Used ⚛️

- [x] **Components**: Building blocks of the UI, each encapsulating its own structure, style, and behavior. Components help in making the UI modular and reusable.
- [x] **Props**: Mechanism for passing data from parent to child components. Props are read-only and ensure that data flows in a single direction.
- [x] **State**: Local state management using the `useState` hook to handle component state. The state allows components to create and manage their own data.
  ```jsx
  const [CartItem, setCartItem] = useState([]);
  ```
  
- [x] **Events**: Handling user interactions such as clicks and form submissions. Event handlers are used to trigger changes in state or perform actions.
  ```jsx
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    // check if product is already in cart
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      // step 3: if product is not in cart, add it to cart
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };
  ```
  
- [x] **Hooks**: Utilizing React hooks like `useState` and `useEffect` for state and lifecycle management. Hooks enable functional components to have state and side effects.
  ```jsx
  useEffect(() => {
    // perform side effects here
  }, [dependencies]);
  ```

- [x] **React Router Features**: 🧭

- **BrowserRouter as Router**: Wraps the application and provides routing functionality.
  ```jsx
  import { BrowserRouter as Router } from 'react-router-dom';
  <Router>
    <App />
  </Router>
  ```
- **Switch**: Renders the first child `<Route>` that matches the location.
  ```jsx
  import { Switch } from 'react-router-dom';
  <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/cart" component={CartPage} />
  </Switch>
  ```
- **Route**: Defines a mapping between a URL path and a component.
  ```jsx
  import { Route } from 'react-router-dom';
  <Route path="/about" component={AboutPage} />
  ```
- **Link**: Provides navigation to different routes in the application.
  ```jsx
  import { Link } from 'react-router-dom';
  <Link to="/cart">Go to Cart</Link>
  ```
- **Routes**: (Newer versions) Similar to `Switch`, used to group `Route` elements.
  ```jsx
  import { Routes, Route } from 'react-router-dom';
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/cart" element={<CartPage />} />
  </Routes>
  ```

    
##### my code:
```jsx
  <Router>
        <div>
          <Header CartItem={CartItem} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Pages
                {/*props...*/}
                />
              }
            />
            <Route
              exact
              path="/cart"
              element={
                <Cart
                {/*props...*/}
                />
              }
            />
          </Routes>
        </div>
      </Router>
  ```
  
- [x] **React-Slick**: Implementing carousels for showcasing products.
  ```jsx
  // basic slider
  <Slider {...settings}>
    {items.map(item => (
      <div key={item.id}>
        <img src={item.image} alt={item.name} />
      </div>
    ))}
  </Slider>

  // app slider
   <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <div className="box d_flex top" key={index}>
              <div className="left">
                <h1>{value.title}</h1>
                <p>{value.desc}</p>
                <button className="btn-primary">Visit Collections</button>
              </div>
              <div className="right">
                <img src={value.cover} alt="" />
              </div>
            </div>
          );
        })}
      </Slider>  
  ```

---

## Installation and Setup 🛠️

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ReactiveCommerce.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ReactiveCommerce
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

---

## Directory Structure 📂

```
ReactiveCommerce/
├── public/
├── src/
│   ├── components/
│   │   ├── mainpage
│   │   │    ├── Home.jsx
│   │   │    ├── Slider.jsx
│   │   │    ├── Categories.jsx
│   │   │    └── ... (other components)
│   │   ├── Shop
│   │   │    ├── Shop.jsx
│   │   │    ├── ShopCart.jsx
│   │   │    ├── Catg.jsx
│   │   │    └── ... (other components)
│   │   ├── wrapper
│   │   │    ├── Wrapper.jsx
│   │   │    ├── style.css
│   │   │    └── ... (other components)
│   │   ├── discount.jsx
│   │   │    ├── Discount.jsx
│   │   │    ├── Dcard.jsx
│   │   │    └── Ddata.js
│   │   └── ... (other components)
│   ├── pages/
│   │   └── pages.jsx
│   ├── App.js
│   ├── index.js
│   └── ... (other files)
├── package.json
└── README.md
```



## Website Preview 🖼️
#### 👉 Demo Website-

https://user-images.githubusercontent.com/72359805/232126700-e5d3540a-e149-4af7-a037-a6efa9ea541a.mp4


###### Main page of the website-
![React-App](https://github.com/shanibider/Frontend-React-Aesthetic-Ecommerce/assets/72359805/59d29eba-4f43-4f43-93aa-8b4c4f6874ef)


###### Cart page-
![cart](https://user-images.githubusercontent.com/72359805/232125636-8541ff56-256c-4d5d-adc2-16e440a341cd.PNG)

---



> [!TIP]
> Feel free to explore my code. Happy coding! 🚀😊👩‍💻


## 📫 Connect with me 😊
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shani-bider/)
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://shanibider.onrender.com/)
[![gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:shanibider@gmail.com)

<footer>
<p style="float:left; width: 20%;">
Copyright © Shani Bider
</p>
</footer>
