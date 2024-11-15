export const conf = {
   endPoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
   projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
   collectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
   databaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
   bucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
   tinyKey: String(import.meta.env.VITE_TINY_API_KEY),
   teamId: String(import.meta.env.VITE_APPWRITE_TEAM_ID),
};
