import { Client, Databases, ID, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appWriteURL)
            .setProject(conf.appWriteProjectId)

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWirteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )

        }
        catch (error) {
            console.log("Appwrite::createPost::error", error);
        }

    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWirteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )

        }
        catch (error) {
            console.log("Appwrite::updatePost::error", error);
        }

    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWirteCollectionId,
                slug
            )
            return true;
        }
        catch (error) {
            console.log("Appwrite::deletePost::error", error);
            return false;
        }
    }
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWirteCollectionId,
                slug
            )
        }
        catch (error) {
            console.log("Appwrite::getPost::error", error);
            return false;
        }

    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWirteCollectionId,
                queries,
            )
        }
        catch (error) {
            console.log("Appwrite::getPosts::error", error);
            return false;
        }

    }
    //file upload service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
        }
        catch (error) {
            console.log("Appwrite::uploadFile::error", error);
            return false;
        }
    }
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
            return true;

        }
        catch (error) {
            console.log("Appwrite::deleteFile::error", error);
            return false;
        }
    }
    //preview file option also

    getFilePreview() {
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        )
    }

}

const service = new Service();
export default service;