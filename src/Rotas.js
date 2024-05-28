import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Home";
import Semana01 from "./Semana01/Semana01";
import Semana02 from "./Semana02/Semana02";
import Semana03 from "./Semana03/Semana3";
import Semana04 from "./Semana04/Semana4";
import Semana05 from "./Semana05/Semana5";
import BucketList from './Semana04/BucketList';
import Counter from './Semana04/Counter';
import CounterList from './Semana04/CounterList';
import Form from './Semana04/Form';
import Form2 from './Semana04/Form2';
import Form3 from './Semana04/Form3';
import Gallery from './Semana04/Gallery';
import List from './Semana04/List';
import List2 from './Semana04/List2';
import List3 from './Semana04/List3';
import List4 from './Semana04/List4';
import MovingDot from './Semana04/MovingDot';
import ShapeEditor from './Semana04/ShapeEditor';
import Toolbar from './Semana04/Toolbar';
import FormQuiz from './Semana05/FormQuiz';
import FormTicket from './Semana05/FormTicket';
import Accordion from './Semana05/Accordion';

export default function Rotas(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Semana01" element={<Semana01 />} />
            <Route path="/Semana02" element={<Semana02 />} />
            <Route path="/Semana03" element={<Semana03 />} />
            <Route path="/Semana04" element={<Semana04 />} />
            <Route path="/Semana05" element={<Semana05 />} />
            <Route path="/Semana04/bucketlist" element={<BucketList />} />
            <Route path="/semana4/counter" element={<Counter />} />
            <Route path="/semana4/counterlist" element={<CounterList />} />
            <Route path="/semana4/form" element={<Form />} />
            <Route path="/semana4/form2" element={<Form2 />} />
            <Route path="/semana4/form3" element={<Form3 />} />
            <Route path="/semana4/gallery" element={<Gallery />} />
            <Route path="/semana4/list" element={<List />} />
            <Route path="/semana4/list2" element={<List2 />} />
            <Route path="/semana4/list3" element={<List3 />} />
            <Route path="/semana4/list4" element={<List4 />} />
            <Route path="/semana4/movingdot" element={<MovingDot />} />
            <Route path="/semana4/shapeeditor" element={<ShapeEditor />} />
            <Route path="/semana4/toolbar" element={<Toolbar />} />
            <Route path="/semana5/formquiz" element={<FormQuiz />} />
            <Route path="/semana5/formticket" element={<FormTicket />} />
            <Route path="/semana5/accordion" element={<Accordion />} />
        </Routes>
        </BrowserRouter>
    )
}
