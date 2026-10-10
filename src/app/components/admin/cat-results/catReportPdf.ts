// Turns a captured report canvas into an A4 PDF using exactly the same page-splitting
// logic as the website's "Download Result" button (dashboard/school/studentscore-modal.tsx),
// but returns the bytes instead of saving, so many reports can be zipped together.
export async function canvasToPdf(canvas: HTMLCanvasElement): Promise<ArrayBuffer> {
  const { jsPDF } = await import("jspdf");
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const marginTop = 20,
    marginBottom = 20,
    marginLeft = 25,
    marginRight = 25;
  const usablePageWidth = pageWidth - marginLeft - marginRight;
  const usablePageHeight = pageHeight - marginTop - marginBottom;

  const pdf = new jsPDF("p", "pt", "a4");
  let yPosition = 0;
  let pageIndex = 0;

  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  if (!ctx) throw new Error("Canvas is not available");

  const pageCanvas = document.createElement("canvas");
  const pageContext = pageCanvas.getContext("2d");
  if (!pageContext) throw new Error("Canvas is not available");

  while (yPosition < canvas.height) {
    let sliceHeight = (usablePageHeight * canvas.width) / usablePageWidth;
    if (yPosition + sliceHeight > canvas.height) {
      sliceHeight = canvas.height - yPosition;
    }

    // Smart check: avoid cutting through text/images at the page break.
    const buffer = 15;
    let adjustedSliceHeight = sliceHeight;
    if (yPosition + sliceHeight < canvas.height) {
      const imageData = ctx.getImageData(0, yPosition + sliceHeight - buffer, canvas.width, buffer);
      let hasDarkPixels = false;
      for (let i = 0; i < imageData.data.length; i += 4) {
        const r = imageData.data[i];
        const g = imageData.data[i + 1];
        const b = imageData.data[i + 2];
        if (r < 240 || g < 240 || b < 240) {
          hasDarkPixels = true;
          break;
        }
      }
      if (hasDarkPixels) {
        adjustedSliceHeight -= buffer;
      }
    }

    pageCanvas.width = canvas.width;
    pageCanvas.height = adjustedSliceHeight;
    pageContext.clearRect(0, 0, pageCanvas.width, pageCanvas.height);
    pageContext.drawImage(
      canvas,
      0,
      yPosition,
      canvas.width,
      adjustedSliceHeight,
      0,
      0,
      canvas.width,
      adjustedSliceHeight
    );

    const imgData = pageCanvas.toDataURL("image/jpeg", 0.7);
    if (pageIndex > 0) pdf.addPage();
    const imgHeight = (adjustedSliceHeight * usablePageWidth) / canvas.width;
    pdf.addImage(imgData, "JPEG", marginLeft, marginTop, usablePageWidth, imgHeight, undefined, "FAST");

    yPosition += adjustedSliceHeight;
    pageIndex++;
  }

  return pdf.output("arraybuffer");
}
