import { connectMongoDB } from "@/libs/models/MongoConnect";
import Product from "@/libs/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  try {
    // Get the product ID from the URL directly
    const id = request.nextUrl.pathname.split("/").pop(); 

    if (!id) {
      throw new Error("Product ID is missing");
    }

    await connectMongoDB();

    // Delete the product by ID
    await Product.findByIdAndDelete(id);

    return NextResponse.json({ msg: "Product Deleted Successfully" });
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
