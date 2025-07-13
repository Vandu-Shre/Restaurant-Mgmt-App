import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

const hardcodedUsers = [
    { id: 1, username: 'manager', password: 'passManager' },
    { id: 2, username: 'waiter', password: 'passWaiter' },
    { id: 3, username: 'chef', password: 'passChef' },
  ];

passport.use(new LocalStrategy(
  (username, password, done) => {
    const user = hardcodedUsers.find(u => u.username === username && u.password === password);
    if (!user) {
      return done(null, false, { message: 'Invalid credentials' });
    }
    return done(null, user);
  }
));

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id: number, done) => {
  const user = hardcodedUsers.find(u => u.id === id);
  if (!user) {
    return done(new Error('User not found'));
  }
  done(null, user);
});