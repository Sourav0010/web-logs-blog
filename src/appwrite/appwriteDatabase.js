import { Client, Databases, ID, Storage } from "appwrite";
import {conf} from '../config/conf'

class appwriteDatabase {
    client = new Client();
    database;
    storage;
    constructor(){
        this.client
        .setEndpoint(conf.endPoint)
        .setProject(conf.projectId);
        this.database = new Databases(this.client);
        this.storage = new Storage(this.client);
    }
    async createPost({title,content,summery,featureImage,userID,author,url = ID.unique()}) {
        try{
            return await this.database.createDocument(
                conf.databaseId,
                conf.collectionId,
                url,
                {
                    title,
                    content,
                    summery,
                    featureImage,
                    userID,
                    author,
                    url
                }
            )
        }catch(err){
            console.log("appwriteDatabase.createPost",err)
        }
    }

    async getPost(postID){
        try {
            return await this.database.getDocument(
                conf.databaseId,
                conf.collectionId,
                postID
            )
        } catch (error) {
            console.log("appwriteDatabase.getPost",error)
        }
    }

    
    async deletePost(postID){
        try {
            await this.database.deleteDocument(
                conf.databaseId,
                conf.collectionId,
                postID
            )
        } catch (error) {
            console.log("appwriteDatabase.deletePost",error)
        }
    }

    async editPost (postID,{title,content,summery,featureImage,userID}) {
        try {
            return await this.database.updateDocument(
                conf.databaseId,
                conf.collectionId,
                postID,
                {
                    title,
                    content,
                    author,
                    summery,
                    featureImage,
                    userID
                }
            )
        } catch (error) {
            console.log("appwriteDatabase.updatePost",error)
        }
    }
    async getPosts(){
        try {
            return await this.database.listDocuments(
                conf.databaseId,
                conf.collectionId
            )
        } catch (error) {
            console.log("appwriteDatabase.getPosts",error)
        }
    }


    async uploadImage(file){
        try {
            return await this.storage.createFile(
                conf.bucketId,
                ID.unique(),
                file);
        } catch (error) {
            console.log("appwriteDatabase.uploadImage",error)
        }
    }

    async deleteImage(fileID){
        try {
            await this.storage.deleteFile(conf.bucketId,fileID);
        } catch (error) {
            console.log("appwriteDatabase.deleteImage",error)
        }
    }

     getFilePreview(fileID){
        try {
            return this.storage.getFilePreview(conf.bucketId,fileID);
        } catch (error) {
            console.log("appwriteDatabase.getFilePreview",error)
        }
    }
}


const appwritedatabase = new appwriteDatabase();

export default appwritedatabase;