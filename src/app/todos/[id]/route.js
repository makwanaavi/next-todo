// import todos from "../../../../todos.json";
// export function GET(_, context) {
//   console.log("Hello");
//   console.log(context);

//   return new Response.json(JSON.stringify(todos[0]),
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   )
// }

// import todos from "../../../../todos.json";

// export function GET(_, context) {
//   console.log("Hello");
//   console.log(context);

//   const { id } = context.params;
//   const todo = todos.find((item) => item.id == id);

//   return new Response(JSON.stringify(todo), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

// import todos from "../../../../todos.json";
// export async function GET(_, context) {
//   const { id } = await context.params;
//   const todo = todos.find((item) => item.id == id);

//   if (!todo) {
//     return "Trt to again your id is not found";
//   }
//   return Response.json(todo);
// }

// import todos from "../../../../todos.json";

// import writeFile from "fs/promises";

// export async function PUT(requset, { params }) {
//   const editetododata = await requset.json();
//   const todo = todos.find((todo) => id == todo.id);
//   const { id } = await params;
//   const editetodo = {
//     ...todo,
//     ...editetododata,
//   };
//   todos.push(editetodo);
//   await writeFile("todos.json", JSON.stringify(todos, null, 2));
//   return Response.json(editetodo);
// }

export async function PUT(request, { params }) {
  const editTodoData = await request.json();
  const { id } = await params;
  const todoIndex = todos.findIndex((todo) => id === todo.id);
  const todo = todos[todoIndex];

  if (editTodoData.id) {
    return Response.json(
      { error: "Changing ID is not allow." },
      {
        status: 403,
      }
    );
  }

  const editedTodo = { ...todo, ...editTodoData };
  todos[todoIndex] = editedTodo;

  await writeFile("todos.json", JSON.stringify(todos, null, 2));
  return new Response(JSON.stringify(todos[todoIndex]), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// import todos from "../../../../todos.json";
export function GET(_, context) {
  console.log("Hello");
  console.log(context);
  const { id } = context.params;
  const todo = todos.find((item) => item.id == id);
  if (!todo) {
    return new Response(JSON.stringify({ message: "Todo not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
      statusText: "Bhai Teri Request sahi nahi hai, Dubara Try kar",
    });
  }
  return new Response(JSON.stringify(todo), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

import { writeFile } from "fs/promises";
import todos from "../../../../todos.json";

export async function DELETE(_, { params }) {
  const { id } = await params;
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return new Response(JSON.stringify({ error: "Todo not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  todos.splice(todoIndex, 1);

  await writeFile("todos.json", JSON.stringify(todos, null, 2));

  return new Response(null, {
    status: 204,
    statusText: "Okay Bhai tera Todo delete ho gaya hai!",
  });
}
