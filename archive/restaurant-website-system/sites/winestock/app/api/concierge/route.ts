import { NextResponse } from 'next/server';
import { answerConciergeQuestion } from '../../../lib/concierge-kb';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const question = typeof body.question === 'string' ? body.question : '';

  return NextResponse.json(answerConciergeQuestion(question));
}
