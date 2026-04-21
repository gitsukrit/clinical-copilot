export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
// @ts-ignore
import PDFParser from 'pdf2json';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided." }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const extractedText = await new Promise((resolve, reject) => {
      const pdfParser = new PDFParser(null, 1);

      pdfParser.on("pdfParser_dataError", (errData: any) => {
        console.error("PDF Parsing Error:", errData.parserError);
        reject(errData.parserError);
      });

      pdfParser.on("pdfParser_dataReady", () => {
        const rawText = pdfParser.getRawTextContent();
        resolve(rawText.replace(/\r\n/g, ' ').replace(/\n/g, ' ').replace(/\s+/g, ' ').trim());
      });

      pdfParser.parseBuffer(buffer);
    });

    return NextResponse.json({ 
      success: true, 
      text: extractedText 
    });

  } catch (error) {
    console.error("Secure Upload API Error:", error);
    return NextResponse.json({ error: "Failed to parse document securely." }, { status: 500 });
  }
}