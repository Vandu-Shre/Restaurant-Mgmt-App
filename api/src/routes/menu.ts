import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Getting all menu items')
});

router.post('/', (req, res) => {
    res.send("Adding a new menu item")
});

router.put('/', (req, res) => {
    res.send('Updating an existing menu item');
})

router.delete('/', (req, res) => {
    res.send('Deleting an existing menu item')
})
  
export default router;