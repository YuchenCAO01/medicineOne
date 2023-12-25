import axios from '../utils/request'
import path from './path'
import axios2 from "../utils/request2"

// Encapsulation of backend API request
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
  resetPassward(email, code, pwd){
    var passwordinfo = {
      'email': email,
      'code': code,
      'password': pwd,
    };
    return axios.post(path.baseUrl + path.resetPassword, passwordinfo)
  },
  getUserData(){
    console.log("Getting User data axios")
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
    // const config = {
    //   onUploadProgress(event) {
    //     let v = Math.round(event.loaded / event.total * 100)
    //     progress.value = v == 100 ? 80 : v
    //   },
    
    //   headers : {
    //     'Content-Type' : 'multipart/form-data',
    //     Authorization  : 'dqOfd2mnoSAKmByqw73K1hVlya5JhpcT' 
    //   }
    // }
    // const forms = new FormData()
    // forms.append('smfile', file)
    // // return axios2.post('/proxy/api/v2/upload', forms, config)
    // return axios2.post('https://sm.ms/api/v2/upload', forms, config)

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

  },
  // addMedicine(form){
  //   return axios.post(path.baseUrl + path.addMedicine, form)
  // }
  addMedicine(form) {
    // Convert the date to DD-MM-YYYY format
    console.log(form.validity)
    if (form.validity) {
        const dateParts = form.validity.split('/'); // Assuming the date is in YYYY-MM-DD format
        form.validity = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
    }
    console.log(form)

    // Then, send the POST request with the formatted form
    return axios.post(path.baseUrl + path.addMedicine, form);
  }

}
export default api
