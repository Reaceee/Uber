import React from 'react'

import Card from './focusCard.jsx'
import pic1 from '../assets/images/pic1.webp'
import pic2 from '../assets/images/pic2.webp'

const focused = () => {
    const [title, setTitle] = React.useState('Our commitment to your safety')

    const [text, setText] = React.useState("With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.")
    // const [link, setLink] = React.useState("Read about our Community Guidelines")

    return (
        <>
            <div className="px-5 md:px-16">
                <p className="title py-8 md:text-3xl text-2xl font-bold font-plus leading-snug text-gray-800">
                    Focused on safety, wherever you go
                </p>
                <div className="Cards gap-6 flex md:flex-row flex-col">
                <Card img={pic1} title={title} text={text} links={["Read about our Community Guidelines", "See all safety features"]}/>
                <Card img={pic2} title={"Setting 10,000+ cities in motion"} text={"The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home."} links={["View all cities"]}/>
                </div>
            </div>
        </>
    )
}

export default focused;