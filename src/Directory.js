import React from 'react';
import { Userlist } from './Userlist';

export function Directory(props) {
  return (
    <div className="Directory">
      <h2>Furry friends</h2>
      <Userlist
        usernames={['Rollins', 'Groot', 'Henry']}
        onChoose={props.onChoose}
      />
    </div>
  );
}