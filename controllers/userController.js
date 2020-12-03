import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join"});
};
export const postJoin = (req, res) => {
    const {
        body: {name, email, password, password2}
    } = req;
    if(password !== password2){
        res.stauts(400);
        res.render("join", { pageTitle: "Join"});
    } else {
        // todo: 사용자 등록
        // todo: 사용자 로그인
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
