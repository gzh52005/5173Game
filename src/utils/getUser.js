import {
    request
} from './request'

export async function islogin() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
    let hasLogin
    if (currentUser) {
        let token = currentUser.token
        let p =await request.get('/homeApi/user/token', {
            token: token
        })
        if (p.flag) {
            return hasLogin = true
        } else {
            return hasLogin = false
        }
    } else {
        return hasLogin = false
    }
}

export async function getUserName() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
    let name
    if (currentUser) {
        let uid = currentUser.uid
        let p = await request.get(`/homeApi/user/getuser/${uid}`)
        if (p.flag) {
            return name = p.data[0].name
        }
    }
}

export function quit(){
    localStorage.removeItem('currentUser')
}
