# Personal Budget App

## Table of Contents

- [Overview](#overview)
- [Usage](#usage)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Database](#database)
- [API Endpoints](#api)

## Overview <a id="overview"></a>

![preview of the project](docs/preview.jpeg)

This is a project build for Alkemy following these [requirements](/docs/ChallengeFullstack-JavaScript.rev2.pdf) and was created with these technologies:
- **Frontend**: 
  - **Framework**: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
  - **Styles**: For the styling it uses ***plain CSS*** within ***CSS modules***.
  - **Icons**: The icons are from [Font Awesome Icons](https://fontawesome.com/).

- **Backend**:
  - **Framework**: Is build in ***Node.js*** using the ***Express.js*** Framework.
  - **Database**: For the data uses the ***MySQL*** database. No ORM.

## Usage <a id="usage"></a>

### Prerequisites <a id="prerequisites"></a>

To make use of this project you need to have installed these programs in your system:

1. [MySql Community](https://dev.mysql.com/downloads/)
2. [Node.js](https://nodejs.org/en/)

### Setup <a id="setup"></a>

1. Git clone this project in your machine:

```bash
git clone https://github.com/evarelaavalos/personal-budget-app
cd personal-budget-app
```
2. Install the dependencies. For both the Frontend and the Backend.

```bash
npm install --prefix client
npm install --prefix server
```

3. Open MySQL, either the Workbench or the command prompt, and run the `initsb.sql` located in the folder `./server/src/database/`.

4. Complete the config file `mysql.js` with the settings of your local database. Is located in the folder `./server/src/database/`.

```javascript
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'COMPLETE_WITH_YOUR_PASSWORD',
    port: 'ADD_YOUR_PORT_NUMBER',
    database: 'personal_budget_db',
    ...
});
```

5. Run both applications in parallel:

```bash
npm run client
# in other terminal instance
npm run server
```

6. Open the browser and go to `http://localhost:3000` to start using the project.

## Database <a id="database"></a>

![diagram of the database](docs/database.jpg)

## API Endpoints <a id="api"></a>

### `GET /transactions`

You can retrieve all the transactions made in the application.

### `POST /transactions`

To register a new transaction, send a POST request with a `body` like the next example:

```json
{
    "concept": "Compra de un lavarropas Dream",
    "date": "2020-12-02",
    "amount": 64999.99,
    "type": 1
}
```

### `PUT /transactions/{id}`

You can update an already existing transaction using the PUT request. It accepts a `body` similar to the POST request, except you cannot change the `type` field.

```json
{
    "concept": "Compra de un lavarropas con descuento",
    "date": "2020-12-02",
    "amount": 53200.99
}
```

### `DELETE /transactions/{id}`

You can delete a specific transaction.

### `GET /types`

You can retrieve all types of transactions available.

### `GET /balance`

Retrieves the current account balance of the application.
