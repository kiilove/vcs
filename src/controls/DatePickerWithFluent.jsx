import * as React from "react";
import {
  DatePicker,
  DayOfWeek,
  Dropdown,
  IDropdownOption,
  mergeStyles,
  defaultDatePickerStrings,
} from "@fluentui/react";

const days = [
  { text: "일요일", key: DayOfWeek.Sunday },
  { text: "월요일", key: DayOfWeek.Monday },
  { text: "화요일", key: DayOfWeek.Tuesday },
  { text: "수요일", key: DayOfWeek.Wednesday },
  { text: "목요일", key: DayOfWeek.Thursday },
  { text: "금요일", key: DayOfWeek.Friday },
  { text: "토요일", key: DayOfWeek.Saturday },
];
const rootClass = mergeStyles({
  maxWidth: 300,
  selectors: { "> *": { marginBottom: 15 } },
});

const DatePickerBasic = () => {
  const [firstDayOfWeek, setFirstDayOfWeek] = React.useState(DayOfWeek.Sunday);

  const onDropdownChange = React.useCallback((event, option) => {
    setFirstDayOfWeek(option.key);
  }, []);

  return (
    <div className={rootClass}>
      <DatePicker
        firstDayOfWeek={firstDayOfWeek}
        placeholder="날짜를 선택하세요"
        ariaLabel="Select a date"
        // DatePicker uses English strings by default. For localized apps, you must override this prop.
        strings={defaultDatePickerStrings}
      />
    </div>
  );
};

export default DatePickerBasic;
