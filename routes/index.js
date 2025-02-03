const express = require("express");
const router = express.Router();
const axios = require("axios");

// Function to check if a number is prime
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Function to check if a number is a perfect number
const isPerfect = (num) => {
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num && num !== 1;
};

// Function to check if a number is an Armstrong number
const isArmstrong = (num) => {
  const digits = num.toString().split("").map(Number);
  const power = digits.length;
  return digits.reduce((sum, digit) => sum + digit ** power, 0) === num;
};

// Function to get properties of a number
const getProperties = (num) => {
  const properties = [];
  if (isArmstrong(num)) properties.push("armstrong");
  properties.push(num % 2 === 0 ? "even" : "odd");
  return properties;
};

// Function to get the sum of digits of a number (absolute value)
const digitSum = (num) =>
    Math.abs(num).toString().split("").reduce((sum, digit) => sum + Number(digit), 0);

// API Endpoint
router.get("/api/classify-number", async (req, res) => {
  const { number } = req.query;

  // Validate input
  const parsedNumber = parseInt(number, 10);
  if (isNaN(parsedNumber)) {
    return res.status(400).json({ number: "alphabet", error: true });
  }

  const absNumber = Math.abs(parsedNumber); // Absolute value for calculations

  try {
    // Fetch fun fact from Numbers API
    const { data } = await axios.get(`http://numbersapi.com/${parsedNumber}/math?json`);
    const funFact = data.text;

    res.json({
      number: parsedNumber,
      is_prime: isPrime(parsedNumber),
      is_perfect: isPerfect(absNumber),
      properties: getProperties(absNumber),
      digit_sum: digitSum(parsedNumber), 
      fun_fact: funFact
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch fun fact" });
  }
});

module.exports = router;
