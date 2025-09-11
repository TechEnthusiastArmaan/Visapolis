// // src/app/components/booking/DatePicker.js
// 'use client';

// import { DayPicker } from 'react-day-picker';
// import 'react-day-picker/dist/style.css';
// import { addDays, endOfMonth } from 'date-fns';

// export default function DatePicker({ onDateSelect }) {
//   const today = new Date();
//   const twoDaysFromNow = addDays(today, 2);
//   const endOfCurrentMonth = endOfMonth(today);

//   const disabledDays = [
//     { from: new Date(1900, 1, 1), to: twoDaysFromNow },
//     { from: addDays(endOfCurrentMonth, 1), to: new Date(2200, 1, 1) }
//   ];

//   return (
//     <div className="flex flex-col items-center">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Select a Date</h2>
//       <div className="p-4 border rounded-lg shadow-sm bg-white">
//         <DayPicker
//           mode="single"
//           onSelect={onDateSelect}
//           disabled={disabledDays}
//           initialFocus
//         />
//       </div>
//     </div>
//   );
// }