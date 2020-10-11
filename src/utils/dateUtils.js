import moment from "moment";

export const calDay = (date) => {
  if (!date) return;
  const today = moment();
  
  const ngayDLTemp= moment(date,  moment.DATE ); //2nd param -> moment.DATETIME_LOCAL_MS
  const current = moment([today.year(), today.month(), today.date()]);
  const deadLine = moment([ngayDLTemp.year(), ngayDLTemp.month(), ngayDLTemp.date()]);
  console.log('Tinh:',deadLine.diff(current, 'days'))   // =1
  
  return deadLine.diff(current, 'days');  
}