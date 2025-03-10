export const imageUploadHandler = (blobInfo, success, failure) => {
  try {
    if (!blobInfo || !blobInfo.blob) {
      failure("이미지 데이터가 올바르지 않습니다.");
      return;
    }

    let file = blobInfo.blob();
    let fileType = file.type;
    let fileSize = file.size;

    console.log("드래그 앤 드롭된 파일 MIME 타입:", fileType);
    console.log("파일 크기 (바이트):", fileSize);

    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    if (fileSize > MAX_FILE_SIZE) {
      failure("이미지 크기가 너무 큽니다. 최대 5MB까지 업로드 가능합니다.");
      return;
    }

    if (!fileType || fileType === "application/octet-stream") {
      fileType = "image/png";
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(fileType)) {
      failure("지원하지 않는 파일 형식입니다. JPG, PNG, GIF, WebP 파일만 업로드 가능합니다.");
      return;
    }

    const blobURL = URL.createObjectURL(file);
    console.log("Blob URL:", blobURL);

    Promise.resolve(blobURL).then((resolvedURL) => {
      success(resolvedURL);
    });
  } catch (err) {
    failure("예외 발생: " + err);
  }
};
