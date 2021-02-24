import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join"});
};
export const postJoin = async (req, res) => {
    const {
        body: {name, email, password, password2}
    } = req;
    if(password !== password2){
        res.stauts(400);
        res.render("join", { pageTitle: "Join"});
    } else {
        try {
            const user = await User({
                name, email
            });
            await User.register(user, password);
        } catch(error){
            console.log(error);
        }
        res.redirect(routes.home);
    }
};
export const getLogin = (req, res) => res.render("login", { pageTitle: "Login"});
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}
export const logout = (req, res) => {
    // todo: log out
    res.redirect(routes.home);
}
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "userDetail"});
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "editProfile"});
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "changePassword"});
