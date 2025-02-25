"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { tinyMCEFonts } from "@/utils/fonts";
import { imageUploadHandler } from "@/utils/imageUploadHandler";

const Editor = dynamic(() => import("@tinymce/tinymce-react").then((mod) => mod.Editor), { ssr: false });

export default function TinyEditorPage() {
  const [content, setContent] = useState("");
  const editorRef = useRef(null);

  useEffect(() => {
    return () => {
      if (editorRef.current) {
        editorRef.current.remove();
      }
    };
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">TinyMCE Editor</h1>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        apiKey="h4ajbkwbabs0iscsxta87pp8c295rgaxs5lz9june45vjar0"
        initialValue="<p>Start writing here...</p>"
        init={{
          height: 500,

          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "searchreplace",
            "wordcount",
            "insertdatetime",
            "media",
            "table",
            "code",
          ],
          toolbar:
            "undo redo | " +
            "fontfamily bold italic underline | forecolor backcolor | alignleft aligncenter alignright alignjustify | " +
            "| link image media |bullist numlist outdent indent | removeformat ",
          ...tinyMCEFonts,

          images_upload_url: "/api/upload",
          file_picker_types: "image",
          automatic_uploads: true,
          images_upload_handler: imageUploadHandler,
          content_style: "body { font-family: Noto Sans KR, sans-serif; font-size: 20px; }",
        }}
        onEditorChange={(newContent) => setContent(newContent)}
      />
      <p className="mt-4">📝 입력된 내용:</p>
      <div className="border p-4 mt-2 bg-gray-100">{content}</div>
    </div>
  );
}
