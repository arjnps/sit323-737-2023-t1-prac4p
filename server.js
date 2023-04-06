const { json } = require('express');
const express = require('express');
const app = express();


// const winston = require('winston');

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

app.get('/',(req,res) =>{
    res.send('Welcome to our server!!');
});

function add(n1, n2) {
    return n1 + n2;
}
function sub(n1, n2) {
    return n1 - n2;
}
function mul(n1, n2) {
    return n1 * n2;
}
function div(n1, n2) {
    return n1/n2;
}

function validateInput(n) {

}

app.get('/', (req,res) => {
    try{
        console.log(req.query.n1);
        const n1 = parseFloat(req.query.n1);
        console.log(n1);
    }
    catch (error) {
        console.log( error);
    }
    res.json(users);
});

app.get('/add', (req,res) => {
    try {
        // if(req.query.n2 == undefined) {
        //     console.log('Error!! Missing n1');
        //     res.status(400).send('Error! Failed to recieve parametet n1!');
        //     throw new error("Failed to recieve n1");
        //     console.log(222);
        //if(req.query.n1 == undefined) {
            //     console.log('Error!! Missing n2');
            //     res.status(400).send('Error! Failed to recieve parametet n2!');
            //     throw new error("Failed to recieve n2");
            //     console.log(222);
        // }

        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);

        console.log(n1,' & ',n2);

        if(isNaN(n1)) {
            res.status(400).send(`Error: Recieved n1 value of ${req.query.n1} is not a number1`);
            throw new Error("incorrect value!");
            // logger.log({
            //     level: 'error',
            //     message: `Error: Recieved n1 value of ${req.query.n1} is not a number!`
            // });
        }

        if(isNaN(n2)) {
            res.status(400).send(`Error: Recieved n1 value of ${req.query.n2} is not a number2`);
            throw new Error("incorrect value!");
            // logger.log({
            //     level: 'error',
            //     message: `Error: Recieved n2 value of ${req.query.n2} is not a number!`
            // });
        }

        console.log(`Recieved valid numbers ${n1} and ${n2}!\n`);

        const result = add(n1,n2);
        // logger.log({
        //     level: `info`,
        //     message: `Sum of ${n1} and ${n2} is ${result}`
        // });
        res.status(200).send(`Sum of ${n1} and ${n2} is ${result}`);
    }

    catch(error) {
        res.status(500).send(`Unknown server error occured. Error: ${error}`);
        console.log(`Server error occured: ${error}`);
    }
});

app.get('/sub', (req,res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        console.log(n1,' & ',n2);

        if(isNaN(n1)) {
            res.status(400).send(`Error: Recieved n1 value of ${req.query.n1} is not a number1`);
            throw new Error("incorrect value!");
        }

        if(isNaN(n2)) {
            res.status(400).send(`Error: Recieved n2 value of ${req.query.n2} is not a number2`);
            throw new Error("incorrect value!");
        }

        console.log(`Recieved valid numbers ${n1} and ${n2}!\n`);

        const result = sub(n1,n2);
        res.status(200).send(`Substraction of ${n1} and ${n2} is ${result}`);
    }

    catch(error) {
        res.status(500).send(`Unknown server error occured. Error: ${error}`);
        console.log(`Server error occured: ${error}`);
    }
});

app.get('/mul', (req,res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        console.log(n1,' & ',n2);

        if(isNaN(n1)) {
            res.status(400).send(`Error: Recieved n1 value of ${req.query.n1} is not a number1`);
            throw new Error("incorrect value!");
        }

        if(isNaN(n2)) {
            res.status(400).send(`Error: Recieved n2 value of ${req.query.n2} is not a number2`);
            throw new Error("incorrect value!");
        }

        console.log(`Recieved valid numbers ${n1} and ${n2}!\n`);

        const result = mul(n1,n2);
        res.status(200).send(`Multiplication of ${n1} and ${n2} is ${result}`);
    }

    catch(error) {
        res.status(500).send(`Unknown server error occured. Error: ${error}`);
        console.log(`Server error occured: ${error}`);
    }
});

app.get('/div', (req,res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        console.log(n1,' & ',n2);

        if(isNaN(n1)) {
            res.status(400).send(`Error: Recieved n1 value of ${req.query.n1} is not a number1`);
            throw new Error("incorrect value!");
        }

        if(isNaN(n2)) {
            res.status(400).send(`Error: Recieved n2 value of ${req.query.n2} is not a number2`);
            throw new Error("incorrect value!");
        }

        console.log(`Recieved valid numbers ${n1} and ${n2}!\n`);

        const result = div(n1,n2);
        res.status(200).send(`Division of ${n1} and ${n2} is ${result}`);
    }

    catch(error) {
        res.status(500).send(`Unknown server error occured. Error: ${error}`);
        console.log(`Server error occured: ${error}`);
    }
});