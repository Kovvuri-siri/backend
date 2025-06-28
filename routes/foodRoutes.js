const express = require('express');
const router = express.Router();

const restaurantMenus = {
  'Spicy Hub': [
    { id: 1, name: 'Hyderabadi Biryani', price: 250, image: 'https://tse4.mm.bing.net/th?id=OIP.VQSf0GuP2KOhHVE1xQuFwwHaFj&pid=Api&P=0&h=180' },
    { id: 2, name: 'Butter Chicken', price: 180, image: 'https://tse4.mm.bing.net/th?id=OIP.j7ljUAYn_DJwvfgB7EqSEwHaHa&pid=Api&P=0&h=180' },
    { id: 3, name: 'Paneer Tikka', price: 120, image: 'https://tse1.mm.bing.net/th?id=OIP.QnjA_HStthtdvYCFg80znAHaFM&pid=Api&P=0&h=180' },
    { id: 4, name: 'Pizza', price: 180, image: 'https://tse3.mm.bing.net/th?id=OIP.8UeIFPMYwIErE1ShRYB9QAHaEo&pid=Api&P=0&h=180' },
    { id: 5, name: 'Burger', price: 150, image: 'https://tse2.mm.bing.net/th?id=OIP.LMaNVeJs4NPBW8GsvuBBQwHaE7&pid=Api&P=0&h=180' },
    { id: 6, name: 'Pasta', price: 120, image: 'https://tse1.mm.bing.net/th?id=OIP.-Ei0NCm3I0gLSDUA16sj4AHaE8&pid=Api&P=0&h=180' },
    { id: 7, name: 'Gulab Jamun', price: 60, image: 'https://tse1.mm.bing.net/th?id=OIP.jHVOWwSFJmKm4WYjoOIS0QHaFk&pid=Api&P=0&h=180' },
    { id: 8, name: 'Ice Cream', price: 80, image: 'https://tse4.mm.bing.net/th?id=OIP.Z2rbbXU5A4uQHYJCzBRfoQHaF_&pid=Api&P=0&h=180' }
  ],
  'Tandoori Tales': [
    { id: 9, name: 'Paneer Tikka', price: 200, image: 'https://tse2.mm.bing.net/th/id/OIP.KCNhiQeXsJuIzDEJtxA57gHaFS?pid=Api&P=0&h=180' },
    { id: 10, name: 'Paneer butter masala', price: 100, image: 'https://tse2.mm.bing.net/th/id/OIP.3fROpInSzgY--B1msdJITQHaHa?pid=Api&P=0&h=180' },
    { id: 11, name: 'Chicken Biryani', price: 250, image: 'https://tse4.mm.bing.net/th/id/OIP.Ftr7RDA77udmeu_grndPNAHaE8?pid=Api&P=0&h=180' },
    { id: 12, name: 'Dosa', price: 60, image: 'https://tse1.mm.bing.net/th?id=OIP.MyGrZAZtuEGVh_nT51eRRQHaHa&pid=Api&P=0&h=180' },
    { id: 13, name: 'Samosa', price: 30, image: 'https://tse4.mm.bing.net/th?id=OIP.fDRUA3TTWZk715DkoyWPqQHaEo&pid=Api&P=0&h=180' },
    { id: 14, name: 'Pastry', price: 60, image: 'https://tse2.mm.bing.net/th/id/OIP.nksWaHL6t12d7iK4P6ucngHaJQ?pid=Api&P=0&h=180' },
    { id: 15, name: 'Mocktail', price: 80, image: 'https://tse4.mm.bing.net/th/id/OIP.F6s_2wPWU4MjzmVizA-09QHaGQ?pid=Api&P=0&h=180' },
    { id: 16, name: 'Milkshake', price: 80, image: 'https://tse1.mm.bing.net/th/id/OIP.m3cJnm-tIRrcsURXPxfCIQHaE8?pid=Api&P=0&h=180' }

  ],
  'Pizza Palace': [
    { id: 17, name: 'Pepperoni Delight', price: 279, image: 'https://tse3.mm.bing.net/th/id/OIP.2o30gEB_2MTxzkOtSZZkQAHaEJ?pid=Api&P=0&h=180' },
    { id: 18, name: 'Chicken Tikka Pizza', price: 299, image: 'https://tse1.mm.bing.net/th/id/OIP.-oqmEH1BrfB_5Ku05VWS2QHaEL?pid=Api&P=0&h=180' },
    { id: 19, name: 'Margherita Classic', price: 149, image: 'https://tse3.mm.bing.net/th/id/OIP.VUCfq4X_8rvvCIuwGtiAnQHaHa?pid=Api&P=0&h=180' },
    { id: 20, name: 'Farmhouse Feast', price: 229, image: 'https://tse2.mm.bing.net/th/id/OIP.ExOeyOrdBpdJwyBPV6s1OAHaET?pid=Api&P=0&h=180' },
    { id: 21, name: 'Veggie Overload', price: 249, image: 'https://tse3.mm.bing.net/th/id/OIP.-Rd9PY8eFYyc2pByyVMx0gHaEK?pid=Api&P=0&h=180' },
    { id: 22, name: 'BBQ Chicken Special', price: 329, image: 'https://tse4.mm.bing.net/th/id/OIP.wPml75OhoTt9sr-90sTBJwHaE5?pid=Api&P=0&h=180' },
    { id: 23, name: 'Spicy Paneer Supreme', price: 269, image: 'https://tse3.mm.bing.net/th/id/OIP.Jd2tYKLSDX9tR7G0EGU89AHaFP?pid=Api&P=0&h=180' },
    { id: 24, name: 'Panner pizza', price: 349, image: 'https://tse1.mm.bing.net/th/id/OIP.KrjzGdQ5MXPtjk1F4V3J6QHaFj?pid=Api&P=0&h=180' }
  ]
};

router.get('/:restaurant', (req, res) => {
  const menu = restaurantMenus[req.params.restaurant];
  if (menu) return res.json(menu);
  res.status(404).json({ message: 'Restaurant not found' });
});

module.exports = router;
