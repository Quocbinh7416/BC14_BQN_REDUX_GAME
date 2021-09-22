import React, { Component } from "react";
import Computer from "./computer";
import KetQua from "./ketQua";
import Player from "./player";
import "./style.css";
import { connect } from "react-redux";

class GameOanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
        <div className="row text-center mt-3">
          <div className="col-4 mt-5">
            <Player />
          </div>
          <div className="col-4 mt-5">
            <KetQua />
            <button
              onClick={() => {
                this.props.playgame();
              }}
              className="btn btn-success mt-5"
            >
              Play game
            </button>
          </div>
          <div className="col-4 mt-5">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    playgame: () => {
      let count = 1;
      // khai bao ham lap di lap lai
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RANDOM",
        });
        count++;
        if (count >= 10) {
          clearInterval(randomComputerItem);

          dispatch({
            type: "END_GAME",
          });
        }
      }, 100);
    },
  };
};
export default connect(null, mapDispatchToProps)(GameOanTuXi);
