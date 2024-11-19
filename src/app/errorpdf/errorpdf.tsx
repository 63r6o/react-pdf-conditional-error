"use client";

import { Document, Page, PDFViewer, View, Text } from "@react-pdf/renderer";

export default function ErrorPDF({ text }: { text: string }) {
  return (
    <PDFViewer className="h-full w-1/2">
      <Document>
        <Page>
          <View>{text.length > 0 && <Text>{text}</Text>}</View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
