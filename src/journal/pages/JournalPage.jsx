import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { NoteView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { startNewNote } from "../../store/journal/thunks"
import { useDispatch, useSelector } from "react-redux"


export const JournalPage = () => {

  const dispatch = useDispatch();
  const {isSaving,active}= useSelector(state => state.journal);

  const onClickNewnNote = () => {
    dispatch(startNewNote());
  }
  return (
    <JournalLayout>

      {
        (!!active)
        ? <NoteView/>
        : <NothingSelectedView/>
      }
      {/*<NothingSelectedView/>*/}
      {/* NothingSelect */}
      {/*<NoteView/>*/}

      <IconButton
        onClick={onClickNewnNote}
        disabled={isSaving}
        size="large"
        sx={{
          color: 'white',
          background:'error.main',
          ':hover':{
            backgroundColor:'error.main',
            opacity:0.9
          },
          position:'fixed',
          right:50,
          bottom:50
        }}
      
      >
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>
    </JournalLayout>
  )
}
