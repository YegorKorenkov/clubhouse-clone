import React from 'react';
import BackButton from '../../components/BackButton';
import { Header } from '../../components/Header';
import { Room } from '../../components/Room/Room';
import Axios from '../../core/axios';

export default function RoomPage({ room }) {
  return (
    <>
        <Header />
        <div className="mt-40 container">
            <BackButton title="All rooms" href="/rooms" />
        </div>
        <Room title={room.title}/>
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  console.log(query.id)
  try {
    const {data} = await Axios.get('/rooms.json');
    const roomId = query.id;
    const room = data.find(obj => obj.id === roomId);
    return {
      props: {
        room
      },
    }
  } catch(error) {
    console.log("ERROR!");
    return {
      props: {
        room: []
      }
    }
  }
}
