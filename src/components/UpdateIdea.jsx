import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { doc, setDoc } from "firebase/firestore";
import UpdateIcon from "@mui/icons-material/Update";
import db from "../firebase/firebaseConfig";

export default function AlertDialog({ id }) {
  const [updateIdea, setUpdateIdea] = useState([]);
  const [updateUrl, setUpdateurl] = useState([]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateIdeaFunc = async (ideetje, imgtje) => {
    await setDoc(doc(db, "idea's", id), { idea: ideetje, img: imgtje });
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <UpdateIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Update your idea"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p className="idea">idea</p>
            <input
              onChange={(e) => updateIdeaFunc(e.target.value)}
              value={updateIdea}
              type="text"
              name="ideaInputField"
              placeholder=""
            />
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            <br></br>
            <p className="idea">img url</p>
            <input
              onChange={(e) => updateIdeaFunc(e.target.value)}
              value={updateUrl}
              type="text"
              name="imgInputField"
              placeholder=""
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={updateIdeaFunc && handleClose} autoFocus>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
