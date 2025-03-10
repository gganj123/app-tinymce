"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Image from "@tiptap/extension-image";
import CodeBlock from "@tiptap/extension-code-block";
import styled from "styled-components";
import BubbleToolbar from "../../components/Tiptap/bubbleToolbar";
import TipTapMenu from "../../components/Tiptap/TipTapMenu";

const EditorContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
`;

const Tiptap = (props) => {
  const editor = useEditor({
    extensions: [StarterKit, Bold, Italic, Underline, Strike, BulletList, OrderedList, ListItem, Image, CodeBlock],
    content: props.content,
    editable: props.isEditable,
  });

  if (!editor) return null;

  return (
    <>
      <TipTapMenu editor={editor} />
      <BubbleToolbar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
