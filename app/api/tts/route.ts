import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    const token = process.env.TTS_API_TOKEN;
    if (!token) {
      throw new Error('TTS API token is missing from environment variables');
    }

    const ttsOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        voice_id: 'emily',
        text,
        speed: 1,
        sample_rate: 24000,
        add_wav_header: true,
      }),
    };

    const ttsResponse = await fetch(
      'https://waves-api.smallest.ai/api/v1/lightning/get_speech',
      ttsOptions
    );

    if (!ttsResponse.ok) {
      throw new Error(`TTS API error: ${ttsResponse.statusText}`);
    }

    const audioBuffer = await ttsResponse.arrayBuffer();

    return new NextResponse(audioBuffer, {
      headers: {
        'Content-Type': 'audio/wav',
        'Content-Disposition': 'inline; filename="output.wav"',
      },
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Failed to process the TTS request' },
      { status: 500 }
    );
  }
}
