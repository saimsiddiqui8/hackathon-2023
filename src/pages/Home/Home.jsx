import "./Home.css"
import bgImg from "../../assets/bgImg.jpg"
import Cardx from "../../component/Card.jsx"
import { Container, Row } from 'react-bootstrap'
import { db } from '../../Config/firebase'
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"

const Home = () => {
    const [myFinalData, setMyFinalData] = useState([])
    const [myFinalId, setMyFinalId] = useState([])

    const getdata = async () => {
        const querySnapshot = await getDocs(collection(db, "items"));
        let myData = [];
        let myId = [];

        setMyFinalData(myData)
        setMyFinalId(myId)
        querySnapshot.forEach((doc) => {
            myData.push(doc.data())
            myId.push(doc.id);

        });
    }

    useEffect(() => {
        getdata()
    }, [])
    // console.log(myFinalId);
    return (
        <>
            <section>
                <div className=''>
                    <img className='bg' src={bgImg} alt="" />
                </div>
            </section>

            <section>
                <h1 className='text-center font mt-5'>Search By Category</h1>
                {/* <Slider /> */}
            </section>
            <section>

                <Container>
                    <Row>
                        {
                            myFinalData.map((data, index) => {
                                console.log(index);
                                return <Cardx data={data} indexes={index} ids={myFinalId} />

                            })
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Home