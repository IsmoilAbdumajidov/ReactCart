import React, { useEffect, useState } from 'react';
import { productsUrl } from '../fetches/productsFetching';
import parse from 'html-react-parser';
import HomeSlider from '../components/HomeSlider';

const About = () => {
    const [aboutData, setAboutData] = useState([])
    const fetchAbout = async () => {
        try {
            const resp = await fetch(productsUrl + '/api/about/');
            const data = await resp.json()
            setAboutData(data)
        } catch (error) {

        }
    }
    useEffect(() => {
        fetchAbout()
    }, [])
    // console.log(aboutData);
    return (
        <div className='min-h-screen w-full'>
             <div className='mt-10 main-container '>
                <HomeSlider />
            </div>
            <div className='main-container border-t mt-10 py-5'>
            {parse(aboutData[0] ? aboutData[0]?.context : '')}
            </div>
        </div>
    )
}

export default About