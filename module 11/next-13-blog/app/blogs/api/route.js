import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const dataPath = path.join(process.cwd(), "data", "blogData.json");
  try {
    const jsonData = await fs.promises.readFile(dataPath, "utf8");
    // return NextResponse.json({ id: 1 });
    return NextResponse.json(JSON.parse(jsonData));
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
