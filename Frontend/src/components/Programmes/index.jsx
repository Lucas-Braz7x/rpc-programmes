/* eslint-disable prettier/prettier */
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useAxios } from '../../hooks/useAxios';
import { api } from '../../services/api';
import { handleDateFormatted } from '../../tools';
import { ListProgrammes } from '../ListProgrammes';
import { ArrowLeft, ArrowRight, TodayProgrammes } from './styles';
import arrow from '../../assets/image/select-image.svg';

export const Programmes = () => {
  const { data, loading } = useAxios('/programmes', '2022-05-25');
  const [date, setDate] = useState('');
  const [programmes, setProgrammes] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setProgrammes(data);
    setDate(handleDateFormatted(programmes.date));
  }, [data]);

  useEffect(() => {
    setDate(handleDateFormatted(programmes.date));
  }, [update]);

  const handleChangeDate = async (operation) => {
    let dataAnterior;
    if (operation == 'ADD') {
      dataAnterior = dayjs(programmes.date).add(1, 'day').format('YYYY-MM-DD');
    } else {
      dataAnterior = dayjs(programmes.date).subtract(1, 'day').format('YYYY-MM-DD');
    }
    const { data } = await api.get(`/programmes/${dataAnterior}`);
    setProgrammes(data.data);
    setUpdate(!update);
  };

  return (
    <TodayProgrammes>
      <div>
        <ArrowLeft onClick={handleChangeDate} src={arrow} />
        <div>{date}</div>
        <ArrowRight onClick={() => handleChangeDate('ADD')} src={arrow} />

      </div>

      <input type="search" />
      {loading && <p>Carregando...</p>}
      {programmes.entries.length > 0 &&
        programmes.entries.map((programme, index) => <ListProgrammes programme={programme} key={index} />)}
    </TodayProgrammes>
  );
};
