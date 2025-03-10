import { useEditor, EditorContent } from "@tiptap/react"; // ✅ @tiptap/react에서 가져와야 함
import StarterKit from "@tiptap/starter-kit";

const Tiptap = (props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      BulletList,
      OrderedList,
      ListItem.configure({
        HTMLAttributes: { class: "list-item" },
      }),
    ],
  });
  return <EditorContent editor={editor} />;
};
export default Tiptap;
