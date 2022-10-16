import axios from '../utils/request'
import path from './path'

const api = {
  login(username, pwd){
    var userinfo = {
      'username':username,  
      'password':pwd,
    };
    return axios.post(path.baseUrl + path.login, userinfo)
  },
  emailVerify(userName, email){
    var emailinfo = {
      'username' : userName,
      'email' : email
    }
    return axios.post(path.baseUrl + path.email, emailinfo)
  },
  register(email, code, userName, nickName, pwd){
    var registerinfo = {
      'email': email,
      'code': code,
      'username': userName,
      'nickname': nickName,
      'password': pwd,
    };
    return axios.post(path.baseUrl + path.register, registerinfo)
  },
  getUserData(){
    return axios.get(path.baseUrl + path.dashboard)
  },
  getPageData(curpage, pagesize){
    console.log(path.baseUrl + path.pagination + "/" + curpage + "/" + pagesize)
    return axios.get(path.baseUrl + path.pagination + "/" + curpage + "/" + pagesize)
  },
  accurateSearch(mediname, location){
    return axios.get(path.baseUrl + path.search + mediname + '/' + location)
  },
  blurrySearch(mediname){
    return axios.get(path.baseUrl + path.search + mediname)
  },
  getMediInfo(id){
    return axios.get(path.baseUrl + path.getMedicine + id )
  },
  getMediNote(id){
    return axios.get(path.baseUrl + path.getNote + id )
  },
  addMediNote(id, mediNote){
    var noteinfo = {
      'note' : mediNote,
    }
    return axios.put(path.baseUrl + path.addNote + id, noteinfo)
  },
  takeMedicine(id, amount){
    return axios.get(path.baseUrl + path.takeMedicine + id + '/' + amount)
  },
  deleteMedicine(id) {
    return axios.delete(path.baseUrl + path.deleteMedicine + id)
  },
  addLocation(locInfo){
    console.log(locInfo)
    return axios.post(path.baseUrl + path.addLocation, locInfo)
  },
  deleteLocation(locInfo){
    console.log(locInfo)
    return axios.delete(path.baseUrl + path.delLocation + '/' + locInfo.locationid )
  },
  getFDAData(brandname){
    return axios.get("https://api.fda.gov/drug/label.json?search=openfda.brand_name:\"" + brandname + "\"&limit=1", {withCredentials: false})
  },
  uploadImage(file, progress){
    let formData = new FormData();
    formData.append("file", file)
    return axios({
        url: path.baseUrl + path.addMedicine + path.uploadImage,
        method: "post",
        data: {image : file},
        onUploadProgress(event) {
            let v = Math.round(event.loaded / event.total * 100)
            progress.value = v == 100 ? 80 : v
        },
        
        headers : {'Content-Type' : 'multipart/form-data'}
  
    })
  }

}
export default api
