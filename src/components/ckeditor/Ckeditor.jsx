import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Ckeditor = ({value, name, onChange}) => {
        return (
                <CKEditor
                    
                    editor={ ClassicEditor }
                    data={value || ""}
                    onReady={ editor => {
                        editor.editing.view.change((witer) => {
                            witer.setStyle("height","200px", editor.editing.view.document.getRoot())
                        })
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        // console.log( { event, editor, data } );
                        onChange && onChange(name, data)
                    } }
                />
        )
}

export default Ckeditor