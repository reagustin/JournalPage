import { useDispatch } from "react-redux";
import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    <JournalLayout>
      {/* <Typography>Excepteur est voluptate labore nostrud elit officia tempor est enim magna do. Eu nostrud enim nisi do. Excepteur est in aute voluptate qui deserunt proident ea aute ullamco pariatur. Lorem adipisicing cupidatat quis laborum nostrud ex enim in nisi aliquip laboris anim sit. Reprehenderit occaecat aliqua culpa laboris sint consequat non mollit elit laboris veniam. Ullamco et est ex non veniam eu.</Typography> */}
    
    <NothingSelectedView/>

    {/* <NoteView/> */}

    <IconButton
      onClick={onClickNewNote}
      size='large'
      sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ':hover': { backgroundColor: 'error.main', opacity: 0.9},
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
    >
      <AddOutlined sx={{ fontSize: 30 }} />
    </IconButton>
    
    </JournalLayout>
  )
}
