
const express = require('express');
const Product = require('./models/productModel');


const router = express.Router();



router.get('/', (req, res) => {
    res.send('Hello Node')
});

router.get('/blog', (req, res) => {
    res.send('Hello blog')
});

router.post('/product', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.send(product);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

router.get('/products', async (req, res) => {
    try {
        const product = await Product.find();
        res.send(product);

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

router.get('/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            res.status(404).send({ message: "Cannot find any product" })
        }
        res.send(product);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
// olmayan product-u bir defe update eliyib xeta mesaji alandan sonra serverde problem yaranlr
router.put('/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            res.status(404).send({ message: "Cannot find any product" })
            returnı;
        }
        const updateProduct = await Product.findById(id);
        res.status(200).send(updateProduct);

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

router.use('/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            res.status(404).send({ message: "Cannot find any product" })
            return;
        }
        res.status(200).send();

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});



module.exports = router;