import React from 'react';

function sum(a: any, b: any) {
  return a + b;
}

// import { all, call } from 'redux-saga/effects';

// import api from '../../../services/api';
// import { formatPrice } from '../../../util/format';

// function* updateAmount({ name, amount }) {
//   if (amount <= 0) return;

//   const stock = yield call(api.get, `stock/${name}`);
//   const stockAmount = stock.data.amount;

//   if (amount > stockAmount) {
//     toast.error('Quantidade solicitada fora de estoque.');
//     return;
//   }

//   yield put(updateAmountSuccess(id, amount));
// }

// export default all([]);
