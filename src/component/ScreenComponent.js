import { Button, Col, Container, Row, UncontrolledCarousel, Card, CardText, CardBody, Cardnama, Form, FormGroup, Input } from 'reactstrap';
import carousel from '../Assets/carouselone.png';
import carousel2 from '../Assets/carouseltwo.png';
import carousel3 from '../Assets/carouselthree.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faPowerOff, faLocationArrow, faPhone, faMailBulk, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import PortofolioComponent from './PortofolioComponent';
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import qs from "qs";

const items = [
   {
      src : carousel,
      key : '1'
   },
   {
      src : carousel2,
      key : '2'
   },
   {
      src : carousel3,
      key : '3'
   }
]
const ScreenComponent = () => {
   const [value, setValue] = useState({
      datapeserta: [], // Save the Result
      input: "", // Save the Keyword
    });
  
    const getData = async () => {

      const BASE_URL = "http://localhost:3030/project_fau/query";
      
      const headers = {
         Accept: "application/sparql-results+json,*/*;q=0.9",
         "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
       };
      // Query to get Data
      const queryData = {
         query: `PREFIX data: <https://ptwijayakarya-my.sharepoint.com/#> 
         PREFIX id: <https://ptwijayakarya-my.sharepoint.com/i#> 
         PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
     
         SELECT ?nama ?jeniskelamin ?jurusan ?semester ?NoHP ?email ?unitkerja ?universitas
    WHERE
    {
      ?id data:no ?no ;
          data:nama ?nama ;
          data:jeniskelamin ?jeniskelamin ;
          data:jurusan ?jurusan ;
          data:semester ?semester ;
          data:NoHP ?NoHP ;
          data:email ?email ;
          data:unitkerja ?unitkerja ;
          data:universitas ?universitas .
               
               
               FILTER (
                 regex(?id, "${value.input}", "i") ||
                 regex(?nama, "${value.input}", "i") ||
                 regex(?jeniskelamin, "${value.input}", "i") ||
                 regex(?jurusan, "${value.input}", "i") ||
                 regex(?semester, "${value.input}", "i") ||
                 regex(?NoHP, "${value.input}", "i") ||
                 regex(?email, "${value.input}", "i") ||
                 regex(?unitkerja, "${value.input}", "i") ||
                 regex(?universitas, "${value.input}", "i") 
               )
         }`,
       };
  
  
      try {
        const { data } = await axios(BASE_URL, {
          method: "POST",
          headers,
          data: qs.stringify(queryData),
        });
        console.log(data);
  
        // Convert Data
        const formatted_data = data.results.bindings.map((temp, index) =>
          formatter(temp, index)
        );
        console.log(formatted_data);
  
        setValue({
          ...value,
          datapeserta: formatted_data,
        });

      } catch (err) {
        console.error(err);
      }
    };

    const formatter = (temp, index) => {
      return {
        id: index,
        nama: temp.nama.value,
        jeniskelamin: temp.jeniskelamin.value,
        jurusan: temp.jurusan.value,
        semester: temp.semester.value,
        NoHP: temp.NoHP.value,
        email: temp.email.value,
        unitkerja: temp.unitkerja.value,
        universitas: temp.universitas.value,
      };
    };

    
  const handleChange = (event) => {
   setValue({
     ...value,
     input: event.target.value,
   });
 };
 
console.log(value)
 const content = value.datapeserta.map((data) => (
   <tr key={data.id}>
                  <td>{data.nama}</td>
                  <td>{data.jeniskelamin}</td>
                  <td>{data.jurusan}</td>
                  <td>{data.semester}</td>
                  <td>{data.NoHP}</td>
                  <td>{data.email}</td>
                  <td>{data.unitkerja}</td>
                  <td>{data.universitas}</td>
      
              </tr> 
 ));
   return (
      <>
         <div style={{marginTop : '7%'}}>
            {/* start header */}
            <Container className='themed-container' fluid={true} id="home">
               <div className='text-center text-black mt-5'>
                  <h1>Welcome To Pencarian Data Peserta Magang WIKA</h1>
               </div>

            </Container>
            <Container className='themed-container' fluid={true} style={{width:'50%', marginTop:'5%'}}>
               <UncontrolledCarousel items={items} controls={false}/>
            </Container>
            
            <h3 align='center' style={{paddingtop:'500px'}} >Cari Data disini</h3>
            <div style={{width : '260px', margin:'0 auto'}} className="mt-5">
                  <Row>
                  <div class='search'>
               <input type="text" setvalue={value.input} onChange={handleChange} name='search-box' style={{width:'300px', height:'50px'}} class='search' placeholder='Cari disini '>
               </input>
               <Col>
                     <Button onClick={getData} style={{align:'center', backgroundColor: 'blue', borderRadius:'10px'}}><b>Search</b></Button>
                  </Col>
            </div>
                     

      
                  </Row>
               </div>
               <tr></tr>
            {/* end Carousel */}
            {/* start Service */}
            <tr></tr>
            {/* start Service */}
            {/* start About*/}
            <Container
               className="themed-container"
               fluid={true}
               style={{ marginTop: '10%', marginBottom: '10%' }}
               id="about"
            >
            </Container>
            {/* end About*/}
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
        
        {content}
            {/* {
               value.datapeserta.map((data) =>(
                  <tr key={data.id}>
                  <td>{data.nama}</td>
                  <td>{data.jeniskelamin}</td>
                  <td>{data.semester}</td>
                  <td>{data.noHp}</td>
                  <td>{data.email}</td>
                  <td>{data.unitkerja}</td>
                  <td>{data.universitas}</td>
      
              </tr> 
               ))
            } */}

            </table>
            
          </div>
        </Container>
      </Container>
            {/* start Pricing */}
{/*               */}
            
            <Container
               className="themed-container"
               fluid={true}
               style={{ marginTop: '10%', marginBottom: '10%' }}
               id="pricing"
            >
               <Container className="themed-container text-center">
                  <h1>
                  <b>About</b>
                  </h1>
                  <Col style={{ textAlign: 'justify' }} xl="12">
                    
                     <p>
                        Website ini bertujuan untuk user bisa mencari dan mendapatkan data peserta mahasiswa magang di PT Wijaya Karya dari jalur PMMB Batch 1 tahun 2022 dengan beberapa info yang tersedia
                     </p>
                  </Col>
               </Container>
            </Container>
            {/* end Pricing */}
            {/* start Contact*/}
            <Container
               className="themed-container"
               fluid={true}
               id="contact"
               style={{
                  backgroundColor: '#6C63FF',
               }}
            >
               <Container className="themed-container text-center text-white">
                 
                  <hr />
                  {/* Ini Maps */}
                  <div style={{ paddingBottom: '5%' }}>
                  <h1 className="mb-4">
                     <b>Project Akhir Semantik Web</b>
                  </h1>

                  {/* Ini Footer */}
                  <Container className="themed-container text-white">
                     <a href="#home">
                        <FontAwesomeIcon
                        icon={faChevronUp}
                        style={{
                           fontSize: '30px',
                           margin: '0 auto',
                           color: 'white',
                           marginTop: '5%',
                        }}
                        />
                     </a>
                     <p>&copy; Muhammad Alwan Fauzi - 140810190077</p>
                  </Container>
                  </div>
               </Container>
            </Container>
            {/* end Contact*/}
         </div>
      </>
   );
}

export default ScreenComponent;