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

import todos from "../../../todos.json";
import { writeFile } from "fs/promises";

export function GET() {
  return Response.json(todos);
}
export async function POST(requset) {
  const todo = await requset.json();
  const newtodo = {
    id: crypto.randomUUID(),
    text: todo.text,
    completed: "false",
  };
  todos.push(newtodo);
  writeFile("todos.json", JSON.stringify(todos, null, 1));
  return Response.json(newtodo);
}
