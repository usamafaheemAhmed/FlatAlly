import React from 'react'
import Motive from '../Motive/Motive'
import { content } from '../../assets/Content/Content'

const Home = () => {
    let { HomeBlock } = content;
    return (
        <div>
            <Motive Obj={HomeBlock[0]} owner={"1"} />
        </div>
    )
}

export default Home
