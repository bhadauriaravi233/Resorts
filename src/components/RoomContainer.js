import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomList from './RoomList'
import { RoomConsumer } from '../Context'
import { withRoomsConsumer } from '../Context'


function RoomContainer({ context }) {
    const { sortedRooms, rooms } = context;

    return (

        <>
            {/* <RoomsFilter rooms={rooms} /> */}
            <RoomList rooms={sortedRooms} />
        </>
    );
}

export default withRoomsConsumer(RoomContainer);