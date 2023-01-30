import { useEffect, useState } from "react"
import useLocalStorage from "./hooks/useLocalStorage"
import Editor from "./components/Editor"

function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <div className="App flex w-screen h-screen overflow-hidden">
      <div className="flex-1 max-w-md pr-4 bg-secondary text-white">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          setCode={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          setCode={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          setCode={setJs}
        />
      </div>
      <div className="flex-1">
        <iframe
          className="w-full h-full"
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  )
} 

export default App;