"use client";

import { Document, Page, PDFViewer, View, Text } from "@react-pdf/renderer";

export default function WorkingPDF({ text }: { text: string }) {
  return (
    <PDFViewer className="h-full w-1/2">
      <Document>
        <Page>
          <View render={() => (text.length > 0 ? <Text>{text}</Text> : null)} />
        </Page>
      </Document>
    </PDFViewer>
  );
}
