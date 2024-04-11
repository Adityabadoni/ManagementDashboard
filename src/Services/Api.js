import {EndPoint, baseUrl ,post} from "./EndPoint"
import axios from 'axios'

export const getPost =async()=>{
    return await axios.get(`${EndPoint.baseUrl}${EndPoint.post.posts}`)
}
export const addPost = async(body)=>{
    return await axios.post(`${EndPoint.baseUrl}${EndPoint.post.addPost}`,body)
}
export const UpdatePost = async(id,data)=>{
    return await axios.put(`${EndPoint.baseUrl}${EndPoint.post.upDate}${id}`,data)

}