import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { APP_PATHS } from 'src/constants';

export async function GET(request) {
  const path = request.nextUrl.searchParams.get('path');

  if (path === APP_PATHS.RESTAURANTS) {
    revalidatePath(path);
    return NextResponse.json({ revalidated: true, now: Date.now() });
  }

  return NextResponse.json({ revalidated: false, path });
}
