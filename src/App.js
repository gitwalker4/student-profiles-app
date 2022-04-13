import { useState, useEffect} from 'react'
import axios from 'axios';
import Students from './components/Students'
import Header from './components/Header';

function App() {
  const [students, setStudents] = useState([])

  const fetchStudents = async () => {
    const result = await axios.get('https://api.hatchways.io/assessment/students')
    setStudents(result.data.students)
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  return (
    <div className="App">
      <Header />
      <Students students={students} />
    </div>
  );
}

export default App;
