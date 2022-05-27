import React, { useEffect, useState } from 'react';
import * as P from 'prop-types';
import arrowImage from '../../assets/image/select-image.svg';
import { Arrow, CardProgrammeContainer, Information, MoreInfo, ShowingNow } from './styles';
import { handleHourFormatted } from '../../tools';
import dayjs from 'dayjs';
//import dayjs from 'dayjs';

export const ListProgrammes = ({ programme }) => {
  const [expand, setExpand] = useState(false);
  const [hour, setHour] = useState('');
  const showingNow = dayjs().unix() > programme.start_time && dayjs().unix() < programme.end_time;

  useEffect(() => {
    setHour(handleHourFormatted(programme.human_start_time, programme.custom_info.BaseUTCOffset.slice(2, 3)));
  }, [programme.custom_info.BaseUTCOffset, programme.human_start_time]);

  return (
    <CardProgrammeContainer onClick={() => setExpand(!expand)} expand={expand}>
      <div>
        <Information>
          <div>
            <img src={programme.custom_info.Graficos.URL} alt={programme.title} />
            <ShowingNow showingNow={showingNow}>{showingNow ? 'Ao vivo' : hour}</ShowingNow>
            <h2>{programme.title ? programme.title : programme.program.name}</h2>
          </div>
          <Arrow src={arrowImage} />
        </Information>
      </div>
      <MoreInfo expand={expand}>
        <img src={programme.custom_info.Graficos.ImagemURL} alt={programme.title} />
        <div>
          <div>{programme.description}</div>
          <div>Classe: {programme.custom_info.Classe}</div>
        </div>
      </MoreInfo>
    </CardProgrammeContainer>
  );
};

ListProgrammes.propTypes = {
  programme: P.object,
};
