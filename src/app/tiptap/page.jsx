"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TipTapMenu from "../../components/Tiptap/TipTapMenu";

// 추가 확장 기능
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import Image from "@tiptap/extension-image";
import OrderedList from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";
import CodeBlock from "@tiptap/extension-code-block";

const Tiptap = (props) => {
  const editor = useEditor({
    extensions: [StarterKit, Bold, Italic, Underline, Strike, Image, OrderedList, BulletList, CodeBlock],
    content: props.content,
    editable: props.isEditable,
  });

  if (!editor) return null;

  return (
    <>
      <TipTapMenu editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
