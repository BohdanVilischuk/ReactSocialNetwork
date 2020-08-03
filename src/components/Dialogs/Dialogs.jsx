import React from "react";
import s from "./Dialogs.module.scss";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'

const Dialogs = (props) => {
 
  const dialog  = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  )

  const message = props.state.messages.map( m =>  <Message message={m.message} /> )
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialog }

      </div>
      <div className={s.messages}>
        { message }
      </div>
    </div>
  );
};

export default Dialogs;
