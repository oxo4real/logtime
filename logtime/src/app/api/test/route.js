import { headers } from "next/headers"


export async function GET(req)
{
	return Response.json({
		name: "Abdellah"
	}, {status: 200})
}