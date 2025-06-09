import { ConnectDb } from "../../../../lib/ConnectDB";
import User from "../../../../models/userModel";

export async function POST(request) {
  try {
    await ConnectDb();

    const userData = await request.json();

    const newUser = await User.create(userData);

    return new Response(JSON.stringify(newUser), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);

    return new Response(
      JSON.stringify({ error: "Failed to create user" }),
      { status: 500 }
    );
  }
}
