import React from 'react'
import vg from '../assets/2.webp';
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai";

const Home = () => {
  return (
    <>
        <div className='home' id='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all your Problems</p>
        </main>
        </div>
    
        <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
                <p>
                    We are your one and only solutions to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in children.
                </p>
            </div>
        </div>

        <div className="home3" id="about">
            <div>
                <h1>Who we are?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident fugit sunt maxime officiis, distinctio quaerat itaque qui sint error at obcaecati rem quisquam neque nobis quae, incidunt necessitatibus dolore adipisci.
                Rerum sapiente possimus impedit placeat ullam praesentium, facere id sit quisquam quibusdam natus blanditiis rem nemo, a ad repudiandae odio doloremque harum porro iure mollitia nesciunt ex quidem optio. Laudantium.
                Architecto tempora recusandae asperiores maxime enim, dolore tenetur quis quo necessitatibus omnis nam commodi ipsam aspernatur numquam nemo tempore esse minus accusamus cupiditate veniam earum doloribus? Sequi voluptates perferendis doloremque.
                Quasi assumenda aliquam recusandae quibusdam officiis fugiat in! Commodi, magnam voluptatum? Repudiandae veritatis eius fugit asperiores odit consectetur excepturi commodi? Iure deserunt ex distinctio quam! Beatae aliquid enim eligendi dolor?
                Magnam quam eius in fugit voluptate voluptates distinctio aspernatur iure laboriosam asperiores iusto sit ab animi, eos numquam mollitia ea alias corporis! Deleniti quae quam eligendi doloremque corporis ea qui.</p>
            </div>
        </div>

        <div className="home4" id="brands">
            <div>
                <h1>Brands</h1>

                <article>
                    <div
                     style={{
                        animationDelay: "0.3s"
                        }} 
                    >
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>
                    <div
                     style={{
                        animationDelay: "0.5s"
                        }} 
                    >
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>
                    <div
                     style={{
                        animationDelay: "0.7s"
                        }} 
                    >
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>
                    <div
                     style={{
                        animationDelay: "0.9s"
                        }} 
                    >
                        <AiFillYoutube />
                        <p>YouTube</p>
                    </div>
                </article>
            </div>
        </div>
    </>
  )
}

export default Home