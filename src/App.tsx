import { useState } from "react";
import { Note } from "../src/models/note.model";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { Col, Container, Row } from "react-bootstrap";
import CreateNotes from "./components/CreateNotes";

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
