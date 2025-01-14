import { connectMongoDB } from "@/libs/models/MongoConnect";
import Product from "@/libs/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    // Extract the product ID from the URL directly
    const id = request.nextUrl.pathname.split("/").pop();

    if (!id) {
      throw new Error("Product ID is missing");
    }

    const body = await request.json();
    const { name, category, price } = body;

    await connectMongoDB();

    console.log(id, name, category, price);

    const data = await Product.findByIdAndUpdate(
      id,
      { name, category, price },
      { new: true } // Return the updated document
    );

    return NextResponse.json({ msg: "Updated Successfully", data });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
        msg: "Something went wrong",
      },
      { status: 400 }
    );
  }
}
