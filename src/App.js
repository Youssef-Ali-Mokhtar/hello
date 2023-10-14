import './App.css';
import { motion } from 'framer-motion';
function App() {
  return (
    <div className="App">
      <motion.p
        initial = {{x: '-100vw'}}
        animate = {{x:0}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Giggity
      </motion.p>
    </div>
  );
}

export default App;
