import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  render() {
    const { computer } = this.props;
    let keyFrame = `@keyframes randomItem${Date.now()} {
      from {top: -20px;}
      to {top: 20px;}
    }`;
    return (
      <div className="text-center playerGame">
        <style>{keyFrame}</style>
        <div className="theThink">
          <img
            className="mt-3"
            src={computer.hinhAnh}
            alt={computer.hinhAnh}
            width={100}
            height={100}
            style={{
              transform: "rotate(90deg)",
              position: `relative`,
              animation: `randomItem${Date.now()} 100ms`,
            }}
          />
        </div>
        <div className="speech-bublle"></div>
        <img
          src="./img/playerComputer.png"
          alt="./img/playerComputer.png"
          style={{ width: 250, height: 250 }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.BaiTapOanTuXiReducer.computer,
  };
};

export default connect(mapStateToProps, null)(Computer);
