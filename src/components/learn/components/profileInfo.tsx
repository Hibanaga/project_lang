import React from "react";
import { connect } from "react-redux";
import { Wrapper, Row } from "../../../styles/styled-comp";
import {
  imgCrown,
  americaFlag,
  imgCoin,
  loadMore,
} from "../images/imageExport";

interface stateProp {
  crown?: number;
  coin?: number;
}

function profileInfo({ crown, coin }: stateProp) {
  return (
    <aside className="containerProfileInfo">
      <Wrapper className="wrapperProfileInfo">
        <Row className="rowProfileInfo">
          <img src={americaFlag} alt="america flag" />

          <div className="wrapperUserCoins">
            <div className="containerUserCoin">
              <img src={imgCoin} alt="img coin" />
              <span className="descriptionUserCoin descriptionCoin">
                {coin}
              </span>
            </div>

            <div className="containerUserCoin">
              <img src={imgCrown} alt="img crown" />
              <span className="descriptionUserCoin descriptioCrown">
                {crown}
              </span>
            </div>
          </div>

          <button className="js-btn_loadMore">
            <img src={loadMore} alt="img loadmore" />
          </button>
        </Row>
      </Wrapper>
    </aside>
  );
}

interface objReduxProp {
  crown: number;
  coin: number;
}

interface reduxProp {
  profile: objReduxProp;
}

const mapStateToProps = ({ profile }: reduxProp) => ({
  crown: profile.crown,
  coin: profile.coin,
});

export default connect(mapStateToProps, null)(React.memo(profileInfo));
