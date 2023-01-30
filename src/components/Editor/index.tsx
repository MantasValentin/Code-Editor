import React, { FunctionComponent as FC, useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import './index.css'

interface props {
  language: string;
  displayName: string;
  value: any;
  setCode: any;
}

const Editor: FC<props> = ({language, displayName, value, setCode}) => {
  const [open, setOpen] = useState(true)

  function handleChange(editor: any, data: any, value: any | any) {
    setCode(value)
  }

  return (
    <div className="">
      <div className="font-sans h-6 pl-1">
        {displayName}
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="rounded-r-full"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true
        }}
      />
    </div>
  )
}

export default Editor;
