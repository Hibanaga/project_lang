import axios from "axios";


class AppService {
  instance:any;

  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:3000"
    })
  }

  async registerUser(body:any) {
    return await this.instance.post("/user",{
      ...body,
      isActive: false
    })
    .then((data:any) => data.data)
  }

  async login(query:any){
    const {email,password} = query;
    return await this.instance.get(`/active-user?password=${password}&email=${email}`)
    .then((data:any) => data.data)
  }

  async verifyCode(code: string,email:string) {
    return await this.instance
    .put(`/user`,{
      code,
      email
    })
    .then((data:any) => data.data)
  }

  async check_login(clientID:string) {
    return await this.instance.get(`/active-user?clientID=${clientID}`)
    .then((data:any) => {
      return data.data
    })
  }


  async getProgress(clientID:string) {
    return await this.instance.get(`/active-user?clientID=${clientID}`)
    .then((data:any) => data.data)
  }

  async getLesson(title:string) {
    return await this.instance.get(`/introduce-lessons?title=${title}`)
    .then((data:any) => data.data);
  }

  async updateProgress(data:any) {
    return await this.instance.put(`/active-user`,data).then((data:any) => data.data);
  }

  async getStoryLesson(theme:string) {
    return await this.instance.get(`/story-lesson?theme=${theme}`).then((data:any) => data.data)
  }

  async updateStoryLesson(data:any) {
    return this.instance.put("/active-user/story",data).then((data:any) => data.data);
  }

  async updateImagesUser(data:any) {
    return this.instance.put("/active-user/avatar",data).then((data:any) => data.data);
  }

  async getProfile(data:any) {
    return this.instance.get(`/user/me?clientID=${data}`).then((data:any) => data.data)
  }

}


const instance = new AppService();
export default instance