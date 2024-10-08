import { NextFontWithVariable } from "next/dist/compiled/@next/font";

type Props = {
  FjallaOne: NextFontWithVariable;
  SourceSansPro: NextFontWithVariable;
};

const DatePickerStyle = ({ FjallaOne, SourceSansPro }: Props) => (
  <style jsx global>
    {`
      :root {
        --font-fjalla: ${FjallaOne.style.fontFamily};
        --font-source-sans-pro: ${SourceSansPro.style.fontFamily};
      }

      .react-calendar {
        width: 100%;
        border: 0px;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.125em;
      }

      .react-calendar--doubleView {
        width: 100%;
      }

      .react-calendar--doubleView .react-calendar__viewContainer {
        display: flex;
        margin: -0.5em;
      }

      .react-calendar--doubleView .react-calendar__viewContainer > * {
        width: 50%;
        margin: 0.5em;
      }

      .react-calendar,
      .react-calendar *,
      .react-calendar *:before,
      .react-calendar *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }

      .react-calendar button {
        margin: 0;
        border: 0;
        outline: none;
      }

      .react-calendar button:enabled:hover {
        cursor: pointer;
      }

      .react-calendar__navigation {
        display: flex;
        height: 35px;
        margin-bottom: 1em;
      }

      .react-calendar__navigation button {
        min-width: 44px;
        background: none;
      }

      .react-calendar__navigation button:disabled {
        background-color: #f0f0f0;
      }

      .react-calendar__navigation button:enabled:hover,
      .react-calendar__navigation button:enabled:focus {
        background-color: #e6e6e6;
      }

      .react-calendar__month-view__weekdays {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.75em;
      }

      .react-calendar__month-view__weekdays__weekday {
        padding: 0.5em;
      }

      .react-calendar__month-view__weekNumbers .react-calendar__tile {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75em;
        font-weight: bold;
      }

      .react-calendar__month-view__days__day--weekend {
        color: black;
      }

      .react-calendar__month-view__days__day--neighboringMonth {
        color: #757575;
      }

      .react-calendar__year-view .react-calendar__tile,
      .react-calendar__decade-view .react-calendar__tile,
      .react-calendar__century-view .react-calendar__tile {
        padding: 2em 0.5em;
      }

      /* THIS IS A NUMBER TILE! */
      .react-calendar__tile {
        max-width: 100%;
        padding: 15px 6.6667px;
        background: none;
        text-align: center;
        line-height: 16px;
      }

      .react-calendar__tile:disabled {
        background-color: #f0f0f0;
        opacity: 1;
        color: #808080;
      }
      .react-calendar__tile--rangeStart {
        color: green;
      }

      .react-calendar__tile:enabled:hover,
      .react-calendar__tile:enabled:focus {
        background-color: #e6e6e6;
      }

      .react-calendar__tile--now {
        background: #e6e6e6;
        color: black;
      }

      .react-calendar__tile--now:enabled:hover,
      .react-calendar__tile--now:enabled:focus {
        background: #e6e6e6;
      }

      .react-calendar__tile--hasActive {
        background: #e6e6e6;
      }

      .react-calendar__tile--hasActive:enabled:hover,
      .react-calendar__tile--hasActive:enabled:focus {
        background: black;
      }

      .react-calendar__tile--active {
        color: white;
        background: #289f33;
      }

      .react-calendar__tile--active:enabled:hover,
      .react-calendar__tile--active:enabled:focus {
        background: #289f33;
      }

      .react-calendar--selectRange .react-calendar__tile--hover {
        background-color: #e6e6e6;
      }
    `}
  </style>
);

export default DatePickerStyle;
