// import { mongodbAdapter } from "@better-auth/mongo-adapter";
// import { betterAuth } from "better-auth";

// export const auth = betterAuth({
//     database: mongodbAdapter(db, {
//         // Optional: if you don't provide a client, database transactions won't be enabled.
//         client
//     }),
// });

// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";
// // MongoDB Connection
// const client = new MongoClient(process.env.MONGO_URI);
// const db = client.db();

// export const auth = betterAuth({
//     database: mongodbAdapter(db, {
//         // Optional: if you don't provide a client, database transactions won't be enabled.
//         client
//     }),
//     // Email and Password
//     emailAndPassword: {
//         enabled: true,
//     },
// });

// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.MONGO_URI);
// await client.connect();

// const db = client.db();

// export const auth = betterAuth({
//     database: mongodbAdapter(db, {
//         client
//     }),
//     emailAndPassword: {
//         enabled: true,
//     },
// });
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_URI);
client.connect();

const db = client.db("dragon-news");

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),
    emailAndPassword: {
        enabled: true,
    },
});