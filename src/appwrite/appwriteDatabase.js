import { Client, Databases, ID, Query, Storage } from 'appwrite'
import { conf } from '../config/conf'

class appwriteDatabase {
    client = new Client()
    database
    storage
    constructor() {
        this.client.setEndpoint(conf.endPoint).setProject(conf.projectId)
        this.database = new Databases(this.client)
        this.storage = new Storage(this.client)
    }
    async createPost({
        title,
        content,
        summery,
        featureImage,
        userID,
        author,
        url = ID.unique(),
    }) {
        try {
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
                    url,
                }
            )
        } catch (err) {
            console.log('appwriteDatabase.createPost', err)
        }
    }

    getPost(postID) {
        try {
            return this.database.getDocument(
                conf.databaseId,
                conf.collectionId,
                postID
            )
        } catch (error) {
            console.log('appwriteDatabase.getPost', error)
        }
    }

    async deletePost(postID) {
        try {
            await this.database.deleteDocument(
                conf.databaseId,
                conf.collectionId,
                postID
            )
        } catch (error) {
            console.log('appwriteDatabase.deletePost', error)
        }
    }

    async editPost(postID, { title, content, summery, featureImage, userID }) {
        try {
            return await this.database.updateDocument(
                conf.databaseId,
                conf.collectionId,
                postID,
                {
                    title,
                    content,
                    summery,
                    featureImage,
                    userID,
                }
            )
        } catch (error) {
            console.log('appwriteDatabase.updatePost', error)
        }
    }
    async getPosts(page = 0, limit = 10) {
        try {
            return await this.database.listDocuments(
                conf.databaseId,
                conf.collectionId,
                [Query.limit(limit), Query.offset(page)]
            )
        } catch (error) {
            console.log('appwriteDatabase.getPosts', error)
        }
    }

    async uploadImage(file) {
        try {
            return await this.storage.createFile(
                conf.bucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async deleteImage(fileID) {
        try {
            await this.storage.deleteFile(conf.bucketId, fileID)
        } catch (error) {
            console.log('appwriteDatabase.deleteImage', error)
        }
    }

    getFilePreview(fileID) {
        try {
            return this.storage.getFilePreview(conf.bucketId, fileID)
        } catch (error) {
            console.log('appwriteDatabase.getFilePreview', error)
        }
    }

    async updateLike(postID, likedBy) {
        try {
            await this.database.updateDocument(
                conf.databaseId,
                conf.collectionId,
                postID,
                {
                    likedBy,
                }
            )
        } catch (error) {}
    }

    async addComment(postID, comment) {
        try {
            await this.database.updateDocument(
                conf.databaseId,
                conf.collectionId,
                postID,
                {
                    comment,
                }
            )
        } catch (error) {
            console.log('appwriteDatabase.addComment', error)
        }
    }

    async getComment(postID) {
        try {
            return await this.database.getDocument(
                conf.databaseId,
                conf.collectionId,
                postID
            )
        } catch (error) {
            console.log('appwriteDatabase.getComment', error)
        }
    }
}

const appwritedatabase = new appwriteDatabase()

export default appwritedatabase
