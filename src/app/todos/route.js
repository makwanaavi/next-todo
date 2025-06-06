// import todosdata from "../../../todos.json"; // with {type : "json"}
// console.log(todosdata);

// import { headers } from "next/headers";

// export function GET() {
//   console.log("Hello, this is the GET request!");
//   const data = { name: "Avi" };

//   return new Response(JSON.stringify(data), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

// import todos from "../../../todos.json"
// export function GET(_, context) {
//     console.log(context)
//     console.log(todos[0])
//   console.log("Hello, this is the GET request!");

//   const data = { name: "Avi" };
//   return new Response(JSON.stringify(todos), {
//     status: 200,
//     statusText: "Okay Bhai Tera StatusText Sahi Hai...",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

// import todos from "../../../todos.json";
// export function GET() {
//   console.log("Hello, this is the GET request!");
//   return new Response(JSON.stringify(todos[1]), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

// export function GET(){
//     console.log("Hey this is the Get request !")
//     return new Response(JSON.stringify({message:"Hello"}), {
//         status : 200,
//         statusText : "Okay",
//         headers :{
//             "Content-Type" : "application/json"
//         }
//     })
// }

// export async function GET() {
//   const req = await new Request(
//     "https://jsonplaceholder.typicode.com/todos?_limit= 5"
//   );
//   const res = await fetch(req);
//   const data = await res.json();
//   console.log(data);
//   return new Response(JSON.stringify(data), {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     status: 200,
//     statusText: "Bhai Data Mill Gaya Hai !",
//   });
// }

// import { readFile } from "fs/promises";
// import todos from "../../../todos.json";
// import { writeFile } from "fs/promises";
// import mongoose from "mongoose";
import { ConnectDb } from "../../../lib/ConnectDB";
import Todo from "../../../models/todoModel";

export async function GET() {
  await ConnectDb();
  // const result = await mongoose.connection.db
  //   .collection("todos")
  //   // .insertMany([{title : "Learn Node.js", completed : false}])
  //   .insertOne({ title: "Learn Node.js", completed: false });
  // console.log(result);

  // const result = await Todo.find()
  // console.log(result)

  const allTodo =  await Todo.find() 
  // const todoJsonstring = await readFile("./todos.json", "utf-8");
  // const todos = JSON.parse(todoJsonstring);
  return Response.json(allTodo.map(({id, text, completed}) => ({id, text, completed})));
}

export async function POST(requset) {
  const todo = await requset.json();
  const {id, text, completed} = await Todo.create({text: todo.text})
  // {
  //   id: crypto.randomUUID(),
  //   text: todo.text,
  //   completed: "false",
  // };
  // todos.push(newtodo);
  // writeFile("todos.json", JSON.stringify(todos, null, 1));

  return Response.json({id, text, completed}  ,{
    status : 201, 
  });
}
