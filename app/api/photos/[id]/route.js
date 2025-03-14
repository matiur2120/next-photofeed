import { getPhotoById } from "@/lib/images-data";
import { NextResponse } from "next/server";

export async function GET( request,{ params }) {
  const photo = await getPhotoById(params?.id);
  if (!photo) {
    return NextResponse.error(new Error("Photo not found"), 404);
  }
  return NextResponse.json(photo);
}