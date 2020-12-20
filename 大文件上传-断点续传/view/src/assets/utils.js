import axios from 'axios'

export const readFile = (file, type = 'buffer') => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    if (type === 'buffer') {
      fileReader.readAsArrayBuffer(file)
    }
    fileReader.onload = function (e) {
      resolve(e.target.result)
    }
  })
}

export function postData(url, data) {
  return axios.post(url, data, {headers: { "Content-Type": "multipart/form-data" }})
}
export function getData(url) {
  return axios.get(url)
}