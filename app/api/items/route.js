// export async function GET() {
//   return new Response("TEST")
// }

// export async function POST() {
//   return Response.json({color: "res"})
// }

//^Sending Data (GET)
export async function GET(req) {
  const type =req.nextUrl.searchParams.get('type')
  console.log('Type:',type)
  return Response.json([
    {title: "vivo"},
    {title: "iphone"}
  ])
}

//^ Receiving Data (POST)
export async function POST() {
  const body = await req.json()
  console.log(body);
  return Response.json({message: "POST success"})
}


