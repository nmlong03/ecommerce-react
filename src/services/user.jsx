import instance from "./instance";

const signin = (user) => {
    return instance.post('/signin', user)
}
const signup = (user) => {
    return instance.post('/signup', user)
}
export {signin, signup}