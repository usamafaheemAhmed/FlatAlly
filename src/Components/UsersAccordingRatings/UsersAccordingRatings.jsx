import React, { useEffect } from 'react'
import AntCard from './AntCard'
import { useRecoilState, useRecoilValue } from 'recoil'
import { defaultApiUrl, threeUserExample } from '../../Atom'
import { GetAxios } from '../../assets/Alert/Alert'

const UsersAccordingRatings = () => {

    let [threeUserExampleObj1, setThreeUserExampleObj] = useRecoilState(threeUserExample)
    let threeUserExampleObj = useRecoilValue(threeUserExample)
    let defaultApi = useRecoilValue(defaultApiUrl);

    useEffect(() => {
        GetData()
    }, [])

    const GetData = async () => {
        try {
            const response = await GetAxios(`${defaultApi}/api/HomePageSetting`);
            console.log(response)
            setThreeUserExampleObj(response); // Store the fetched data in Recoil state
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle the error appropriately (e.g., show a message to the user)
        }
    };



    return (
        <div className='d-flex flex-wrap flex-md-nowrap justify-content-around align-item-center gap-4'>
            {threeUserExampleObj.map((elem, index) => {
                return (<AntCard data={elem} />)
            })}
            {threeUserExampleObj.length == 1 &&
                <React.Fragment>
                    <AntCard />
                    <AntCard />
                </React.Fragment>
            }
            {threeUserExampleObj.length == 2 &&
                <AntCard />
            }
        </div>
    )
}

export default UsersAccordingRatings
