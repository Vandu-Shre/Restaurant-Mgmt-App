import passport from 'passport';
import { Router } from 'express';

const router = Router();

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/login',
    })
);
  
router.get('/profile', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).send('Not authenticated');
    }
    res.send(`Hello ${req.user}`);
});
  
export default router;