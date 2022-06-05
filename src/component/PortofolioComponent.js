import React, { useEffect, useState } from 'react'
import {
  Row,
  Col,
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap'
import db from '../firestore';

const PortofolioComponent = (props) => {
  console.log(props.value)
  const [data, setData] = useState()

  // get data dari firebase
  const portofolioData = (va) => {
    db.collection('portofolio').onSnapshot((snapshot) => {
      setData(snapshot.docs.map((doc) => doc.data()))
    })
  }

  useEffect(() => {
    portofolioData()
  }, [])

  return (
    <>
      {/* Ini Portofolio */}
      <Container
        className="themed-container"
        fluid={true}
        id="portofolio"
        style={{
          borderTopRightRadius: '150px',
          borderBottomLeftRadius: '150px',
          backgroundColor: '#6C63FF',
          paddingTop: '10%',
          paddingBottom: '15%',
        }}
      >
        <Container className="themed-container text-center text-white">
          <div>
            <h1>
              <b>Data Semua Peserta</b>
            </h1>
            <p>Data Peserta Magang PMMB Batch 1 PT Wijaya Karya Persero Tbk</p>
            <table  align="center" border="1" cellpadding="10">
        <tr>
            <td>Nama</td>
            <td>Jenis Kelamin</td>
            <td>Jurusan</td>
            <td>Semester </td>
            <td>No Handphone</td>
            <td>Email</td>
            <td>Unit Kerja</td>
            <td>Universitas</td>

        </tr>
        {/* <tr>
            <td>Muhammad Reza Utama Pulungan</td>
            <td>Laki-Laki</td>
            <td>Sistem Informasi</td>
            <td>082165653561</td>
            <td>8</td>  
            <td>mrezautamapulungan@gmail.com</td>
            <td>Divisi Human Capital</td>
            <td>UNIVERSITAS BRAWIJAYA</td>
        </tr> */}

            </table>
            
          </div>
        </Container>
      </Container>
    </>
  )
}

export default PortofolioComponent