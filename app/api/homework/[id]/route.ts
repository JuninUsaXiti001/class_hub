import pool from "@/app/libs/database/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const numericId = Number(id);

  try {
    const querie = await pool.query(
      "DELETE FROM homeworks WHERE id = $1",
      [numericId]
    );

    return NextResponse.json(querie.rows, { status: 200 });
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}