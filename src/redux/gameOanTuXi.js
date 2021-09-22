const intialState = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./img/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/bao.png", datCuoc: false },
  ],
  ketQua: "CONGRATULATION !!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/keo.png" },
};
const BaiTapOanTuXiReducer = (state = intialState, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      let mangCuocUpdate = [...state.mangDatCuoc];
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });

      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }
    case "RANDOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;

      return { ...state };
    }
    case "END_GAME": {
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;

      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "DRAW !!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "LOST !!!";
          } else {
            state.ketQua = "CONGRATULATION !!!";
            state.soBanThang += 1;
          }
          break;
        case "bua":
          if (computer.ma === "keo") {
            state.ketQua = "CONGRATULATION !!!";
            state.soBanThang += 1;
          } else if (computer.ma === "bua") {
            state.ketQua = "DRAW !!!";
          } else {
            state.ketQua = "LOST !!!";
          }
          break;
        case "bao":
          if (computer.ma === "keo") {
            state.ketQua = "LOST !!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "CONGRATULATION !!!";
            state.soBanThang += 1;
          } else {
            state.ketQua = "DRAW !!!";
          }
          break;

        default:
          state.soBanThang += 1;
          state.ketQua = "CONGRATULATION !!!";
      }
      state.soBanChoi += 1;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default BaiTapOanTuXiReducer;
