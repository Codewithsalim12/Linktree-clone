import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();

    // Ensure all required fields are provided
    if (!body.handle || !body.links || !body.pic || !body.desc) {
      return new Response(
        JSON.stringify({
          success: false,
          error: true,
          message: "All fields (handle, links, pic, and desc) are required.",
          result: null,
        }),
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("bittree");
    const collection = db.collection("links");

    // Check if the handle is already claimed
    const doc = await collection.findOne({ handle: body.handle });

    if (doc) {
      return new Response(
        JSON.stringify({
          success: false,
          error: true,
          message: "This Bittree already exists!",
          result: null,
        }),
        { status: 409 }
      );
    }

    // Insert the new Bittree data
    const result = await collection.insertOne(body);

    return new Response(
      JSON.stringify({
        success: true,
        error: false,
        message: "Your Bittree has been generated!",
        result: result,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST /api/add:", error.message);
    return new Response(
      JSON.stringify({
        success: false,
        error: true,
        message: "An error occurred while processing your request.",
        result: null,
      }),
      { status: 500 }
    );
  }
}
