"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { tinyMCEFonts } from "@/utils/editor/fonts";
import { imageUploadHandler } from "@/utils/editor/imageUploadHandler";
import { fetchThumbnail } from "@/utils/editor/fetchThumnail";

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
            "fontfamily bold italic underline fontsize | forecolor backcolor | alignleft aligncenter alignright alignjustify | " +
            "| link image media |bullist numlist outdent indent | removeformat ",
          ...tinyMCEFonts,
          setup: function (editor) {
            editor.on("change", async function () {
              const content = editor.getContent();
              console.log(" 현재 TinyMCE 내용:", content);

              const match = content.match(/(https?:\/\/[^\s]+)/);
              if (match) {
                const url = match[0];
                console.log(" 감지된 링크:", url);

                const thumbnail = await fetchThumbnail(url);
                console.log(" 가져온 썸네일:", thumbnail);

                if (thumbnail) {
                  console.log(" 썸네일 추가 중...");
                  editor.setContent(content + `<img src="${thumbnail}" style="max-width:100%;"/>`);
                } else {
                  console.warn("⚠️ 썸네일을 찾을 수 없음");
                }
              }
            });
          },
        }}
        onEditorChange={(newContent) => setContent(newContent)}
      />
      <p className="mt-4">📝 입력된 내용:</p>
      <div className="border p-4 mt-2 bg-gray-100">{content}</div>
    </div>
  );
}
