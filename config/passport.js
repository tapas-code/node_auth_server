const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
        },
        async (accessToken, refreshToken, profile, done) => {
            // const existingUser = await User.findOne({ googleId: profile.id });
            // if (existingUser) return done(null, existingUser);

            // const newUser = await User.create({
            //     googleId: profile.id,
            //     username: profile.displayName,
            //     email: profile.emails[0].value,
            // });
            // done(null, newUser);
            return done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
