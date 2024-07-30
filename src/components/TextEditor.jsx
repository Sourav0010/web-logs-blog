import { Editor } from '@tinymce/tinymce-react'
import React from 'react'
import {conf} from "../config/conf"
import { Controller } from 'react-hook-form'

function TextEditor({name , control, defaultValue = ''}) {
  return (
    <div className='w-full'>
      <Controller
        name={name || 'content'}
        control={control} 
        render={({field : {onChange}})=>(
          <Editor
            apiKey={conf.tinyKey}
            initialValue={defaultValue}
            init={{
            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate  mentions  tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
            menubar: false,
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          }}
            onEditorChange={onChange}
          />
        )} 
      />
    </div>
  )
}

export default TextEditor