
import { NextResponse } from "next/server";
import { db } from "@/db";

export async function GET() {
  try {
    const result = await db.execute(
      `SELECT current_database() AS database, NOW() AS time`
    );

    return NextResponse.json({
      success: true,
      message: "Database connection works!",
      result,
    });
  } catch (error) {
    console.error("Database test failed:", error);

    return NextResponse.json(
      { success: false, message: "Database connection failed." },
      { status: 500 }
    );
  }
}
