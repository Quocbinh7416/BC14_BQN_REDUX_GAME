import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    console.log(this.props.mangDatCuoc);
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img
            className="mt-3"
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            alt={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            width={100}
            height={100}
            style={{ transform: "rotate(-90deg)" }}
          />
        </div>
        <div className="speech-bublle"></div>
        <img
          src="./img/player.png"
          alt="player"
          style={{ width: 250, height: 250 }}
        />
        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            // xet gia tri dat cuoc them vien cho item
            let border = {};
            if (item.datCuoc) {
              border = { border: "5px solid orange" };
            }
            return (
              <div className="col-4" key={index}>
                <button
                  style={border}
                  className="btnItem"
                  onClick={() => {
                    this.props.datCuoc(item.ma);
                  }}
                >
                  <img src={item.hinhAnh} alt={item.hinhAnh} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc,
  };
};
const mapDispatchToProp = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Player);
