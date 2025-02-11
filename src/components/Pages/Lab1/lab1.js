import React, { useState, useEffect } from 'react';
import './lab1.css';

const Lab1 = () => {
  const [sellers, setSellers] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Завантаження даних з сервера
  useEffect(() => {
    const fetchData = async () => {
      try {
        const sellersResponse = await fetch('http://localhost:5000/api/lab1/sellers');
        const sellersData = await sellersResponse.json();
        setSellers(sellersData);

        const customersResponse = await fetch('http://localhost:5000/api/lab1/customers');
        const customersData = await customersResponse.json();
        setCustomers(customersData);

        const productsResponse = await fetch('http://localhost:5000/api/lab1/products');
        const productsData = await productsResponse.json();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Обробка зміни вибору замовника
  const handleCustomerChange = (event) => {
    setSelectedCustomer(event.target.value);
  };

  // Обробка зміни вибору продавця
  const handleSellerChange = (event) => {
    setSelectedSeller(event.target.value);
  };

  // Обробка вибору товарів
  const handleProductChange = (event, productId) => {
    const updatedProducts = selectedProducts.some((prod) => prod.product_id === productId)
      ? selectedProducts.filter((prod) => prod.product_id !== productId)
      : [...selectedProducts, { product_id: productId, quantity: 1 }];
    setSelectedProducts(updatedProducts);
  };

  // Обробка форми замовлення
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/lab1/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer_id: selectedCustomer,
          seller_id: selectedSeller,
          products: selectedProducts,
        }),
      });
      const result = await response.json();
      alert(`Order created successfully! Order ID: ${result.order_id}`);
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to create order.');
    }
  };

  return (
    <div className="lab1-container">
      <h1 className="lab1-header">Лабораторна 1: Створення замовлення</h1>

      <form className="lab1-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="customer" className="lab1-label">Замовник:</label>
          <select id="customer" className="lab1-select" onChange={handleCustomerChange} required>
            <option value="">Оберіть замовника</option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="seller" className="lab1-label">Продавець:</label>
          <select id="seller" className="lab1-select" onChange={handleSellerChange} required>
            <option value="">Оберіть продавця</option>
            {sellers.map((seller) => (
              <option key={seller.id} value={seller.id}>
                {seller.first_name} {seller.last_name}
              </option>
            ))}
          </select>
        </div>

        <div className="lab1-checkbox-group">
          <label className="lab1-label">Товари:</label>
          {products.map((product) => (
            <div key={product.id}>
              <input
                type="checkbox"
                id={`product-${product.id}`}
                className="lab1-checkbox"
                onChange={(e) => handleProductChange(e, product.id)}
              />
              <label htmlFor={`product-${product.id}`} className="lab1-checkbox-label">
                {product.name} - {product.unit} - {product.price} грн
              </label>
            </div>
          ))}
        </div>

        <button type="submit" className="lab1-submit-btn">Створити замовлення</button>
      </form>
    </div>
  );
};

export default Lab1;
