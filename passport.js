import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import User from "./models/User";
import { facebookLoginCallback, githubLoginCallback } from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(new GithubStrategy({
        clientID: process.env.GH_ID,
        clientSecret: process.env.GH_SECRET,
        redirect_uri: `http://localhost:4000${routes.githubCallback}`
    },
    githubLoginCallback
));

passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FB_ID,
            clientSecret: process.env.FB_SECRET,
            callbackURL: `http://localhost:4000${routes.facebookCallback}`,
            profileFields: ["id", "display", "photos", "email"],
            scope: ["public_profile", "email"]
        },
        facebookLoginCallback
    )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser(function(id, done){   
    User.findById(id, function(err, user){
        done(err,user);
    });
});