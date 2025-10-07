//This is the root route of my API
//Task: READ data
export function GET() {
  return new Response("This is the root route. GET comfy!");
}

//=====================================
//API routes in Next also have access to params, dynamic params, body as part of the Request object
