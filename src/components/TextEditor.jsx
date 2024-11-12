import { Editor } from '@tinymce/tinymce-react';
import React from 'react';
import { conf } from '../config/conf';
import { Controller } from 'react-hook-form';

function TextEditor({ name, control, defaultValue = '' }) {
   return (
      <div className='w-full'>
         <Controller
            name={name || 'content'}
            control={control}
            render={({ field: { onChange } }) => (
               <Editor
                  apiKey={conf.tinyKey}
                  initialValue={defaultValue}
                  init={{
                     plugins:
                        'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount  linkchecker',
                     menubar: false,
                     toolbar:
                        'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                     branding: false,
                  }}
                  onEditorChange={onChange}
               />
            )}
         />
      </div>
   );
}

export default TextEditor;
