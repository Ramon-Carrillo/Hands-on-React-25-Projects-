import ReactDOM from 'react-dom/client'

const Greeting = () => {
  return <h2>Greeting</h2>
}
export default Greeting

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
