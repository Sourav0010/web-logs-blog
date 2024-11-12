import { Client, Account, ID } from 'appwrite';
import { conf } from '../config/conf';
class AppwriteAuth {
   client = new Client();
   account;
   constructor() {
      this.client.setEndpoint(conf.endPoint).setProject(conf.projectId);
      this.account = new Account(this.client);
   }

   async login({ email, password }) {
      try {
         return await this.account.createEmailPasswordSession(email, password);
      } catch (error) {
         console.log('Appwrite :: appwriteAuth ::login :: ', error);
      }
   }

   async createAccount({ email, password, name, premium }) {
      try {
         let session = await this.account.create(
            ID.unique(),
            email,
            password,
            name,
            premium
         );
         if (session) {
            return this.login({ email, password });
         } else {
            return session;
         }
      } catch (error) {
         console.log('Appwrite :: appwriteAuth ::createAccount :: ', error);
      }
   }

   async logout() {
      try {
         await this.account.deleteSessions();
      } catch (error) {
         console.log('Appwrite :: appwriteAuth ::logout :: ', error);
      }
   }

   async getUserAccount() {
      try {
         return await this.account.get();
      } catch (error) {
         console.log('Appwrite :: appwriteAuth ::getUserAccount :: ', error);
      }
   }

   async updateEmail({ email, password }) {
      try {
         return await this.account.updateEmail(email, password);
      } catch (error) {
         console.log('Appwrite :: appwriteAuth ::updateEmail :: ', error);
      }
   }

   async updateName({ name }) {
      try {
         return await this.account.updateName(name);
      } catch (error) {
         console.log('Appwrite :: appwriteAuth ::updateName :: ', error);
      }
   }

   async updatePassword({ password, newPassword }) {
      try {
         return await this.account.updatePassword(password, newPassword);
      } catch (error) {
         console.log('Appwrite :: appwriteAuth ::updatePassword :: ', error);
      }
   }

   async updatePhone({ phone, password }) {
      try {
         return await this.account.updatePhone(phone, password);
      } catch (error) {
         console.log('Appwrite :: appwriteAuth ::updatePhone :: ', error);
      }
   }
}

const appwriteAuth = new AppwriteAuth();

export default appwriteAuth;
