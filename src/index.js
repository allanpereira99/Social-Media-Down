const axios = require('axios');
const api = "https://api-v1.majhcc.com/api"
class getSocial {
    static youtube(url) {
        return new Promise((resolve) => { resolve(axios.get(`${api}/dl/yt?url=${url}`)) })
    }
    static tiktok(url) {
        return new Promise((resolve) => {
            resolve(
                axios.get(`${api}/tk?url=${url}`))
        })
    }
    static twitter(url) {
        return new Promise((resolve) => {
            resolve(
                axios.get(`${api}/twitter?url=${url}`))
        })
    }
}
module.exports = getSocial