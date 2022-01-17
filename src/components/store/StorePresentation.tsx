import React from 'react'
import { withTranslation } from 'react-i18next'
import { Wrapper } from '../../styles/styled-comp';
import { TitleStory } from '../story/styles/story-comp';
import {SutTitleStore} from "./styles/styled-store";
import firstPack from "./images/firstPack/firstPack"
import secondPack from "./images/secondPack/secondPack"
import ShopImages from './components/ShopImages';



function StorePresentation() {


  return (
    <article>
      <Wrapper>
        <TitleStory>Магазин CoolLearn</TitleStory>
        <SutTitleStore>
          В магазине вы можете потратить заработанные ранее тяжким трудом рубины
        </SutTitleStore>

        <ShopImages objectImages={firstPack} />

        <ShopImages objectImages={secondPack} />
      </Wrapper>
    </article>
  );
}


export default withTranslation()(StorePresentation);
