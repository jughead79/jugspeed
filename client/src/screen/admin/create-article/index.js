import React,{useState} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '../../../ckeditor'


const CreateArticle = () => { 
    const [data,setData] = useState('') 


    return(
        <div>
          <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setData(data)
                        console.log( { event, editor, data } );
                    } }
                />
            {JSON.stringify(data)}
        </div>
    )
}
export default CreateArticle;