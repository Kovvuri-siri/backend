const express = require('express');
const router = express.Router();
const foods = [
  { id: 1, name: 'Hyderabadi Biryani', price: 250, image: 'https://tse4.mm.bing.net/th?id=OIP.VQSf0GuP2KOhHVE1xQuFwwHaFj&pid=Api&P=0&h=180' },
  { id: 2, name: 'Butter Chicken', price: 300, image: 'https://tse4.mm.bing.net/th?id=OIP.j7ljUAYn_DJwvfgB7EqSEwHaHa&pid=Api&P=0&h=180' },
  { id: 3, name: 'Paneer Tikka', price: 200, image: 'https://tse1.mm.bing.net/th?id=OIP.QnjA_HStthtdvYCFg80znAHaFM&pid=Api&P=0&h=180' },
  { id: 4, name: 'Dosa', price: 100, image: 'https://tse1.mm.bing.net/th?id=OIP.MyGrZAZtuEGVh_nT51eRRQHaHa&pid=Api&P=0&h=180' },
  { id: 5, name: 'Pizza', price: 350, image: 'https://tse3.mm.bing.net/th?id=OIP.8UeIFPMYwIErE1ShRYB9QAHaEo&pid=Api&P=0&h=180' },
  { id: 6, name: 'Burger', price: 150, image: 'https://tse2.mm.bing.net/th?id=OIP.LMaNVeJs4NPBW8GsvuBBQwHaE7&pid=Api&P=0&h=180' },
  { id: 7, name: 'Samosa', price: 50, image: 'https://tse4.mm.bing.net/th?id=OIP.fDRUA3TTWZk715DkoyWPqQHaEo&pid=Api&P=0&h=180' },
  { id: 8, name: 'Pasta', price: 200, image: 'https://tse1.mm.bing.net/th?id=OIP.-Ei0NCm3I0gLSDUA16sj4AHaE8&pid=Api&P=0&h=180' },
  { id: 9, name: 'Gulab Jamun', price: 120, image: 'https://tse1.mm.bing.net/th?id=OIP.jHVOWwSFJmKm4WYjoOIS0QHaFk&pid=Api&P=0&h=180' },
  { id: 10, name: 'Ice Cream', price: 180, image: 'https://tse4.mm.bing.net/th?id=OIP.Z2rbbXU5A4uQHYJCzBRfoQHaF_&pid=Api&P=0&h=180' }
];
router.get('/', (req, res) => {
  res.json(foods);
});
module.exports = router;