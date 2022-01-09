import moment from 'moment';

const transactions = [
    {
        id: 1,
        concept: 'Aca compraste algo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit provident aliquid doloribus quo mollitia praesentium architecto aut repellat rem harum.',
        amount: 739.85,
        date: moment('2021-12-20'),
        type: 1,
    },
    {
        id: 2,
        concept: 'Aca vendiste algo.',
        amount: 215.23,
        date: moment('2021-06-15'),
        type: 1,
    },
    {
        id: 3,
        concept: 'Aca te depositaron algo.',
        amount: 14725.10,
        date: moment('2021-08-10'),
        type: 1,
    },
    {
        id: 4,
        concept: 'Aca compraste algo.',
        amount: 8752.15,
        date: moment('1998-02-05'),
        type: 2,
    },
]

const types = [
    {
        id: 1,
        name: 'Ingreso', // Income
    },
    {
        id: 2,
        name: 'Egreso', // Expense
    },
]

export {
    transactions,
    types,
};