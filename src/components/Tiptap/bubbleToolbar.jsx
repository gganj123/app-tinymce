import { BubbleMenu } from "@tiptap/react";
import { MdFormatBold, MdFormatItalic, MdFormatUnderlined, MdStrikethroughS } from "react-icons/md";
import styled from "styled-components";

const ToolbarContainer = styled.div`
  display: flex;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const ToolbarButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  transition: background 0.2s ease;

  &:hover {
    background: #f0f0f0;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const BubbleToolbar = ({ editor }) => {
  if (!editor) return null;

  return (
    <BubbleMenu
      editor={editor}
      tippyOptions={{ duration: 200 }}
      shouldShow={({ state }) => {
        return state.selection.from !== state.selection.to; // 선택된 텍스트가 있을 때만 표시
      }}>
      <ToolbarContainer>
        <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()}>
          <MdFormatBold />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()}>
          <MdFormatItalic />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <MdFormatUnderlined />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleStrike().run()}>
          <MdStrikethroughS />
        </ToolbarButton>
      </ToolbarContainer>
    </BubbleMenu>
  );
};

export default BubbleToolbar;
