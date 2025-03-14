import { getAllPhotos } from "@/lib/images-data";
import { NextResponse } from "next/server";

export async function GET() {
  const photos = await getAllPhotos();
  return NextResponse.json(photos);
}