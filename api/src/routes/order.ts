import { Router } from 'express';

const router = Router();

// Get all orders
router.get('/', (req, res) => {
    res.send('Getting all orders')
});

// Get details of specific order
router.get('/:orderId', (req, res) => {
    res.send(`Getting all items in order ${req.params.orderId}`)
});

// Create a new order
router.post('/', (req, res) => {
    res.send("Creating a new order")
});

// Add a new order item to existing order
router.post('/:orderId/:menuItemId', (req, res) => {
    res.send(`Adding a ${req.params.menuItemId} to order ${req.params.orderId}`)
});

// Modify an item in the order
router.put('/:orderId/:itemId', (req, res) => {
    res.send(`Updating order ${req.params.orderId}`);
})

// Delete an item from the order
router.delete('/:orderId/:itemId', (req, res) => {
    res.send(`Removing order item ${req.params.itemId} from ${req.params.orderId}`)
})

// Delete the created order
// Only delete open orders (Closed orders cannot be deleted)

  
export default router;