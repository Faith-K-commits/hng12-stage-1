# Number Classification API

This API classifies numbers based on mathematical properties and provides a fun fact.

## Features
- Checks if a number is **prime, perfect, Armstrong**
- Determines if it is **even or odd**
- Computes **sum of its digits**
- Fetches a **fun fact** from [Numbers API](http://numbersapi.com/)

## API Endpoint
**GET** `/api/classify-number?number=<integer>`

### Example Response
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```
```json
{
    "number": "alphabet",
    "error": true
}
```
### Setup Instructions
1. Clone repo
```sh
git clone https://github.com/Faith-K-commits/hng12-stage-1.git

cd hng12-stage-1
```

2. Install dependencies
```shell
npm install
```

3. Start Server
```shell
npm start
```

### Deployment
The API is deployed at:
https://hng12-stage-1-9e4i.onrender.com/
