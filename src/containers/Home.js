import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { LinkContainer } from "react-router-bootstrap";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Home.css";

export default function Home(props) {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      if (!props.isAuthenticated) {
        return;
      }

      try {
        const notes = await loadNotes();
        setNotes(notes);
      } catch (e) {
        alert(e);
      }

      setIsLoading(false);
    }

    onLoad();
  }, [props.isAuthenticated]);

  function loadNotes() {
    return API.get("notes", "/uploads");
  }

  function renderNotesList(notes) {
    console.log(notes)
    return [{}].concat(notes).map((note, i) =>
   
      i !== 0 ? (
     
        <LinkContainer key={note.noteId} to={`/notes/${note.imageId}`}>
          {/* <ListGroupItem header={note.creationTime.trim().split("\n")[0]}></ListGroupItem> */}
       
            {"Created: " + new Date(note.creationTime).toLocaleString()}
         
        </LinkContainer>
      ) : (
        <LinkContainer key="new" to="/notes/new">
          <ListGroupItem>
            <h4>
              <b>{"\uFF0B"}</b> Add a new photo
            </h4>
          </ListGroupItem>
        </LinkContainer>
      )
    );
  }

  function renderLander() {
    return (
      <div className="lander">
        <h1>Photo AWganizer</h1>
        <p>A simple Photo Organizer</p>
        <img src="https://i.ibb.co/WFbk5mf/dog.png" alt="Dogs"></img>
      </div>
    );
  }

  function renderNotes() {
    return (
      <div className="notes">
        <PageHeader>Your Photos</PageHeader>
        <ListGroup>
          {!isLoading && renderNotesList(notes)}
        </ListGroup>
      </div>
    );
  }

  return (
    <div className="Home">
      {props.isAuthenticated ? renderNotes() : renderLander()}
    </div>
  );
}
