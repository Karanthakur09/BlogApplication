//basic auth service, remember we need to make it in such a way that it could independent of the backend service we are using
import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

//we can make it in class bcoz whenever someone's calls it then only it is created

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appWriteURL)
            .setProject(conf.appWriteProjectId)
        this.account = new Account(this.client);
    }
    async createAccount({ email, password, name })//object destructuring
    {
        try {
            const userAccount = await this.account.create(ID.unique, email, password, name);
            if (userAccount) {
                //call another method
                return this.login({ email, password });

            }
            else {
                return userAccount;
            }
        }
        catch (error) {
            throw error;
        }
    }
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        }
        catch (error) {
            throw error;
        }

    }
    //suppose user clicks and reaches on home page we need to check whether it is logged in or not
    async getCurrentUser() {
        try {
            return await this.account.login();
        }
        catch (error) {
            console.log("Appwrite service:: getCurrentUser::error", error);
        }
        return null;
    }
    async logout() {
        try {
            await this.account.deleteSessions();//delete all session from whichever different browser it has logged in
        }
        catch (error) {
            console.log("Appwrite service::logout::error", error);
        }
    }
}

const authService = new AuthService();
export default authService;