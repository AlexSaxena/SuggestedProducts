type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  imageSrc: string;
};

export const setStore = (product: Product, quantity: number) => {
  const storageJson = localStorage.getItem("cart") ?? "{}";
  const storage = JSON.parse(storageJson);

  storage[product.id] = { quantity, product };

  localStorage.setItem("cart", JSON.stringify(storage));
};

// export const getStore = (product: Product, quantity: number) => {};
