import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { MY_KEY } from '../data/data';

import Header from '../component/Header';
import Content from '../component/Content';

const MainWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eee;
`

const ROW_COUNT = 15;

function Main() {
  const [apiData, setApiData] = useState([]);
  const [totalDataCount, setTotalDataCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [userLocation, setUserLocation] = useState("대구");

  useEffect(()=> {
    const getApi = async ()=> {
      try {
        const response = await axios.get(
          `B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${MY_KEY}&returnType=json&numOfRows=${ROW_COUNT}&pageNo=${pageNumber}&sidoName=${userLocation}&ver=1.0`
        );
        setApiData(response.data.response.body.items);
        setTotalDataCount(response.data.response.body.totalCount);
      } catch(e) {
        console.log(e);
      }
    };

    getApi();
  }, [])
  return (
    <MainWrap>
      <Header />
      <Content />
    </MainWrap>
  )
}

export default Main
