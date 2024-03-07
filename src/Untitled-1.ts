  //store cart data in localstorage
  let storedData = [];
  try {
    const cartData = localStorage.getItem('cart');

    if (cartData) {
      storedData = JSON.parse(cartData);
    }
  } catch (error) {
    console.error('Error parsing cart data:', error);
    storedData = []
  }

  //add cart items
  const [cart, setCart] = useState(storedData);

  //add quantities
  const [itemQuantity, setItemQuantity] = useState(() => {
    const storedQuantities = localStorage.getItem('cartQuantities');
    return storedQuantities ? JSON.parse(storedQuantities) : Array(storedData.length).fill(1);
  });

  useEffect(() => {
    //for cart
    localStorage.setItem('cart', JSON.stringify(cart));
    //for quantities
    localStorage.setItem('cartQuantities', JSON.stringify(itemQuantity));
  }, [cart, itemQuantity]);

  //onclick add items to cart
  const handleClick = (item) => {
    setCart([...cart, item]);
    setItemQuantity([...itemQuantity, 1]);
  }
