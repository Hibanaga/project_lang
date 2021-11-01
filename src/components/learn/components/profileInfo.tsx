import React from "react";
import { connect } from "react-redux";
import { Wrapper, Row } from "../../../styles/styled-comp";
<<<<<<< HEAD
import flagObj from "../images/flagExport";
import { imgCrown, imgCoin, unknown } from "../images/imageExport";
=======
import {
  imgCrown,
  russianFlag,
  // polishFlag,
  imgCoin,
  unknown,
} from "../images/imageExport";
>>>>>>> 0d9bff4779fc9ce4d5c34247b271222a9c2feef6

interface stateProp {
  crown?: number;
  coin?: number;
  onChangePathMessageHandler: (p: any) => void;
<<<<<<< HEAD
  currLang: string;
}

function profileInfo({
  crown,
  coin,
  currLang,
  onChangePathMessageHandler,
}: stateProp) {
=======
}

function profileInfo({ crown, coin, onChangePathMessageHandler }: stateProp) {
>>>>>>> 0d9bff4779fc9ce4d5c34247b271222a9c2feef6
  return (
    <aside className="containerProfileInfo">
      <Wrapper className="wrapperProfileInfo">
        <Row className="rowProfileInfo">
          <img
<<<<<<< HEAD
            src={flagObj[currLang]}
=======
            src={russianFlag}
>>>>>>> 0d9bff4779fc9ce4d5c34247b271222a9c2feef6
            alt="flag"
            data-theme="flag"
            onClick={onChangePathMessageHandler}
          />

          <div className="wrapperUserCoins">
            <div
              className="containerUserCoin"
              data-theme="rubin"
              onClick={onChangePathMessageHandler}
            >
              <img src={imgCoin} alt="img coin" />
              <span className="descriptionUserCoin descriptionCoin">
                {coin}
              </span>
            </div>

            <div
              className="containerUserCoin"
              data-theme="crown"
              onClick={onChangePathMessageHandler}
            >
              <img src={imgCrown} alt="img crown" />
              <span className="descriptionUserCoin descriptioCrown">
                {crown}
              </span>
            </div>
          </div>

          <button
            className="js-btn_loadMore"
            data-theme="profile"
            onClick={onChangePathMessageHandler}
          >
            <img src={unknown} alt="img loadmore" />
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
