import './App.css';
import TextField from '@mui/material/TextField';

function App() {
  return (
   <>
    <h1>Listify - A Productivity Tracker</h1>
    <div className='Main'>
      <div className='SubmitTask'>
          <form>
            <TextField sx={{ m: 1, width: '100ch' }} id="outlined-basic" label="Enter the task you have to complete" variant="outlined" required></TextField>
            <button type='submit'>Add Task</button>
          </form>
      </div>
      <div className='Body'>
          <div className='TaskList'>
            <p>This is the task list</p>
          </div>
          <div className='Clock'>
          <p>This is the Clock section</p>
          </div>
       </div>
    </div>
   </>
  );
}

export default App;
