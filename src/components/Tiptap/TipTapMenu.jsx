import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdStrikethroughS,
  MdLink,
  MdImage,
  MdFormatListNumbered,
  MdFormatListBulleted,
  MdCode,
} from "react-icons/md";

const TipTapMenu = ({ editor }) => {
  if (!editor) return null;

  return (
    <div style={{ display: "flex", gap: "10px", padding: "10px", borderBottom: "1px solid #ccc" }}>
      {/* 굵게 */}
      <MdFormatBold
        size={20}
        cursor="pointer"
        onClick={() => editor.chain().focus().toggleBold().run()}
        style={{ color: editor.isActive("bold") ? "orange" : "black" }}
      />

      {/* 기울임 */}
      <MdFormatItalic
        size={20}
        cursor="pointer"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        style={{ color: editor.isActive("italic") ? "orange" : "black" }}
      />

      {/* 밑줄 */}
      <MdFormatUnderlined
        size={20}
        cursor="pointer"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        style={{ color: editor.isActive("underline") ? "orange" : "black" }}
      />

      {/* 취소선 */}
      <MdStrikethroughS
        size={20}
        cursor="pointer"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        style={{ color: editor.isActive("strike") ? "orange" : "black" }}
      />

      {/* 링크 삽입 */}
      <MdLink
        size={20}
        cursor="pointer"
        onClick={() => {
          const url = prompt("URL을 입력하세요:");
          if (url) editor.chain().focus().setLink({ href: url }).run();
        }}
        style={{ color: editor.isActive("link") ? "orange" : "black" }}
      />

      {/* 이미지 삽입 */}
      <MdImage
        size={20}
        cursor="pointer"
        onClick={() => {
          const url = prompt("이미지 URL을 입력하세요:");
          if (url) editor.chain().focus().setImage({ src: url }).run();
        }}
      />

      {/* 순서 있는 목록 */}
      <MdFormatListNumbered
        size={20}
        cursor="pointer"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        style={{ color: editor.isActive("orderedList") ? "orange" : "black" }}
      />

      {/* 순서 없는 목록 */}
      <MdFormatListBulleted
        size={20}
        cursor="pointer"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        style={{ color: editor.isActive("bulletList") ? "orange" : "black" }}
      />

      {/* 코드 블록 */}
      <MdCode
        size={20}
        cursor="pointer"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        style={{ color: editor.isActive("codeBlock") ? "orange" : "black" }}
      />
      {/* 순서 있는 리스트 (1. 2. 3.) */}
      <MdFormatListNumbered
        size={20}
        cursor="pointer"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        style={{ color: editor.isActive("orderedList") ? "orange" : "black" }}
      />

      {/* 순서 없는 리스트 (-, *) */}
      <MdFormatListBulleted
        size={20}
        cursor="pointer"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        style={{ color: editor.isActive("bulletList") ? "orange" : "black" }}
      />
    </div>
  );
};

export default TipTapMenu;
